# Worker custom domain — peleteiro.net

resource "cloudflare_workers_custom_domain" "apex" {
  account_id = local.cloudflare_account_id
  zone_id    = local.zone_id
  hostname   = "peleteiro.net"
  service    = "peleteiro-net"
}
