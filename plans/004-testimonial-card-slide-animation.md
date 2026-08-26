# 004 — Testimonial Card Slide Animation Refinement

- **Status**: TODO
- **Commit**: ef3316d
- **Severity**: HIGH
- **Category**: Interruptibility / Performance / Easing & duration
- **Estimated scope**: 2 files (`src/components/TestimonialsSection.tsx`, `src/index.css`)

## Problem

The current testimonial card carousel implementation uses a whole-grid re-mounting approach via `key={animatingKey}` to trigger CSS keyframes (`@keyframes slideNext` and `@keyframes slidePrev`). This leads to three issues:

1. **Non-interruptible keyframe restart**: When the user clicks Next or Prev rapidly, the whole grid DOM element re-mounts and restarts keyframes from `translateX(28px)`, causing visual jumping rather than retargeting smoothly mid-transition (violating AUDIT.md Interruptibility rule 4).
2. **Un-targeted `transition-all`**: Individual review cards use `transition-all duration-300` on lines 149-153 of `TestimonialsSection.tsx`, forcing the browser to animate non-GPU properties.
3. **Hardcoded pixel offsets in keyframes**: `index.css:124` uses fixed `translateX(28px)` rather than percentage-based relative offsets and custom cubic-bezier ease-out tokens.

```tsx
/* src/components/TestimonialsSection.tsx:140-154 — current */
<div
  key={animatingKey}
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 ${
    slideDirection === 'next' ? 'animate-slide-next' : 'animate-slide-prev'
  }`}
>
  {visibleCards.map((item, idx) => (
    <div
      key={`${item.id}-${idx}`}
      style={{ animationDelay: `${idx * 40}ms` }}
      className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ...`}
    >
```

```css
/* src/index.css:124-149 — current */
@keyframes slideNext {
  from {
    opacity: 0.3;
    transform: translateX(28px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-next {
  animation: slideNext 300ms var(--ease-out) forwards;
}
```

## Target

1. Replace un-targeted `transition-all` with explicit GPU properties (`transition-colors duration-300 var(--ease-out), transition-shadow 300ms var(--ease-out)`).
2. Refine keyframe definitions in `index.css` to use relative percentage transforms (`translateX(12%)` / `translateX(-12%)`) paired with `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`.
3. Add `will-change: transform, opacity` during transition states and enforce `prefers-reduced-motion` compliance to fall back to a gentle opacity fade without movement.

```css
/* target in src/index.css */
@keyframes slideNext {
  from {
    opacity: 0.3;
    transform: translateX(12%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slidePrev {
  from {
    opacity: 0.3;
    transform: translateX(-12%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-next {
  animation: slideNext 280ms var(--ease-out) forwards;
}

.animate-slide-prev {
  animation: slidePrev 280ms var(--ease-out) forwards;
}
```

## Repo conventions to follow

- Easing tokens live in `src/index.css`: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`.
- GPU acceleration classes follow `.btn-primary` in `src/index.css`: `will-change: transform;` paired with explicit property targets.
- Reduced motion fallback: `@media (prefers-reduced-motion: reduce)`.

## Steps

1. **Update `src/index.css`**:
   - Refine `@keyframes slideNext` and `@keyframes slidePrev` to use `translateX(12%)` / `translateX(-12%)` with 280ms `--ease-out`.
   - Ensure `@media (prefers-reduced-motion: reduce)` overrides `.animate-slide-next` and `.animate-slide-prev` to simple opacity fade (`animation: fadeInModal 200ms ease forwards;`).

2. **Update `src/components/TestimonialsSection.tsx`**:
   - Replace `transition-all duration-300` on cards with `transition-colors duration-300 var(--ease-out), transition-shadow 300ms var(--ease-out)`.
   - Add `will-change: transform, opacity;` to the animated grid wrapper to ensure smooth off-main-thread rendering.

3. **Verify Build & Motion**:
   - Run `npm run build` to verify clean TypeScript compilation.

## Boundaries

- Do NOT change card content, review texts, author names, or ratings.
- Do NOT add external motion libraries (`framer-motion`, `motion.dev`, `gsap`).
- Do NOT modify navigation button handlers or touch gesture thresholds.

## Verification

- **Mechanical**: Run `npm run build` and ensure exit code 0.
- **Feel check**:
  - Open Chrome DevTools -> Animations panel, set speed to 10%.
  - Click Next (`→`) and verify cards slide smoothly in from 12% right with `--ease-out` timing without layout shift.
  - Click Prev (`←`) and verify cards slide smoothly in from 12% left.
  - Emulate `prefers-reduced-motion: reduce` in DevTools Rendering tab and verify horizontal movement drops while opacity fade remains.
- **Done when**: `npm run build` succeeds and carousel transitions feel fluid, responsive, and GPU-accelerated.
