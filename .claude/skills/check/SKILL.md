---
name: check
description: Executa verificações de qualidade do código (lint, types, format) sem fazer alterações
allowed-tools: Bash, Read
---

# Verificar Qualidade do Código

Execute a verificação completa sem fazer alterações:

```bash
mise run check
```

Este comando verifica:

- Formatação (Prettier --check)
- Análise estática (oxlint --deny-warnings)
- Tipos (astro check)

Após executar:

1. Se houver erros, liste-os organizados por tipo
2. Sugira usar `/fix` para corrigir automaticamente o que for possível
3. Para erros que precisam de correção manual, explique como resolver
