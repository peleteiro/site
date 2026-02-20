# DNS Records - peleteiro.net

# Redirect www to apex
resource "cloudflare_dns_record" "www" {
  zone_id = local.zone_id
  name    = "www"
  type    = "AAAA"
  content = "100::"
  ttl     = 1 # Auto
  proxied = true
}
