output "secret_id" {
  value = google_secret_manager_secret.secret.secret_id
}

output "name" {
  value = google_secret_manager_secret.secret.name
}
