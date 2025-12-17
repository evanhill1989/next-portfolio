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

// 1. Define the order and metadata outside the component
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

  useGSAP(
    () => {
      // Capture the current state of all grid items
      const state = Flip.getState(".homepage-grid > div");

      // Animate to the new state defined by CSS
      Flip.from(state, {
        duration: 0.6,
        ease: "expo.out",
        absolute: false,
      });
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

        // 2. Use the index to get the correct metadata
        const section = SECTIONS[index];
        if (!section) return child; // Fallback if extra children are passed

        return (
          <div
            key={section.id}
            className={section.className}
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => setActiveSection(null)}
            onFocus={() => setActiveSection(section.id)}
            onBlur={() => setActiveSection(null)}
            tabIndex={0}
          >
            {child}
          </div>
        );
      })}
    </main>
  );
}
