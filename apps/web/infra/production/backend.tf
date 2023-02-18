terraform {
  backend "gcs" {
    bucket = "swiftsell-production-state"
  }
}
