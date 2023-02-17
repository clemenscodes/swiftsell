output "provider" {
  value = module.data.provider
}

output "service_account_email" {
  value = module.data.service_account_email
}

output "state_bucket" {
  value = module.state_bucket.name
}
