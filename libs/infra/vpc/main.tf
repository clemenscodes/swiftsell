resource "google_compute_network" "default" {
  provider = google-beta
  name     = var.network_name
}

resource "google_compute_subnetwork" "default" {
  provider      = google-beta
  name          = var.subnet_name
  ip_cidr_range = var.subnet_cidr_range
  network       = google_compute_network.default.id
  region        = var.region
}

resource "google_project_service" "vpc" {
  project            = var.project_id
  provider           = google-beta
  service            = "vpcaccess.googleapis.com"
  disable_on_destroy = false
}

resource "google_vpc_access_connector" "default" {
  provider      = google-beta
  name          = var.vpc_connector_name
  region        = var.region
  min_instances = 0

  subnet {
    name = google_compute_subnetwork.default.name
  }

  depends_on = [
    google_project_service.vpc
  ]
}

resource "google_compute_router" "default" {
  provider = google-beta
  name     = var.router_name
  network  = google_compute_network.default.name
  region   = google_compute_subnetwork.default.region
}

resource "google_compute_address" "default" {
  provider = google-beta
  name     = var.ip_name
  region   = google_compute_subnetwork.default.region
}

resource "google_compute_router_nat" "default" {
  provider = google-beta
  name     = var.nat_gateway_name
  router   = google_compute_router.default.name
  region   = google_compute_subnetwork.default.region

  nat_ip_allocate_option = "MANUAL_ONLY"
  nat_ips                = [google_compute_address.default.self_link]

  source_subnetwork_ip_ranges_to_nat = "LIST_OF_SUBNETWORKS"
  subnetwork {
    name                    = google_compute_subnetwork.default.id
    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }
}
