data "google_organization" "org" {
  domain = var.domain
}

data "google_project" "project" {
  project_id = var.project_id
}

data "google_service_account" "wif_sa" {
  account_id = var.workload_identity_service_account_id
  project    = var.project_id
}
