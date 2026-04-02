---
globs: src/**/*.astro
---

Convenções para componentes Astro:

- Layout base: `src/layouts/Layout.astro` (todos os páginas devem usá-lo)
- Output estático: o site gera HTML puro, sem SSR
- Tailwind CSS 4: use classes utilitárias, evite CSS customizado
- Open Sans: fonte padrão via `@fontsource/open-sans`
- Sempre execute `mise run lint` após editar arquivos `.astro`
