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
  source          = "../"
  project_name    = var.project_name
  state_bucket    = var.state_bucket
  artifact_region = var.artifact_region
  repository_id   = var.repository_id
  git_commit_sha  = var.git_commit_sha
  isr_bucket      = var.isr_bucket
  subdomain       = var.cloud_run_subdomain
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
  next_auth_secret       = module.app.next_auth_secret
  hasura_endpoint        = var.hasura_endpoint
  image_endpoint         = var.image_endpoint
  #   subnet_cidr_range      = var.subnet_cidr_range
}
