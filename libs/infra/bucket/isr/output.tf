output "name" {
  value     = google_storage_bucket.isr_bucket.name
  sensitive = true
}
