output "url" {
  value     = module.run.url
  sensitive = true
}

output "domain" {
  value     = module.app.domain
  sensitive = true
}

output "project_id" {
  value     = module.app.project_id
  sensitive = true
}

output "project_name" {
  value     = var.project_name
  sensitive = true
}

output "state_bucket" {
  value     = module.app.state_bucket
  sensitive = true
}

output "isr_bucket" {
  value     = module.app.isr_bucket
  sensitive = true
}

output "repository_id" {
  value     = module.app.repository_id
  sensitive = true
}

output "artifact_region" {
  value     = module.app.artifact_region
  sensitive = true
}

output "cloud_run_subdomain" {
  value     = module.run.cloud_run_subdomain
  sensitive = true
}

output "cloud_run_service_name" {
  value     = module.run.cloud_run_service_name
  sensitive = true
}

output "mapped_cloud_run_domain" {
  value     = module.run.mapped_cloud_run_domain
  sensitive = true
}

output "next_auth_secret" {
  value     = module.app.next_auth_secret
  sensitive = true
}

# output "ip" {
#   value = module.app.ip
# }

# output "cdn_subdomain" {
#   value = module.app.cdn_subdomain
# }

# output "cdn_bucket" {
#   value = module.app.cdn_bucket
# }

