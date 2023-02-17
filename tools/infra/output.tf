output "provider" {
  value = module.workload_identity_federation.provider
}

output "service_account_email" {
  value = module.workload_identity_federation.service_account_email
}

output "state_bucket" {
  value = module.workload_identity_federation.state_bucket
}
