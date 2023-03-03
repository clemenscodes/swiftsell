provider "google-beta" {
  project = var.project_id
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

resource "google_project_service" "apikeys" {
  provider = google-beta
  project  = var.project_id
  service  = "apikeys.googleapis.com"
}

resource "google_firebase_project" "default" {
  provider = google-beta
  project  = var.project_id

  depends_on = [
    google_project_service.firebase,
    google_project_service.firebasestorage,
    google_project_service.appengine,
    google_project_service.firestore,
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
