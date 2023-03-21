output "org_name" {
  value     = module.wif_data.org_name
  sensitive = true
}

output "domain" {
  value     = module.wif_data.domain
  sensitive = true
}

output "project_id" {
  value     = module.project.project_id
  sensitive = true
}

output "project_number" {
  value     = module.project.number
  sensitive = true
}

output "project_name" {
  value     = module.project.name
  sensitive = true
}

output "state_bucket" {
  value     = module.state_bucket.name
  sensitive = true
}

output "isr_bucket" {
  value     = module.isr_bucket.name
  sensitive = true
}

output "repository_id" {
  value     = module.artifact-registry-repository.repository_id
  sensitive = true
}

output "artifact_region" {
  value     = module.artifact-registry-repository.region
  sensitive = true
}

output "git_commit_sha" {
  value = var.git_commit_sha
}

output "app_id" {
  value     = module.firebase.app_id
  sensitive = true
}

output "api_key" {
  value     = google_apikeys_key.browser_key.key_string
  sensitive = true
}

output "auth_domain" {
  value     = data.google_firebase_web_app_config.basic.auth_domain
  sensitive = true
}

output "storage_bucket" {
  value     = lookup(data.google_firebase_web_app_config.basic, "storage_bucket", "")
  sensitive = true
}

output "sender_id" {
  value     = lookup(data.google_firebase_web_app_config.basic, "messaging_sender_id", "")
  sensitive = true
}

output "next_auth_secret" {
  value     = random_password.next_auth_secret.result
  sensitive = true
}

output "cookie_secret_previous" {
  value     = random_password.cookie_secret_previous.result
  sensitive = true
}

output "cookie_secret_current" {
  value     = random_password.cookie_secret_current.result
  sensitive = true
}

# output "ip" {
#   value = module.cdn.ip
# }

# output "cdn_bucket" {
#   value = module.cdn.cdn_bucket_name
# }

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
