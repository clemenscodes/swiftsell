provider "google-beta" {
  project     = var.project_id
  region      = var.region
  credentials = base64decode(google_service_account_key.firebase_key.private_key)
}

resource "google_service_account_key" "firebase_key" {
  service_account_id = var.service_account_name
}

resource "google_project_service" "firebase" {
  provider = google-beta
  project  = var.project_id
  service  = "firebase.googleapis.com"
}

resource "google_project_service" "firestore" {
  provider = google-beta
  project  = var.project_id
  service  = "firestore.googleapis.com"
}

resource "google_project_service" "appengine" {
  provider = google-beta
  project  = var.project_id
  service  = "appengine.googleapis.com"
}

resource "google_project_service" "firebasestorage" {
  provider = google-beta
  project  = var.project_id
  service  = "firebasestorage.googleapis.com"
}

resource "google_firebase_project" "default" {
  provider = google-beta
  project  = var.project_id

  depends_on = [
    google_project_service.firebase,
  ]
}

resource "google_firestore_database" "database" {
  provider                    = google-beta
  project                     = var.project_id
  location_id                 = var.firestore_location
  name                        = "(default)"
  type                        = "FIRESTORE_NATIVE"
  concurrency_mode            = "OPTIMISTIC"
  app_engine_integration_mode = "DISABLED"

  depends_on = [google_project_service.firestore]
}

resource "google_firebase_project_location" "default" {
  provider    = google-beta
  location_id = var.firebase_location

  depends_on = [
    google_firebase_project.default,
  ]
}

resource "google_firebase_web_app" "basic" {
  provider        = google-beta
  project         = var.project_id
  display_name    = var.project_name
  deletion_policy = "DELETE"

  depends_on = [
    google_project_service.firebase,
    google_firebase_project.default
  ]
}

resource "google_storage_bucket" "default" {
  provider = google-beta
  project  = var.project_id
  name     = var.firebase_bucket_name
  location = "EU"
}

resource "google_firebase_storage_bucket" "default" {
  provider  = google-beta
  project   = var.project_id
  bucket_id = google_storage_bucket.default.id

  depends_on = [
    google_project_service.firebase,
    google_project_service.firebasestorage,
    google_firebase_project.default
  ]
}

data "google_firebase_web_app_config" "basic" {
  provider   = google-beta
  web_app_id = google_firebase_web_app.basic.app_id
}

resource "google_storage_bucket_object" "default" {
  provider = google-beta
  bucket   = google_storage_bucket.default.name
  name     = "firebase-config.json"

  content = jsonencode({
    appId             = google_firebase_web_app.basic.app_id
    apiKey            = data.google_firebase_web_app_config.basic.api_key
    authDomain        = data.google_firebase_web_app_config.basic.auth_domain
    databaseURL       = lookup(data.google_firebase_web_app_config.basic, "database_url", "")
    storageBucket     = lookup(data.google_firebase_web_app_config.basic, "storage_bucket", "")
    messagingSenderId = lookup(data.google_firebase_web_app_config.basic, "messaging_sender_id", "")
    measurementId     = lookup(data.google_firebase_web_app_config.basic, "measurement_id", "")
  })
}

