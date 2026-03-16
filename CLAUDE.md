# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # tsc + vite build
pnpm typecheck    # Type-check without emitting
pnpm lint         # ESLint
pnpm format       # Prettier (*.ts, *.tsx)
pnpm preview      # Preview production build
```

## Architecture

**Stack:** React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + shadcn/ui (Radix UI)

**Path alias:** `@/` maps to `src/`

**Component library:** shadcn/ui lives in `src/components/ui/`. Add components via:
```bash
npx shadcn@latest add <component>
```
All components use the `cn()` utility from `src/lib/utils.tsx` (clsx + tailwind-merge) and `data-slot` attributes for style targeting.

**Component usage rule:** Always use and style components from `src/components/` — never replace them with raw HTML elements. Use `asChild` on `Button` to render as `<a>` or other elements. Override variant styles via `className` (Tailwind arbitrary values like `[background:...]` or `[border-color:...]` are fine for glass/custom surfaces).

**Styling system:** Tailwind v4 with OKLch-based CSS custom properties defined in `src/index.css`. All color tokens live in `:root` — there is no separate `tailwind.config.*`. The `@theme inline` block maps CSS variables to Tailwind utilities.

**Design language:** This project uses the Reflect.app design system. The `/reflect-design` skill (`.claude/skills/reflect-design/`) encodes the full philosophy. Key primitives already in `index.css`:

| Class | Purpose |
|---|---|
| `.glass` | General frosted-glass surface (blur 20px) |
| `.glass-card` | Cards floating over background (blur 12px) |
| `.glass-overlay` | Modals / sidebars (blur 24px) |
| `.glass-nav` | Navigation bar (blur 32px) |
| `.glow` / `.glow-strong` | Ambient glow via `::before` pseudo |
| `.reveal` + `.is-visible` | Scroll-reveal entrance animation |
| `data-reveal-delay="1–6"` | 60ms stagger increments for siblings |

The `body` has a fixed 3-stop radial gradient mesh (blue/indigo tones, 3–5% opacity) that acts as the light source for all glass surfaces. Glass needs this — do not remove it.

**Dark mode:** Controlled via the `.dark` class on the root element. The `@custom-variant dark` rule in `index.css` handles the variant.
