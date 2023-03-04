output "provider" {
  value = module.data.provider
  sensitive = true
}

output "service_account_email" {
  value = module.data.service_account_email
  sensitive = true
}

output "state_bucket" {
  value = module.state_bucket.name
  sensitive = true
}
