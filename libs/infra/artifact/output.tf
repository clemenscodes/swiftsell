output "repository_id" {
  value     = google_artifact_registry_repository.default.repository_id
  sensitive = true
}

output "region" {
  value     = google_artifact_registry_repository.default.location
  sensitive = true
}
