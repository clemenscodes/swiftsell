output "ip" {
  value = module.external_ip.ip
}

output "subdomain" {
  value = var.subdomain
}

output "domain" {
  value = var.domain
}

output "cdn_bucket_name" {
    value = module.cdn_bucket.name
}
