terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.55.0"
    }
  }
}

module "workload_identity_federation" {
  source = "../../libs/infra/workload_identity_federation"
}
