# peleteiro.net

Site pessoal de Jose Peleteiro. Hospedado em **peleteiro.net** (www redireciona para peleteiro.net).

## Requisitos

- [mise](https://mise.jdx.dev/)
- [pnpm](https://pnpm.io/)

## Início rápido

```bash
pnpm install
tilt up
```

## Tech Stack

- [Astro](https://astro.build/) (static output)
- [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`)
- [Cloudflare Workers](https://workers.cloudflare.com/) (deploy via Wrangler)
- [Tilt](https://tilt.dev/) (ambiente de desenvolvimento local)
- [mise](https://mise.jdx.dev/) (tasks) + [pnpm](https://pnpm.io/) (packages) + [lefthook](https://github.com/evilmartians/lefthook) (git
  hooks)
- [Prettier](https://prettier.io/) + [oxlint](https://oxc.rs/) +
  [astro check](https://docs.astro.build/en/reference/cli-reference/#astro-check) (lint)
- [Open Sans](https://fontsource.org/fonts/open-sans) (via `@fontsource/open-sans`)

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
| `tilt up`          | Ambiente de desenvolvimento                 |
| `mise run build`   | Build estático                              |
| `mise run deploy`  | Build + deploy Cloudflare Workers             |
| `mise run lint`    | Corrige problemas (format + static + types) |
| `mise run check`   | Verifica qualidade sem alterar (CI)         |
| `mise run upgrade` | Atualiza ferramentas e dependências         |
| `mise run clean`   | Limpa artefatos de build                    |
