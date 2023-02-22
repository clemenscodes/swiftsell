resource "google_compute_backend_bucket" "default" {
  project     = var.project_id
  name        = var.bucket
  bucket_name = var.bucket
  enable_cdn  = true
  cdn_policy {
    cache_mode        = "CACHE_ALL_STATIC"
    client_ttl        = 2592000
    default_ttl       = 2592000
    max_ttl           = 2592000
    negative_caching  = true
    serve_while_stale = 86400
  }
}
