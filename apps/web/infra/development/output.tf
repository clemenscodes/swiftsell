output "url" {
  value = module.run.url
}

output "domain" {
  value = module.app.domain
}

output "project_id" {
  value = module.app.project_id
}

output "project_number" {
  value = module.app.project_number
}

output "folder_name" {
  value = var.folder_name
}

output "project_name" {
  value = var.project_name
}

output "state_bucket" {
  value = module.app.state_bucket
}

output "isr_bucket" {
  value = module.app.isr_bucket
}

output "repository_id" {
  value = module.app.repository_id
}

output "artifact_region" {
  value = module.app.artifact_region
}

output "cloud_run_subdomain" {
  value = module.run.cloud_run_subdomain
}

output "mapped_cloud_run_domain" {
  value = module.run.mapped_cloud_run_domain
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

# output "certificate_id" {
#   value = module.app.certificate_id
# }

# output "map_id" {
#   value = module.app.map_id
# }

# output "proxy_id" {
#   value = module.app.proxy_id
# }
