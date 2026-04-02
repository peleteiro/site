---
globs: .config/mise/tasks/**
---

Tasks do mise são scripts bash file-based em `.config/mise/tasks/`.

Convenções:

- Sempre inicie com `#!/usr/bin/env bash` e `set -euo pipefail`
- Use `#MISE description="..."` para a descrição (em português)
- Subtasks usam subdiretórios (ex: `lint/format/ts`)
- O arquivo `_default` é o entry point de cada grupo
- Execute subtasks via `mise run <grupo>:<subtask>`
- NUNCA adicione scripts no `package.json`
