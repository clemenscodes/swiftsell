terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.55.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = ">= 4.55.0"
    }
  }
}

module "app" {
  source             = "../"
  project_name       = var.project_name
  state_bucket       = var.state_bucket
  artifact_region    = var.artifact_region
  repository_id      = var.repository_id
  git_commit_sha     = var.git_commit_sha
  isr_bucket         = var.isr_bucket
  firebase_region    = var.cloud_run_region
  firestore_location = var.firestore_location
  firebase_location  = var.firebase_location
  subdomain          = var.cloud_run_subdomain
  #   cdn_bucket      = var.cdn_bucket
  #   cdn_region      = var.cdn_region
  #   cdn_subdomain   = var.cdn_subdomain
}

module "run" {
  source                 = "../../../../libs/infra/run/client"
  git_commit_sha         = var.git_commit_sha
  org_name               = module.app.org_name
  domain                 = module.app.domain
  cloud_run_subdomain    = var.cloud_run_subdomain
  project_name           = var.project_name
  repository_id          = var.repository_id
  cloud_run_service_name = var.cloud_run_service_name
  cloud_run_region       = var.cloud_run_region
  artifact_region        = var.artifact_region
  project_id             = module.app.project_id
  app_id                 = module.app.app_id
  api_key                = module.app.api_key
  auth_domain            = module.app.auth_domain
  storage_bucket         = module.app.storage_bucket
  sender_id              = module.app.sender_id
  next_auth_secret       = module.app.next_auth_secret
  cookie_secret_previous = module.app.cookie_secret_previous
  cookie_secret_current  = module.app.cookie_secret_current
  #   subnet_cidr_range      = var.subnet_cidr_range
}
