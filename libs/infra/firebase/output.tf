output "app_id" {
  value     = google_firebase_web_app.basic.app_id
  sensitive = true
}

output "api_key" {
  value     = google_apikeys_key.browser_key.key_string
  sensitive = true
}
