terraform {
  backend "gcs" {
    bucket = "swiftsell-development-state"
  }
}
