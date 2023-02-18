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

# output "certificate_id" {
#   value = module.certificate.certificate_id
# }

# output "map_id" {
#   value = module.url_map.map_id
# }

# output "proxy_id" {
#   value = module.proxy.proxy_id
# }
