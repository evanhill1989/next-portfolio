"use client";

import { useState, useRef, ReactNode, Children, isValidElement } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip, useGSAP);
}

type SectionName =
  | "hero"
  | "navigation"
  | "projects"
  | "tech-stack"
  | "blog"
  | null;

interface GridContainerProps {
  children: ReactNode;
}

const SECTIONS: { id: SectionName; className: string }[] = [
  { id: "hero", className: "grid-hero" },
  { id: "navigation", className: "grid-navigation" },
  { id: "projects", className: "grid-projects" },
  { id: "tech-stack", className: "grid-tech-stack" },
  { id: "blog", className: "grid-blog" },
];

export function GridContainer({ children }: GridContainerProps) {
  const [activeSection, setActiveSection] = useState<SectionName>(null);
  const containerRef = useRef<HTMLElement>(null);

  // 1. Create a ref to store the 'First' state
  const lastFlipState = useRef<Flip.FlipState | null>(null);

  // 2. Wrap the state change to capture the layout first
  const changeSection = (name: SectionName) => {
    // Record exactly how everything looks RIGHT NOW
    lastFlipState.current = Flip.getState(".homepage-grid > div");
    setActiveSection(name);
  };

  useGSAP(
    () => {
      // 3. If we have a recorded state, animate from it to the new layout
      if (lastFlipState.current) {
        Flip.from(lastFlipState.current, {
          duration: 0.8,
          ease: "power1.inOut", // Use a stronger ease for a more "polished" feel
          absolute: true,
          // Optional: animate internal content or opacity changes
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 0.8 }
            ),
          onLeave: (elements) =>
            gsap.to(elements, { opacity: 0, scale: 0, duration: 0.8 }),
          onComplete: () => {
            lastFlipState.current = null;
          },
        });
      }
    },
    { dependencies: [activeSection], scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="homepage-grid"
      data-active={activeSection}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;

        const section = SECTIONS[index];
        if (!section) return child;

        return (
          <div
            key={section.id}
            className={section.className}
            /* 4. Use our new changeSection wrapper */
            onMouseEnter={() => changeSection(section.id)}
            onMouseLeave={() => changeSection(null)}
            onFocus={() => changeSection(section.id)}
            onBlur={() => changeSection(null)}
            tabIndex={0}
          >
            {child}
          </div>
        );
      })}
    </main>
  );
}
