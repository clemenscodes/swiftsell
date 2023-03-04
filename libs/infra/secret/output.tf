output "secret_id" {
  value     = google_secret_manager_secret.secret.secret_id
  sensitive = true
}

output "name" {
  value     = google_secret_manager_secret.secret.name
  sensitive = true
}
