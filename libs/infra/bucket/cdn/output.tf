output "name" {
  value     = google_storage_bucket.cdn_bucket.name
  sensitive = true
}
