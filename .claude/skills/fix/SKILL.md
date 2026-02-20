---
name: fix
description: Corrige automaticamente problemas de formatação e lint no código
allowed-tools: Bash, Read
---

# Corrigir Problemas de Código

Execute o lint com auto-fix:

```bash
mise run lint
```

Este comando corrige automaticamente:

- Formatação (Prettier)
- Problemas de lint (oxlint)

Após executar:

1. Informe quantos arquivos foram modificados
2. Se restarem erros que precisam de correção manual, liste-os
3. Sugira executar `/check` para verificar se tudo está ok
