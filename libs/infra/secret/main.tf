resource "google_secret_manager_secret" "secret" {
  project   = var.project_id
  secret_id = var.secret_id

  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret_version" "data" {
  secret      = google_secret_manager_secret.secret.id
  secret_data = var.secret_data
}

resource "google_secret_manager_secret_iam_member" "member" {
  project    = google_secret_manager_secret.secret.project
  secret_id  = google_secret_manager_secret.secret.secret_id
  role       = "roles/secretmanager.secretAccessor"
  member     = var.service_account
  depends_on = [google_secret_manager_secret.secret]
}
