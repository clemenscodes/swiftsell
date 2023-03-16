variable "domain" {
  description = "The domain of the organization"
  type        = string
  default     = "swiftsell.de"
}

variable "region" {
  description = "The region for the settings project"
  type        = string
  default     = "europe-west1"
}

variable "project_id" {
  description = "The id of the settings project"
  type        = string
  default     = "organization-378109"
}

variable "project_name" {
  description = "The name of the settings project"
  type        = string
  default     = "organization"
}

variable "billing_account" {
  description = "The billing account that should be enabled for the project"
  type        = string
  default     = "012010-82D8B7-4C1858"
}

variable "folder_name" {
  description = "The name of folder in which the settings project will be created"
  type        = string
  default     = "common"
}

variable "bucket" {
  description = "The name of the state bucket that will be created for the settings project"
  type        = string
  default     = "organization-378109-state"
}

variable "workload_identity_service_account_id" {
  description = "The name of the service account that will be used for workload identity federation"
  type        = string
  default     = "gh-actions"
}

variable "workload_identity_pool_id" {
  description = "The name of the pool that will be used for workload identity federation"
  type        = string
  default     = "gh-actions-pool"
}

variable "workload_identity_provider_pool_id" {
  description = "The name of the provider that will be used for the pool"
  type        = string
  default     = "github"
}

variable "repo_owner" {
  description = "The GitHub username that owns the repository"
  type        = string
  default     = "clemenscodes"
}

variable "repo" {
  description = "The name of the repository"
  type        = string
  default     = "swiftsell"
}
