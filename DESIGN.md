# Design Brief — Keshav Agro Foods

## Tone
Premium natural, organic luxury — trustworthy, health-focused, editorial refinement without rusticity.

## Differentiation
Soft ambient shadows on cards, hover lift effects, clean product photography, generous whitespace. Sage green primary conveys natural health; editorial layout with breathing room emphasizes purity.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| primary | 0.52 0.09 162 | Sage green — health, growth, natural trust |
| secondary | 0.96 0.02 60 | Cream — warmth, purity, premium feel |
| accent | 0.55 0.08 108 | Olive — earthy product highlight |
| foreground | 0.18 0.01 0 | Deep neutral — readable on light backgrounds |
| background | 0.995 0.001 0 | Pure white — clean, minimal canvas |
| muted | 0.88 0.01 0 | Soft grey — section dividers, subtle depth |
| destructive | 0.58 0.19 22 | Red — error/warning states |
| success | (uses primary) | Green — confirmation, positive action |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk | Headlines, hero tagline, product titles — bold, modern, high-impact |
| Body | General Sans | Body copy, descriptions — refined, highly readable, professional |
| Mono | Geist Mono | Code blocks, technical content — clean, modern typeface |

Type scale: 12px / 14px / 16px / 18px / 24px / 32px / 48px / 64px

## Elevation & Depth

| Level | Shadow | Usage |
|-------|--------|-------|
| Subtle | `0 2px 8px rgba(0,0,0,0.04)` | Default card background |
| Elevated | `0 8px 24px rgba(0,0,0,0.08)` | Hover state, modal backdrop |
| None | — | Flat sections, text-only areas |

Radii: `2px` (input), `8px` (card), full (button pill mode)

## Structural Zones

| Zone | Background | Border | Purpose |
|------|------------|--------|---------|
| Header/Nav | `bg-card` white | `border-b` soft grey | Top navigation, logo, search |
| Hero | `bg-primary` sage green | None | Hero banner with tagline and CTA |
| Content Section | Alternating `bg-background` / `bg-muted/5` | None | Product grid, features, testimonials |
| Card (product) | `bg-card` | `border` subtle | Product image, title, price, button |
| Footer | `bg-muted/20` | `border-t` grey | Links, contact, newsletter signup |

## Component Patterns

- **Buttons**: Sage green primary, cream secondary, muted tertiary. Hover adds `shadow-elevated`, text shifts to accent on hover
- **Cards**: White background, `shadow-subtle`, hover lifts with `shadow-elevated` and slight scale (1.02x)
- **Inputs**: `bg-input` (light grey), `border-border` soft, focus ring `ring-primary`
- **Links**: `text-primary` underline on hover, no color change needed

## Motion & Transitions

Transition default: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (smooth deceleration)

- Button hover: 150ms color + shadow shift
- Card hover: 200ms lift + shadow enhancement
- Page transitions: 300ms fade-in

## Spacing & Rhythm

Base unit: 4px. Sections use: 16px, 24px, 32px, 48px, 64px gutters. Mobile-first responsive: 1rem base, 1.5rem (md), 2rem (lg).

## Constraints

No gradients, no heavy drop shadows, no animations without purpose. Maintain clean hierarchy through size/weight, not color quantity. Max 3 colors per section; sage green dominates.

## Signature Detail

Soft `shadow-subtle` on all cards creates depth without visual weight — suggests premium product photography and trustworthiness. Generous whitespace around product imagery lets content breathe.
