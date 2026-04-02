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

# DNS Records - peleteiro.dev

# Redirect apex para peleteiro.net
resource "cloudflare_dns_record" "dev_apex" {
  zone_id = local.zone_id_dev
  name    = "@"
  type    = "AAAA"
  content = "100::"
  ttl     = 1 # Auto
  proxied = true
}

# Redirect wildcard para peleteiro.net
resource "cloudflare_dns_record" "dev_wildcard" {
  zone_id = local.zone_id_dev
  name    = "*"
  type    = "AAAA"
  content = "100::"
  ttl     = 1 # Auto
  proxied = true
}
