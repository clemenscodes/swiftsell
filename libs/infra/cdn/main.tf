locals {
  ip_name           = "${var.bucket}-ip"
  url_map           = "${var.bucket}-https-lb"
  proxy_name        = "${local.url_map}-proxy"
  forwarding_rule   = "${local.url_map}-forwarding-rule"
  domain            = "${var.subdomain}.${var.domain}"
  backend_bucket_id = "projects/${data.google_project.project.number}/global/backendBuckets/${module.cdn_bucket.name}"
  url_map_id        = "projects/${data.google_project.project.number}/global/urlMaps/${local.url_map}"
  proxy_id          = "projects/${data.google_project.project.number}/global/targetHttpsProxies/${local.proxy_name}"
  certificate_id    = "projects/${data.google_project.project.number}/global/sslCertificates/${var.certificate_name}"
}

data "google_project" "project" {
  project_id = var.project_id
}

module "cdn_bucket" {
  source     = "../bucket/cdn"
  region     = var.region
  bucket     = var.bucket
  project_id = var.project_id
}

module "external_ip" {
  source     = "../compute/external_ip"
  ip_name    = local.ip_name
  project_id = var.project_id
}

resource "google_compute_backend_bucket" "default" {
  project     = var.project_id
  name        = var.bucket
  bucket_name = module.cdn_bucket.name
  enable_cdn  = true
  cdn_policy {
    cache_mode        = "CACHE_ALL_STATIC"
    client_ttl        = 3600
    default_ttl       = 3600
    max_ttl           = 86400
    negative_caching  = true
    serve_while_stale = 86400
  }
}

# module "backend_bucket" {
#   source     = "../compute/backend_bucket"
#   project_id = var.project_id
#   bucket     = module.cdn_bucket.name
# }

resource "google_compute_url_map" "default" {
  name            = local.url_map
  project         = var.project_id
  default_service = google_compute_backend_bucket.default.id
}

# module "url_map" {
#   source     = "../compute/url_map"
#   url_map    = local.url_map
#   project_id = var.project_id
#   backend_id = module.backend_bucket.id
# }

resource "google_compute_managed_ssl_certificate" "default" {
  name    = var.certificate_name
  project = var.project_id
  lifecycle {
    create_before_destroy = true
    prevent_destroy       = false
  }
  managed {
    domains = [var.domain]
  }
}

# module "certificate" {
#   source           = "../compute/certificate"
#   certificate_name = var.certificate_name
#   project_id       = var.project_id
#   domain           = local.domain
# }

resource "google_compute_target_https_proxy" "default" {
  name             = local.proxy_name
  project          = var.project_id
  url_map          = google_compute_url_map.default.id
  ssl_certificates = [google_compute_managed_ssl_certificate.default.id]
}

# module "proxy" {
#   source         = "../compute/proxy"
#   proxy_name     = local.proxy_name
#   project_id     = var.project_id
#   url_map        = module.url_map.id
#   certificate_id = module.certificate.id
# }

resource "google_compute_global_forwarding_rule" "default" {
  name                  = local.forwarding_rule
  project               = var.project_id
  ip_protocol           = "TCP"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  port_range            = "443"
  target                = google_compute_target_https_proxy.default.id
  ip_address            = module.external_ip.ip
}

# module "forwarding_rule" {
#   source          = "../compute/forwarding_rule"
#   forwarding_rule = local.forwarding_rule
#   project_id      = var.project_id
#   target          = module.proxy.id
#   ip_address      = module.external_ip.ip
# }
