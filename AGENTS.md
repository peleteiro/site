# peleteiro.net

Site pessoal de Jose Peleteiro. Hospedado em **peleteiro.net** (www redireciona para peleteiro.net).

## Regras

1. **Task Runner**: SEMPRE use `mise run`.
   - Tasks são **FILE-BASED**: Scripts bash em `.config/mise/tasks/`.
   - NUNCA use `scripts` no `package.json`.
2. **Gerenciador de Pacotes**: SEMPRE use `pnpm`.
   - NUNCA `npm install` ou `npx`. Use `pnpm install`, `pnpm exec`, `pnpm dlx`.
3. **Idioma**: Comentários em **Português**.
4. **Simplicidade**: Código simples e direto. Sem over-engineering.

## Tech Stack

- **Framework**: Astro (static output)
- **Estilo**: Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Deploy**: Cloudflare Pages (Workers via Wrangler)
- **Ferramentas**: mise (tasks), pnpm (packages), lefthook (git hooks)
- **Lint**: Prettier + prettier-plugin-astro (formatação), oxlint (análise estática), astro check (tipos)
- **Fonte**: Open Sans (via `@fontsource/open-sans`)

## Estrutura

```
src/
├── layouts/       # Layout base (Layout.astro)
├── pages/         # Páginas (.astro): index, vcard, 404
└── styles/        # CSS global (Tailwind + animações)
public/
├── assets/        # Avatar (jpg, webp, png), vcard.vcf
├── *.png, *.ico   # Favicons e ícones
└── _headers       # Headers HTTP do Cloudflare
.config/mise/tasks # Tasks do mise (file-based)
```

## Páginas

| Página  | Descrição                                         |
| ------- | ------------------------------------------------- |
| `index` | Landing page com bio e links sociais              |
| `vcard` | Página de contato (WhatsApp, email, salvar vCard) |
| `404`   | Página de erro personalizada                      |

## Comandos

| Comando            | Descrição                                   |
| ------------------ | ------------------------------------------- |
| `mise run dev`     | Servidor de desenvolvimento                 |
| `mise run build`   | Build estático                              |
| `mise run preview` | Preview do build                            |
| `mise run deploy`  | Build + deploy Cloudflare Pages             |
| `mise run lint`    | Corrige problemas (format + static + types) |
| `mise run check`   | Verifica qualidade sem alterar (CI)         |
| `mise run upgrade` | Atualiza ferramentas e dependências         |
| `mise run clean`   | Limpa artefatos de build                    |

## Instruções para Agentes

1. Leia `AGENTS.md` no início.
2. Rode `mise run lint` antes de entregar.
3. NUNCA faça commit sem que o usuário peça.
