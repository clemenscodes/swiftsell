terraform {
  backend "gcs" {
    bucket = "swiftsell-api-development-state"
  }
}
