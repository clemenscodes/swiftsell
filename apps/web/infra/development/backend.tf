terraform {
  backend "gcs" {
    bucket = "swiftsell-bucket-state"
  }
}
