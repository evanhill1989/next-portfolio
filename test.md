This is a well-structured system prompt with clear constraints
and strong philosophical grounding. Here are my suggested
refinements:

Critical Technical Clarifications

1. Version Verification

- Next.js 16 - As of January 2025, Next.js 15 is the latest
  stable version. Did you mean Next.js 15, or are you intentionally
  using a canary/beta version?
- Tailwind CSS v4.1 - v4 is in beta. Specify whether to use the
  stable v3.x or commit to the beta, as this affects stability and
  documentation availability.

2. Missing Deployment Context
   Add a brief section on:

- Deployment target (Vercel assumed? Self-hosted?)
- Environment expectations (Node version, build requirements)
- Performance budgets (if any)

Structural Improvements

3. Clarify Mobile/Desktop Grid Relationship
   Current text says "Mobile-first implementation" but describes a
   desktop 6x7 grid in detail. Add:

### Responsive Strategy

- Mobile: Single column, stack-based layout
- Desktop (1024px+): 6-row × 7-column grid with hover
  interactions
- Grid is desktop-only; do not force grid behavior on mobile

4. Add Concrete Examples

Under "Blog posts should function as a decision diary":
Good: "Why I chose CSS Grid over Flexbox for the homepage layout"
Bad: "What I learned about CSS Grid today"

5. Strengthen Animation Guardrails
   Make measurable:

- Animations should complete in <300ms
- Use `prefers-reduced-motion` media query
- Test at 60fps minimum on mid-range devices

Content & Scope Refinements

6. Add SEO/Discovery Section

## SEO & Discoverability

- Semantic HTML with proper heading hierarchy
- Meta tags for Open Graph and Twitter Cards
- Structured data for projects (JSON-LD)
- No aggressive optimization—prioritize readability

7. Clarify Testing Expectations
   Add under Architectural Principles:

## Quality Assurance

- Manual testing in Chrome, Firefox, Safari
- Lighthouse scores: >90 for Performance, Accessibility, Best
  Practices
- No formal unit testing required unless complexity demands it

8. Project Content Guidance
   The "3 projects exactly" is good, but add:
   Projects should vary in:

- Scale (small utility → larger feature)
- Team context (solo → collaborative)
- Constraints (time-boxed → iterative)

Avoid three identical project narratives.

Working Style Enhancements

9. Resolve Potential Contradiction
   Current text has tension between "ask for clarification only when
   necessary" and "surface tradeoffs explicitly." Revise to:

## Working Style Expectations

- Explain _why_ you suggest something, not just _what_
- Surface tradeoffs explicitly, especially when multiple
  approaches are viable
- Ask clarifying questions when requirements are ambiguous or
  when a decision significantly impacts architecture
- If a solution risks overengineering, propose a simpler
  alternative first
- Default to simpler solutions unless complexity is justified by
  actual constraints

10. Add Code Conventions

## Code Style

- Use TypeScript strictly (avoid `any` unless truly necessary)
- Prefer explicit return types for exported functions
- File naming: kebab-case for components, camelCase for utilities
- Colocate tests and components where applicable

Minor Clarifications

11. shadcn/ui Scope
    "for commoditized UI only" is good but vague. Clarify:

- shadcn/ui for: buttons, forms, dialogs, tooltips
- Not for: layout components, page-level compositions, custom
  interactive features

12. GSAP Licensing
    If using GSAP commercially, note whether standard or premium
    license is available.

---

Overall Assessment

Strengths:

- Excellent constraint definition
- Clear philosophical guardrails
- Audience-aware strategy
- Strong anti-overengineering stance

Risk Areas:

- Version specifications may cause tooling issues
- Mobile/desktop relationship needs clarification
- Missing some practical implementation details

Recommendation:
After addressing the version questions (#1) and responsive
strategy (#3), this prompt is production-ready. The other
suggestions are enhancements, not blockers.

Would you like me to generate a refined version incorporating
these suggestions, or would you prefer to make specific
adjustments yourself?
