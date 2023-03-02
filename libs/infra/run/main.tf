locals {
  sa = "serviceAccount:${google_service_account.cloud_run_service_account.email}"
}

data "google_firebase_web_app_config" "basic" {
  provider   = google-beta
  web_app_id = var.app_id
}

module "firebase_secret_project_id" {
  source          = "../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
  secret_data     = var.project_id
}

module "firebase_secret_app_id" {
  source          = "../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_FIREBASE_APP_ID"
  secret_data     = var.app_id
}

module "firebase_secret_api_key" {
  source          = "../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_FIREBASE_API_KEY"
  secret_data     = data.google_firebase_web_app_config.basic.api_key
}

module "firebase_secret_auth_domain" {
  source          = "../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
  secret_data     = data.google_firebase_web_app_config.basic.auth_domain
}

module "firebase_secret_storage_bucket" {
  source          = "../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
  secret_data     = lookup(data.google_firebase_web_app_config.basic, "storage_bucket", "")
}

module "firebase_secret_messaging_sender_id" {
  source          = "../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
  secret_data     = lookup(data.google_firebase_web_app_config.basic, "messaging_sender_id", "")
}

resource "google_project_service" "run" {
  project            = var.project_id
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_service_account" "cloud_run_service_account" {
  account_id  = var.project_name
  project     = var.project_id
  description = "The service account that will be used by the Cloud Run instance. Needs access to Cloud Storage"
}

resource "google_project_iam_member" "storage_object_admin" {
  project = var.project_id
  role    = "roles/storage.objectAdmin"
  member  = local.sa
}

resource "google_project_iam_member" "storage_admin" {
  project = var.project_id
  role    = "roles/storage.admin"
  member  = local.sa
}

resource "google_cloud_run_v2_service" "default" {
  name     = var.cloud_run_service_name
  location = var.cloud_run_region
  project  = var.project_id
  ingress  = "INGRESS_TRAFFIC_ALL"
  template {
    execution_environment            = "EXECUTION_ENVIRONMENT_GEN2"
    max_instance_request_concurrency = 80
    timeout                          = "300s"
    service_account                  = google_service_account.cloud_run_service_account.email
    scaling {
      min_instance_count = 0
      max_instance_count = 30
    }
    containers {
      image = "${var.artifact_region}-docker.pkg.dev/${var.project_id}/${var.repository_id}/${var.repository_id}:sha-${var.git_commit_sha}"
      ports {
        container_port = 3000
      }
      env {
        name = module.firebase_secret_api_key.name
        value_source {
          secret_key_ref {
            secret = module.firebase_secret_api_key.secret_id
          }
        }
      }
      env {
        name = module.firebase_secret_app_id.name
        value_source {
          secret_key_ref {
            secret = module.firebase_secret_app_id.secret_id
          }
        }
      }
      env {
        name = module.firebase_secret_project_id.name
        value_source {
          secret_key_ref {
            secret = module.firebase_secret_project_id.secret_id
          }
        }
      }
      env {
        name = module.firebase_secret_storage_bucket
        value_source {
          secret_key_ref {
            secret = module.firebase_secret_storage_bucket.secret_id
          }
        }
      }
      env {
        name = module.firebase_secret_messaging_sender_id
        value_source {
          secret_key_ref {
            secret = module.firebase_secret_messaging_sender_id.secret_id
          }
        }
      }
      env {
        name = module.firebase_secret_auth_domain.name
        value_source {
          secret_key_ref {
            secret = module.firebase_secret_auth_domain
          }
        }
      }
    }
  }
  traffic {
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }
  lifecycle {
    prevent_destroy = false
  }
  depends_on = [
    module.firebase_secret_api_key,
    module.firebase_secret_app_id,
    module.firebase_secret_auth_domain,
    module.firebase_secret_messaging_sender_id,
    module.firebase_secret_project_id,
    module.firebase_secret_storage_bucket,
  ]
}

data "google_iam_policy" "noauth" {
  binding {
    role    = "roles/run.invoker"
    members = ["allUsers"]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "noauth" {
  location    = google_cloud_run_v2_service.default.location
  project     = google_cloud_run_v2_service.default.project
  name        = google_cloud_run_v2_service.default.name
  policy_data = data.google_iam_policy.noauth.policy_data
}

resource "google_cloud_run_domain_mapping" "default" {
  location = google_cloud_run_v2_service.default.location
  project  = google_cloud_run_v2_service.default.project
  name     = "${var.cloud_run_subdomain}.${var.domain}"
  metadata {
    namespace = var.project_id
  }
  spec {
    route_name = google_cloud_run_v2_service.default.name
  }
}

# locals {
#   network_name       = "${var.cloud_run_service_name}-vpc"
#   subnet_name        = "${local.network_name}-sn"
#   vpc_connector_name = "${local.network_name}-connector"
#   ip_name            = "${local.subnet_name}-ip"
#   router_name        = "${local.ip_name}-router"
#   nat_gateway_name   = "${local.subnet_name}-nat"
# }

# module "vpc" {
#   source             = "../vpc"
#   project_id         = var.project_id
#   network_name       = local.network_name
#   subnet_name        = local.subnet_name
#   vpc_connector_name = local.vpc_connector_name
#   router_name        = local.router_name
#   ip_name            = local.ip_name
#   nat_gateway_name   = local.nat_gateway_name
#   region             = var.cloud_run_region
#   subnet_cidr_range  = var.subnet_cidr_range
# }
