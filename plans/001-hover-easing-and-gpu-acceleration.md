# 001 — Hover Easing and GPU Acceleration

- **Status**: TODO
- **Commit**: ef3316d
- **Severity**: HIGH
- **Category**: Easing & duration / Performance
- **Estimated scope**: 3 files (`src/components/ProgramsSection.tsx`, `src/components/FacilitiesSection.tsx`, `src/index.css`)

## Problem

Card hover image scaling currently uses `duration-700` (700ms duration) which feels sluggish and slow during user interaction. Additionally, card containers use un-targeted `transition-all duration-300`, which triggers style recalculations off GPU on every frame.

```tsx
/* src/components/ProgramsSection.tsx:62, 71 — current */
className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-200/80"
className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
```

```tsx
/* src/components/FacilitiesSection.tsx:131 — current */
className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
```

## Target

Speed up hover scale durations from 700ms to 250ms using strong ease-out (`var(--ease-out)`), and replace `transition-all` with explicit GPU-accelerated property transitions (`transition-transform`, `transition-shadow`):

```tsx
/* target */
className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-[transform,box-shadow] duration-250 ease-[var(--ease-out)] flex flex-col group border border-slate-200/80"
className="w-full h-full object-cover transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-105"
```

## Repo conventions to follow

- Easing tokens live in `src/index.css`: `:root { --ease-out: cubic-bezier(0.23, 1, 0.32, 1); }`
- CSS helper classes in `src/index.css` use `var(--ease-out)` for snappy responsiveness.

## Steps

1. Open `src/components/ProgramsSection.tsx`.
2. Locate the card container on line 62 and replace `transition-all duration-300` with `transition-[transform,box-shadow] duration-250 ease-[var(--ease-out)]`.
3. Locate the card image on line 71 and replace `transition-transform duration-700 group-hover:scale-105` with `transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-105`.
4. Open `src/components/FacilitiesSection.tsx`.
5. Locate the facility image on line 131 and replace `transition-transform duration-700 group-hover:scale-105` with `transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-105`.

## Boundaries

- Do NOT change card HTML markup or layout properties.
- Do NOT remove image aspect ratios or rounded corners.
- Do NOT add external animation libraries.

## Verification

- **Mechanical**: Run `npx tsc --noEmit` and ensure build passes cleanly.
- **Feel check**:
  - Hover over program cards in desktop browser — image scale should feel responsive and crisp (250-300ms) rather than slow and lingering (700ms).
  - Inspect in Chrome DevTools Animations panel set to 10% speed to confirm scaling starts fast with `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Done when**: All hover scaling uses `duration-300` or less with `--ease-out` and un-targeted `transition-all` is removed from card containers.
