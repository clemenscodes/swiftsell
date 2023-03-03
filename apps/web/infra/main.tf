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

# resource "google_project_iam_member" "vpcaccess_admin" {
#   project = module.project.project_id
#   role    = "roles/vpcaccess.admin"
#   member  = "serviceAccount:${module.wif_data.service_account_email}"
# }

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

# locals {
#   sa = "serviceAccount:${google_service_account.cloud_run_service_account.email}"
# }

# data "google_firebase_web_app_config" "basic" {
#   provider   = google-beta
#   project    = var.project_id
#   web_app_id = var.app_id
# }

# module "firebase_secret_project_id" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
#   secret_data     = var.project_id
# }

# module "firebase_secret_app_id" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "NEXT_PUBLIC_FIREBASE_APP_ID"
#   secret_data     = var.app_id
# }

# module "firebase_secret_api_key" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "NEXT_PUBLIC_FIREBASE_API_KEY"
#   secret_data     = data.google_firebase_web_app_config.basic.api_key
# }

# module "firebase_secret_auth_domain" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
#   secret_data     = data.google_firebase_web_app_config.basic.auth_domain
# }

# module "firebase_secret_storage_bucket" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
#   secret_data     = lookup(data.google_firebase_web_app_config.basic, "storage_bucket", "")
# }

# module "firebase_secret_messaging_sender_id" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
#   secret_data     = lookup(data.google_firebase_web_app_config.basic, "messaging_sender_id", "")
# }

# resource "random_password" "cookie_secret_current" {
#   length           = 16
#   special          = true
#   override_special = "!#$%&*()-_=+[]{}<>:?"
# }

# resource "random_password" "cookie_secret_previous" {
#   length           = 16
#   special          = true
#   override_special = "!#$%&*()-_=+[]{}<>:?"
# }

# module "cookie_secret_previous" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "COOKIE_SECRET_PREVIOUS"
#   secret_data     = random_password.cookie_secret_previous.result
# }

# module "cookie_secret_current" {
#   source          = "../secret"
#   project_id      = var.project_id
#   service_account = local.sa
#   secret_id       = "COOKIE_SECRET_CURRENT"
#   secret_data     = random_password.cookie_secret_current.result
# }

# resource "google_project_service" "run" {
#   project            = var.project_id
#   service            = "run.googleapis.com"
#   disable_on_destroy = false
# }

# resource "google_service_account" "cloud_run_service_account" {
#   account_id  = var.project_name
#   project     = var.project_id
#   description = "The service account that will be used by the Cloud Run instance. Needs access to Cloud Storage"
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
