# SentinelDesk

Security operations dashboard for a frontend engineering portfolio. The interface is a simulated SOC workspace. It does not connect to a real monitoring system, and it does not perform security analysis.

**Current milestone:** 1 — project setup and design system.

The running app is a design-system catalog. Sidebar, overview, alerts, agents, the API, and simulated live updates are later milestones.

## Stack in this milestone

- React 19 and TypeScript (strict)
- Vite 8
- Tailwind CSS 4
- shadcn/ui on Radix, Nova preset, Lucide icons
- Geist and Geist Mono

Later milestones add React Router, TanStack Query, Recharts, React Hook Form, Zod, date-fns, and an Express mock API with a simulated WebSocket.

## Run the frontend

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # typecheck and production build
npm run lint     # oxlint
npm run preview  # serve the production build
```

There is no backend in this milestone.

## Environment variables

None are required. See `.env.example`. Do not commit `.env` or `.env.local`.

## Design system

Tokens live in `src/index.css`. Severity and status class maps live in `src/lib/design-tokens.ts`. Shared unions live in `src/types/domain.ts`.

| Token group | Where it is used |
| --- | --- |
| Surfaces (`background`, `card`, `sidebar`) | Page canvas and panels |
| `primary` | Steel-blue accent for actions and focus |
| `severity-*`, `status-*` | `SeverityBadge` and `StatusBadge` |
| `--radius: 0.5rem` | Control and panel corners |
| `shadow-card`, `shadow-popover` | Cards and menus |

The document defaults to the dark theme (`class="dark"` on `<html>`). The catalog includes a temporary theme preview. The persistent toggle arrives with the top navigation.

## Project layout

```text
src/
  components/
    common/          ErrorBoundary, SeverityBadge, StatusBadge
    ui/              shadcn primitives
  pages/
    DesignSystemPage.tsx
  lib/
    design-tokens.ts
    utils.ts
  types/
    domain.ts
  App.tsx
  main.tsx
  index.css
```

Feature folders (`layout`, `alerts`, `agents`, and the rest) are added with the milestone that needs them.

## Architecture notes

- UI primitives come from shadcn and stay in `src/components/ui`. Product components compose them.
- `cn` (the `cn` package) merges Tailwind classes. `clsx` and `tailwind-merge` are not used directly.
- TypeScript is strict, with `noUncheckedIndexedAccess` and `verbatimModuleSyntax`. Domain values are string unions, not enums, because `erasableSyntaxOnly` rejects enums.
- `ErrorBoundary` is a class component because React error boundaries still use `getDerivedStateFromError`.

## Limitations

- No application routes, data, or API yet.
- The theme preview on the catalog page is local state. It is not the product theme toggle.
- Sample table rows and the dialog do not persist anything.

## Next milestone

Milestone 2 builds the collapsible sidebar, top navigation, and responsive shell around these tokens. Do not start it until that milestone is confirmed.
