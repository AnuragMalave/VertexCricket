# 003 — Modal and Success State Refinement

- **Status**: TODO
- **Commit**: ef3316d
- **Severity**: MEDIUM
- **Category**: Interruptibility / Physicality
- **Estimated scope**: 1 file (`src/components/EnrollModal.tsx`)

## Problem

In `EnrollModal.tsx`, the success confirmation screen uses `animate-bounce` on the `<CheckCircle2 />` icon. `animate-bounce` loops infinitely, causing continuous jarring motion long after the user has read the success message.

```tsx
/* src/components/EnrollModal.tsx:71 — current */
<div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
  <CheckCircle2 className="w-12 h-12" />
</div>
```

## Target

Replace infinite `animate-bounce` with a single scale-up / pop animation (`animate-scaleUp` or subtle spring pop) so the checkmark icon pops into place on success, settles within 300ms, and stays static:

```tsx
/* target */
<div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-scaleUp">
  <CheckCircle2 className="w-12 h-12" />
</div>
```

## Repo conventions to follow

- Keyframes for single pop animations live in `src/index.css` under `.animate-scaleUp`.

## Steps

1. Open `src/components/EnrollModal.tsx`.
2. Locate line 71 containing `animate-bounce` and replace `animate-bounce` with `animate-scaleUp`.

## Boundaries

- Do NOT change form submission handling or state logic.
- Do NOT alter success card colors or text content.

## Verification

- **Mechanical**: Run `npx tsc --noEmit` and ensure build passes.
- **Feel check**:
  - Fill out and submit the enrollment form in `EnrollModal`.
  - Confirm the green checkmark pops smoothly once upon entering the confirmation screen and stays calm instead of jumping continuously.
- **Done when**: Infinite bouncing is removed and replaced with a single pop animation.
