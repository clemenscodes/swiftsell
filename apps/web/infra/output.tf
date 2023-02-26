output "org_name" {
  value = module.wif_data.org_name
}

# output "ip" {
#   value = module.cdn.ip
# }

output "domain" {
  value = module.wif_data.domain
}

output "project_id" {
  value = module.project.project_id
}

output "project_name" {
  value = module.project.name
}

output "state_bucket" {
  value = module.state_bucket.name
}

output "isr_bucket" {
  value = module.isr_bucket.name
}

# output "cdn_bucket" {
#   value = module.cdn.cdn_bucket_name
# }

output "repository_id" {
  value = module.artifact-registry-repository.repository_id
}

output "artifact_region" {
  value = module.artifact-registry-repository.region
}

output "git_commit_sha" {
  value = var.git_commit_sha
}

# output "cdn_subdomain" {
#   value = module.cdn.subdomain
# }

# output "certificate_id" {
#   value = module.cdn.certificate_id
# }

# output "map_id" {
#   value = module.cdn.map_id
# }

# output "proxy_id" {
#   value = module.cdn.proxy_id
# }
