# Redirect www.peleteiro.net → peleteiro.net (301)

resource "cloudflare_ruleset" "redirect_www" {
  zone_id = local.zone_id
  name    = "Redirect www to apex"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [
    {
      action = "redirect"
      action_parameters = {
        from_value = {
          status_code           = 301
          target_url            = { expression = "concat(\"https://peleteiro.net\", http.request.uri.path)" }
          preserve_query_string = true
        }
      }
      expression  = "(http.host eq \"www.peleteiro.net\")"
      description = "Redirect www.peleteiro.net → peleteiro.net"
      enabled     = true
    },
  ]
}

# Redirect peleteiro.dev → peleteiro.net (301)

resource "cloudflare_ruleset" "redirect_dev" {
  zone_id = local.zone_id_dev
  name    = "Redirect peleteiro.dev to peleteiro.net"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [
    {
      action = "redirect"
      action_parameters = {
        from_value = {
          status_code           = 301
          target_url            = { expression = "concat(\"https://peleteiro.net\", http.request.uri.path)" }
          preserve_query_string = true
        }
      }
      expression  = "(http.host eq \"peleteiro.dev\" or ends_with(http.host, \".peleteiro.dev\"))"
      description = "Redirect *.peleteiro.dev → peleteiro.net"
      enabled     = true
    },
  ]
}
