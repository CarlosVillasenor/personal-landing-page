<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Design System

### CSS Variables

This project uses a centralized design system based on CSS custom properties (design tokens).

All colors, typography, spacing, border radius, shadows, transitions, and other reusable design values **must** come from the variables defined in `src/styles/tokens/`.

Never hardcode values such as:

```css
color: #2563eb;
padding: 16px;
font-size: 32px;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0,0,0,.15);
transition: 250ms ease;
```

Instead, always use the appropriate CSS variables:

```css
color: var(--color-primary);
padding: var(--space-4);
font-size: var(--font-4xl);
border-radius: var(--radius-md);
box-shadow: var(--shadow-md);
transition: var(--transition-normal);
```

### Component Requirements

When creating or modifying components:

- Reuse existing CSS variables whenever possible.
- Do not introduce new colors, spacing values, font sizes, radii, or shadows unless they are truly reusable across the application.
- If a new reusable design token is required, add it to the appropriate file inside `src/styles/tokens/` rather than hardcoding it inside a component.
- Components should remain theme-aware by relying exclusively on design tokens.

### Responsive Design

Use the spacing and typography variables instead of arbitrary values.

Prefer:

```css
padding: var(--space-6);
gap: var(--space-4);
font-size: var(--font-lg);
```

instead of:

```css
padding: 35px;
gap: 18px;
font-size: 19px;
```

### Colors

Always use semantic variables.

Good:

```css
background: var(--color-background);
color: var(--color-text);
border-color: var(--color-border);
```

Bad:

```css
background: #ffffff;
color: #111827;
border-color: #d6d6d6;
```

### Exceptions

Literal values are acceptable only when they are inherently component-specific and are not part of the design system, such as:

- `z-index`
- `flex`
- `grid`
- `opacity`
- `transform`
- `aspect-ratio`
- animation keyframes
- SVG dimensions
- percentages (`50%`, `100%`)
- viewport units (`100vh`, `100dvh`, `100vw`)

If uncertain whether a value belongs in the design system, prefer adding a new design token.

<!-- END:nextjs-agent-rules -->
