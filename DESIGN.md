# Design Brief — Keshav Agro Foods

## Tone
Premium natural, organic luxury with graceful Krishna-inspired cultural elegance — trustworthy, health-focused, editorial refinement without overpowering religious imagery. Clean, minimal, and sophisticated.

## Differentiation
Subtle peacock feather texture patterns (5–10% opacity) as background accents in hero and testimonials. Warm gold and peacock teal used sparingly for highlights and ornamental details. Soft ambient shadows on cards, hover lift effects, clean product photography, generous whitespace. Sage green primary conveys natural health; cultural accent colors enhance premium feel without distraction.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| primary | 0.52 0.09 162 | Sage green — health, growth, natural trust |
| secondary | 0.96 0.02 60 | Cream — warmth, purity, premium feel |
| accent | 0.55 0.08 108 | Olive — earthy product highlight |
| peacock | 0.55 0.12 200 | Peacock teal — cultural accent, secondary highlights |
| gold | 0.72 0.12 80 | Warm gold — premium decorative accents, ornamental details |
| foreground | 0.18 0.01 0 | Deep neutral — readable on light backgrounds |
| background | 0.995 0.001 0 | Pure white — clean, minimal canvas |
| muted | 0.88 0.01 0 | Soft grey — section dividers, subtle depth |
| destructive | 0.58 0.19 22 | Red — error/warning states |

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

| Zone | Background | Accent Pattern | Purpose |
|------|------------|-----------------|---------|
| Header/Nav | `bg-card` white | None | Top navigation, logo, search |
| Hero | `bg-primary` sage green | `.pattern-peacock-feather` (5% opacity) | Hero banner with tagline, cultural texture |
| Content Section | Alternating `bg-background` / `bg-muted/5` | None | Product grid, features, testimonials |
| Card (product) | `bg-card` white | `.ornament-corner` (gold/teal accents) | Product image, title, price, button |
| Testimonials | `bg-background` | `.pattern-peacock-feather` (5% opacity) | Customer quotes with subtle cultural texture |
| Footer | `bg-muted/20` | None | Links, contact, newsletter signup |

## Component Patterns

- **Buttons**: Sage green primary, cream secondary, peacock tertiary. Hover adds `shadow-elevated`, text shifts to accent on hover
- **Cards**: White background, `shadow-subtle`, hover lifts with `shadow-elevated` and slight scale (1.02x). Optional `.ornament-corner` for premium product cards
- **Decorative**: `.pattern-peacock-feather` for hero/testimonials, `.ornament-corner` for card accents (gold/peacock borders)
- **Accents**: Gold (`--gold`) for premium decorative elements; peacock (`--peacock`) for secondary highlights
- **Inputs**: `bg-input` (light grey), `border-border` soft, focus ring `ring-primary`

## Motion & Transitions

Transition default: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (smooth deceleration)

- Button hover: 150ms color + shadow shift
- Card hover: 200ms lift + shadow enhancement
- Page transitions: 300ms fade-in

## Spacing & Rhythm

Base unit: 4px. Sections use: 16px, 24px, 32px, 48px, 64px gutters. Mobile-first responsive: 1rem base, 1.5rem (md), 2rem (lg).

## Constraints

No gradients, no heavy drop shadows, no animations without purpose. Peacock/gold accents kept at ≤10% opacity as background texture. Cultural motifs remain ornamental, never central to content. Maintain clean hierarchy through size/weight, not color quantity. Max 5 colors; sage green dominates.

## Signature Detail

Soft `shadow-subtle` on all cards creates depth without visual weight. Peacock feather texture pattern (5% opacity) in hero and testimonials subtly evokes Krishna imagery without distraction. Gold ornamental corners on product cards suggest premium craftsmanship. Generous whitespace lets content breathe.
