terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
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
  subdomain       = var.cloud_run_subdomain
  git_commit_sha  = var.git_commit_sha
}

module "run" {
  source                 = "../../../../libs/infra/run/server"
  git_commit_sha         = var.git_commit_sha
  org_name               = module.app.org_name
  domain                 = module.app.domain
  cloud_run_subdomain    = var.cloud_run_subdomain
  project_name           = var.project_name
  repository_id          = var.repository_id
  cloud_run_region       = var.cloud_run_region
  artifact_region        = var.artifact_region
  project_id             = module.app.project_id
  cloud_run_service_name = var.cloud_run_service_name
  database_url           = var.database_url
  shadow_database_url    = var.shadow_database_url
  #   subnet_cidr_range      = var.subnet_cidr_range
}
