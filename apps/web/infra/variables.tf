variable "subdomain" {
  description = "The subdomain of the apex domain"
  type        = string
}

variable "project_name" {
  description = "The name of the project in which the buckets will be created"
  type        = string
}

variable "state_bucket" {
  description = "The name of the state bucket that will be created"
  type        = string
}

variable "isr_bucket" {
  description = "The name of the ISR bucket that will be created for the Cloud Run service"
  type        = string
}

variable "artifact_region" {
  description = "The region of the Artifact Registry Repository"
  type        = string
}

variable "repository_id" {
  description = "The name that should be used for the Docker image of the Cloud Run service"
  type        = string
}

variable "git_commit_sha" {
  description = "The git commit which will be used as the tag for the image"
  type        = string
}

# variable "cdn_bucket" {
#   description = "The name of the cdn bucket that will be created"
#   type        = string
# }

# variable "cdn_subdomain" {
#   description = "The subdomain that will be used for the CDN"
#   type        = string
# }

# variable "cdn_region" {
#   description = "The region in which the CDN will be created"
#   type        = string
# }

