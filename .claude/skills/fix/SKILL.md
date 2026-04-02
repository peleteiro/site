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

Este comando executa `astro sync` e depois corrige automaticamente:

- Formatação (Prettier)
- Problemas de lint (oxlint --fix)
- Verificação de tipos (astro check)

Após executar:

1. Informe quantos arquivos foram modificados
2. Se restarem erros que precisam de correção manual, liste-os
3. Sugira executar `/check` para verificar se tudo está ok
