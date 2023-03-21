variable "project_name" {
  description = "The name of the project in which the buckets will be created"
  type        = string
  default     = "swiftsell-api-development"
}

variable "state_bucket" {
  description = "The name of the state bucket that will be created"
  type        = string
  default     = "swiftsell-api-development-state"
}

variable "cloud_run_service_name" {
  description = "The name for the Cloud Run service"
  type        = string
  default     = "api"
}

variable "cloud_run_subdomain" {
  description = "The domain that will be used for the Cloud Run service"
  type        = string
  default     = "dev.api.shop"
}

variable "repository_id" {
  description = "The name that should be used for the Artifact Repository in which the Docker images will be hosted"
  type        = string
  default     = "docker"
}

variable "artifact_region" {
  description = "The region of the Artifact Registry Repository"
  type        = string
  default     = "europe-west1"
}

variable "cloud_run_region" {
  description = "The region in which the Cloud Run service will be hosted"
  type        = string
  default     = "europe-west1"
}

variable "git_commit_sha" {
  description = "The git commit which will be used as the tag for the image"
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
#     default = "10.132.0.0/28"
# }
