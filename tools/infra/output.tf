output "provider" {
  value     = module.workload_identity_federation.provider
  sensitive = true
}

output "service_account_email" {
  value     = module.workload_identity_federation.service_account_email
  sensitive = true
}

output "state_bucket" {
  value     = module.workload_identity_federation.state_bucket
  sensitive = true
}
