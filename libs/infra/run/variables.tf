variable "org_name" {
  description = "The name of the organization"
  type        = string
}

variable "project_name" {
  description = "The name of the project in which the Cloud Run service will be created"
  type        = string
}

variable "repository_id" {
  description = "The id of the repository in which the Docker image for the Cloud Run service will be created"
  type        = string
}

variable "artifact_region" {
  description = "The region of the artifact repository from which the image for Cloud Run will be pulled"
  type        = string
}

variable "domain" {
  description = "The apex domain that the Cloud Run Service will have"
  type        = string
}

variable "cloud_run_api_subdomain" {
  description = "The subdomain that the API Cloud Run Service will have"
  type        = string
}

variable "cloud_run_subdomain" {
  description = "The subdomain that the Cloud Run Service will have"
  type        = string
}

variable "cloud_run_region" {
  description = "The region in which the Cloud Run service will be created"
  type        = string
}

variable "cloud_run_service_name" {
  description = "The name of the Cloud Run service"
  type        = string
}

variable "cloud_run_api_service_name" {
  description = "The name of the API Cloud Run service"
  type        = string
}

variable "git_commit_sha" {
  description = "The git commit which will be used as the tag for the image"
  type        = string
}

variable "app_id" {
  description = "The app id of the firebase app that will be needed to configure the secrets"
  type        = string
}

variable "project_id" {
  description = "The id of the project in which the Cloud Run service will be created"
  type        = string
}

variable "api_key" {
  description = "The API key used by Firebase"
  type        = string
}

variable "auth_domain" {
  description = "The API key used by Firebase"
  type        = string
}

variable "storage_bucket" {
  description = "The storage bucket used by Firebase"
  type        = string
}

variable "sender_id" {
  description = "The messaging sender id used by Firebase"
  type        = string
}

variable "cookie_secret_previous" {
  description = "The previous cookie secret used by Firebase"
  type        = string
}

variable "cookie_secret_current" {
  description = "The current cookie secret used by Firebase"
  type        = string
}

variable "database_url" {
  description = "The url to the database"
  type        = string
}

variable "shadow_database_url" {
  description = "The url to the shadow database for migrations"
  type        = string
}

# variable "subnet_cidr_range" {
#   description = "The CIDR range for the subnet of the Cloud Run service"
#   type = string
# }

# variable "folder_name" {
#   description = "The name of the folder in which the project will be created"
#   type        = string
# }

