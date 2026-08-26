# 002 — Staggered Entrances and Reduced Motion Checks

- **Status**: TODO
- **Commit**: ef3316d
- **Severity**: MEDIUM
- **Category**: Cohesion & tokens / Accessibility
- **Estimated scope**: 2 files (`src/utils/useScrollReveal.ts`, `src/components/ProgramsSection.tsx`)

## Problem

Currently, program cards in `ProgramsSection.tsx` enter all simultaneously when scrolled into view. A 50ms stagger per card creates spatial rhythm without delaying interaction. In addition, `useScrollReveal.ts` does not check `prefers-reduced-motion`, causing motion to trigger for users who requested reduced motion.

```ts
/* src/utils/useScrollReveal.ts:1-24 — current */
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
```

## Target

Add `prefers-reduced-motion` detection in `useScrollReveal.ts` to immediately show content without slide/fade transitions when reduced motion is preferred. Add inline `style={{ transitionDelay: '${index * 50}ms' }}` on program cards in `ProgramsSection.tsx`.

```ts
/* target src/utils/useScrollReveal.ts */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
```

## Repo conventions to follow

- Utility hooks live under `src/utils/`.
- Stagger delays remain under 80ms per item (50ms recommended in AUDIT.md).

## Steps

1. Open `src/utils/useScrollReveal.ts`.
2. Update `useEffect` to check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and set `setIsVisible(true)` immediately if match is true.
3. Open `src/components/ProgramsSection.tsx`.
4. Locate `programs.map((prog, idx) => (` on line 59 and add `style={{ transitionDelay: '${idx * 50}ms' }}` to the card wrapper div.

## Boundaries

- Do NOT increase stagger delay beyond 50ms per card.
- Do NOT block user interaction during entrance.

## Verification

- **Mechanical**: Run `npx tsc --noEmit` and confirm compilation passes.
- **Feel check**:
  - Scroll down to Programs section — cards should reveal with a subtle 50ms cascade from left to right.
  - In DevTools Rendering panel, enable `Emulate CSS media feature prefers-reduced-motion: reduce` and confirm cards display immediately without motion.
- **Done when**: Staggered delays are active on cards and reduced motion preference is respected by `useScrollReveal`.
