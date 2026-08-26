# Animation Improvement Roadmap

This directory contains prioritized, self-contained implementation plans produced by the `/improve-animations` survey.

## Plan Summary

| Plan | Title | Severity | Category | Status |
| --- | --- | --- | --- | --- |
| [001](001-hover-easing-and-gpu-acceleration.md) | Hover Easing and GPU Acceleration | HIGH | Easing & duration / Performance | TODO |
| [002](002-staggered-entrances-and-tab-transitions.md) | Staggered Entrances and Reduced Motion Checks | MEDIUM | Cohesion & tokens / Accessibility | TODO |
| [003](003-modal-and-success-state-refinement.md) | Modal and Success State Refinement | MEDIUM | Interruptibility / Physicality | TODO |
| [004](004-testimonial-card-slide-animation.md) | Testimonial Card Slide Animation Refinement | HIGH | Interruptibility / Performance | TODO |

## Recommended Execution Order

1. **[001-hover-easing-and-gpu-acceleration.md](001-hover-easing-and-gpu-acceleration.md)** — High leverage fix to replace sluggish 700ms image hover scales with 250ms `--ease-out` transitions and un-targeted `transition-all`.
2. **[004-testimonial-card-slide-animation.md](004-testimonial-card-slide-animation.md)** — Hardware acceleration & smooth percentage-based slide keyframe refinement for review card transitions.
3. **[002-staggered-entrances-and-tab-transitions.md](002-staggered-entrances-and-tab-transitions.md)** — Adds 50ms stagger on card group entrances and `prefers-reduced-motion` compliance to `useScrollReveal`.
4. **[003-modal-and-success-state-refinement.md](003-modal-and-success-state-refinement.md)** — Replaces endless `animate-bounce` on form success screen with a single pop entrance.

## How to Execute

To execute any plan, use:
`improve-animations execute plans/004-testimonial-card-slide-animation.md`
or hand the plan file directly to an execution agent.
