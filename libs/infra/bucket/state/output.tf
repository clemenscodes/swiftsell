output "name" {
  value     = google_storage_bucket.state_bucket.name
  sensitive = true
}
