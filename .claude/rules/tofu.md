---
globs: tofu/**
---

Infraestrutura gerenciada com OpenTofu (fork do Terraform).

Comandos via mise:

- `mise run tofu:init` — inicializa providers
- `mise run tofu:plan` — planeja mudanças
- `mise run tofu:apply` — aplica mudanças (requer confirmação do usuário)
- `mise run tofu:upgrade` — atualiza providers

NUNCA execute `tofu apply` sem confirmação explícita do usuário.
