# peleteiro.net

Site pessoal de Jose Peleteiro.

## Requisitos

- [mise](https://mise.jdx.dev/)
- [pnpm](https://pnpm.io/)

## Início rápido

```bash
pnpm install
mise run dev
```

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

## Tech Stack

- [Astro](https://astro.build/) (static output)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Cloudflare Pages](https://pages.cloudflare.com/) (deploy)
