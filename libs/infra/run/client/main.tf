locals {
  sa     = "serviceAccount:${google_service_account.cloud_run_service_account.email}"
  domain = "${var.cloud_run_subdomain}.${var.domain}"
}

module "hasura_endpoint" {
  source          = "../../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "HASURA_GRAPHQL_ENDPOINT"
  secret_data     = var.hasura_endpoint
}

module "image_endpoint" {
  source          = "../../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXT_PUBLIC_IMAGE_KIT_ENDPOINT_URL"
  secret_data     = var.image_endpoint
}

module "next_auth_url" {
  source          = "../../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXTAUTH_URL"
  secret_data     = "https://${local.domain}"
}

module "next_auth_secret" {
  source          = "../../secret"
  project_id      = var.project_id
  service_account = local.sa
  secret_id       = "NEXTAUTH_SECRET"
  secret_data     = var.next_auth_secret
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

resource "google_project_iam_member" "service_account_token_creator" {
  project = var.project_id
  role    = "roles/iam.serviceAccountTokenCreator"
  member  = local.sa
}

resource "google_project_iam_member" "service_account_user" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
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
      max_instance_count = 10
    }
    containers {
      image = "${var.artifact_region}-docker.pkg.dev/${var.project_id}/${var.repository_id}/${var.cloud_run_service_name}:sha-${var.git_commit_sha}"
      ports {
        container_port = 3000
      }
      env {
        name = module.hasura_endpoint.secret_id
        value_source {
          secret_key_ref {
            secret  = module.hasura_endpoint.secret_id
            version = "latest"
          }
        }
      }
      env {
        name = module.image_endpoint.secret_id
        value_source {
          secret_key_ref {
            secret  = module.image_endpoint.secret_id
            version = "latest"
          }
        }
      }
      env {
        name = module.next_auth_url.secret_id
        value_source {
          secret_key_ref {
            secret  = module.next_auth_url.secret_id
            version = "latest"
          }
        }
      }
      env {
        name = module.next_auth_secret.secret_id
        value_source {
          secret_key_ref {
            secret  = module.next_auth_secret.secret_id
            version = "latest"
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
    google_project_service.run,
    module.hasura_endpoint,
    module.image_endpoint,
    module.next_auth_url,
    module.next_auth_secret,
  ]
}

data "google_iam_policy" "noauth" {
  binding {
    role    = "roles/run.invoker"
    members = ["allUsers"]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "default" {
  location    = google_cloud_run_v2_service.default.location
  project     = google_cloud_run_v2_service.default.project
  name        = google_cloud_run_v2_service.default.name
  policy_data = data.google_iam_policy.noauth.policy_data
}

resource "google_cloud_run_domain_mapping" "default" {
  location = google_cloud_run_v2_service.default.location
  project  = google_cloud_run_v2_service.default.project
  name     = local.domain
  metadata {
    namespace = var.project_id
  }
  spec {
    force_override = true
    route_name     = google_cloud_run_v2_service.default.name
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
