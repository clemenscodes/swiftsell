output "url" {
  value     = google_cloud_run_v2_service.default.uri
  sensitive = true
}

output "cloud_run_subdomain" {
  value     = var.cloud_run_subdomain
  sensitive = true
}

output "mapped_cloud_run_domain" {
  value     = "https://${var.cloud_run_subdomain}.${var.domain}"
  sensitive = true
}

output "cloud_run_service_name" {
  value     = var.cloud_run_service_name
  sensitive = true
}
