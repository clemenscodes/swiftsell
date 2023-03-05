locals {
  domain = "${var.subdomain}.${module.wif_data.domain}"
}

module "wif_data" {
  source = "../../../libs/infra/workload_identity_federation/data"
}

module "project" {
  source              = "github.com/GoogleCloudPlatform/cloud-foundation-fabric/modules/project"
  billing_account     = module.wif_data.billing_account
  name                = var.project_name
  parent              = "organizations/${module.wif_data.org_id}"
  skip_delete         = false
  auto_create_network = false
  services = [
    "artifactregistry.googleapis.com",
    "secretmanager.googleapis.com",
    "compute.googleapis.com",
    "iam.googleapis.com",
    "firebase.googleapis.com",
    "firestore.googleapis.com",
    "firebasestorage.googleapis.com",
    "apikeys.googleapis.com",
    "appengine.googleapis.com",
    "iamcredentials.googleapis.com",
    "secretmanager.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "serviceusage.googleapis.com"
  ]
  labels = {
    "firebase" = "enabled"
  }
}

module "firebase" {
  source               = "../../../libs/infra/firebase"
  project_id           = module.project.project_id
  project_name         = var.project_name
  firebase_bucket_name = "${module.project.name}-firebase"
  region               = var.firebase_region
  firestore_location   = var.firestore_location
  firebase_location    = var.firebase_location
}

resource "google_project_iam_member" "wif" {
  project = module.project.project_id
  role    = "roles/iam.workloadIdentityUser"
  member  = module.wif_data.wif_principal
}

resource "google_project_iam_member" "wif_service_account_user" {
  project = module.project.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = module.wif_data.wif_principal
}

resource "google_project_iam_member" "wif_service_account_token_creator" {
  project = module.project.project_id
  role    = "roles/iam.serviceAccountTokenCreator"
  member  = module.wif_data.wif_principal
}

resource "google_project_iam_member" "api_keys_viewer" {
  project = module.project.project_id
  role    = "roles/serviceusage.apiKeysViewer"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "appengine_admin" {
  project = module.project.project_id
  role    = "roles/appengine.appAdmin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "iam_service_account_user" {
  project = module.project.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "iam_service_account_token_creator" {
  project = module.project.project_id
  role    = "roles/iam.serviceAccountTokenCreator"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "run_service_agent" {
  project = module.project.project_id
  role    = "roles/run.serviceAgent"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "firebase_admin" {
  project = module.project.project_id
  role    = "roles/firebase.admin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "secret_manager_admin" {
  project = module.project.project_id
  role    = "roles/secretmanager.admin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "storage_admin" {
  project = module.project.project_id
  role    = "roles/storage.admin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "storage_object_admin" {
  project = module.project.project_id
  role    = "roles/storage.objectAdmin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "run_admin" {
  project = module.project.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "artifact_registry_service_agent" {
  project = module.project.project_id
  role    = "roles/artifactregistry.serviceAgent"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "artifact_registry_admin" {
  project = module.project.project_id
  role    = "roles/artifactregistry.admin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "compute_admin" {
  project = module.project.project_id
  role    = "roles/compute.admin"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_project_iam_member" "firebasemanagementserviceagent" {
  project = module.project.project_id
  role    = "roles/firebase.managementServiceAgent"
  member  = "serviceAccount:${module.wif_data.service_account_email}"
}

resource "google_apikeys_key" "browser_key" {
  name         = "firebase-api-key"
  display_name = "Browser key (auto created by Terraform)"
  project      = module.project.project_id
  restrictions {
    api_targets {
      service = "firebase.googleapis.com"
    }
    api_targets {
      service = "firestore.googleapis.com"
    }
    api_targets {
      service = "firebasestorage.googleapis.com"
    }
    browser_key_restrictions {
      allowed_referrers = [local.domain, "${local.domain}/*"]
    }
  }
  depends_on = [
    google_project_iam_member.firebasemanagementserviceagent
  ]
}

module "state_bucket" {
  source     = "../../../libs/infra/bucket/state"
  project_id = module.project.project_id
  bucket     = var.state_bucket
}

module "artifact-registry-repository" {
  source        = "../../../libs/infra/artifact"
  location      = var.artifact_region
  project_id    = module.project.project_id
  repository_id = var.repository_id
}

module "isr_bucket" {
  source     = "../../../libs/infra/bucket/isr"
  project_id = module.project.project_id
  bucket     = var.isr_bucket
}

# resource "google_project_iam_member" "vpcaccess_admin" {
#   project = module.project.project_id
#   role    = "roles/vpcaccess.admin"
#   member  = "serviceAccount:${module.wif_data.service_account_email}"
# }

# module "cdn" {
#   source           = "../../../libs/infra/cdn"
#   domain           = module.wif_data.domain
#   project_id       = module.project.project_id
#   bucket           = var.cdn_bucket
#   region           = var.cdn_region
#   subdomain        = var.cdn_subdomain
#   certificate_name = "${var.project_name}-certificate"
# }
