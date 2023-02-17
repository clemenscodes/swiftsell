terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.53.0"
    }
  }
}

module "app" {
  source          = "../"
  project_name    = var.project_name
  state_bucket    = var.state_bucket
  folder_name     = var.folder_name
  artifact_region = var.artifact_region
  repository_id   = var.repository_id
  git_commit_sha  = var.git_commit_sha
  isr_bucket      = var.isr_bucket
  cdn_bucket      = var.cdn_bucket
  cdn_region      = var.cdn_region
  cdn_subdomain   = var.cdn_subdomain
}

module "run" {
  source                 = "../../../../libs/infra/run"
  git_commit_sha         = var.git_commit_sha
  org_name               = module.app.org_name
  domain                 = module.app.domain
  cloud_run_subdomain    = var.cloud_run_subdomain
  project_id             = module.app.project_id
  project_name           = var.project_name
  folder_name            = var.folder_name
  repository_id          = var.repository_id
  cloud_run_service_name = var.cloud_run_service_name
  cloud_run_region       = var.cloud_run_region
  artifact_region        = var.artifact_region
}
