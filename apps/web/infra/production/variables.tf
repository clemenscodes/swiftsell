variable "project_name" {
  description = "The name of the project in which the buckets will be created"
  type        = string
  default     = "swiftsell-production"
}

variable "state_bucket" {
  description = "The name of the state bucket that will be created"
  type        = string
  default     = "swiftsell-production-state"
}

variable "isr_bucket" {
  description = "The name of the ISR bucket that will be created for the Cloud Run service (must contain isr)"
  type        = string
  default     = "swiftsell-production-isr"
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

variable "cloud_run_service_name" {
  description = "The name for the Cloud Run service"
  type        = string
  default     = "web"
}

variable "cloud_run_subdomain" {
  description = "The domain that will be used for the Cloud Run service"
  type        = string
  default     = "shop"
}

variable "git_commit_sha" {
  description = "The git commit which will be used as the tag for the image"
  type        = string
}

variable "hasura_endpoint" {
  description = "The hasura endpoint"
  type        = string
}

variable "image_endpoint" {
  description = "The endpoint for images"
  type        = string
}

# variable "cdn_bucket" {
#   description = "The name of the CDN bucket that will be created"
#   type        = string
#   default     = "swiftsell-production-cdn"
# }

# variable "cdn_subdomain" {
#   description = "The subdomain that will be used for the CDN"
#   type        = string
#   default     = "static.shop"
# }

# variable "cdn_region" {
#   description = "The region in which the CDN will be created"
#   type        = string
#   default     = "europe-west1"
# }

