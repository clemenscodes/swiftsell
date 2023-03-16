terraform {
  backend "gcs" {
    bucket = "swiftsell-api-production-state"
  }
}
