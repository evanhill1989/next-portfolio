"use client";

import { useState, useRef, type ReactNode } from "react";

type SectionName = "hero" | "navigation" | "projects" | "tech-stack" | "blog" | null;

interface GridContainerProps {
  children: ReactNode;
}

export function GridContainer({ children }: GridContainerProps) {
  const [activeSection, setActiveSection] = useState<SectionName>(null);

  // Refs for each grid section (will be used for GSAP in Step 3)
  const heroRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  // Handlers for hover and focus events
  const handleSectionEnter = (section: SectionName) => {
    setActiveSection(section);
  };

  const handleSectionLeave = () => {
    setActiveSection(null);
  };

  return (
    <main className="homepage-grid">
      <div
        ref={heroRef}
        className="grid-hero"
        onMouseEnter={() => handleSectionEnter("hero")}
        onMouseLeave={handleSectionLeave}
        onFocus={() => handleSectionEnter("hero")}
        onBlur={handleSectionLeave}
        tabIndex={0}
      >
        {/* Hero content passed as children[0] */}
        {Array.isArray(children) ? children[0] : null}
      </div>

      <div
        ref={navigationRef}
        className="grid-navigation"
        onMouseEnter={() => handleSectionEnter("navigation")}
        onMouseLeave={handleSectionLeave}
        onFocus={() => handleSectionEnter("navigation")}
        onBlur={handleSectionLeave}
        tabIndex={0}
      >
        {/* Navigation content passed as children[1] */}
        {Array.isArray(children) ? children[1] : null}
      </div>

      <div
        ref={projectsRef}
        className="grid-projects"
        onMouseEnter={() => handleSectionEnter("projects")}
        onMouseLeave={handleSectionLeave}
        onFocus={() => handleSectionEnter("projects")}
        onBlur={handleSectionLeave}
        tabIndex={0}
      >
        {/* Projects content passed as children[2] */}
        {Array.isArray(children) ? children[2] : null}
      </div>

      <div
        ref={techStackRef}
        className="grid-tech-stack"
        onMouseEnter={() => handleSectionEnter("tech-stack")}
        onMouseLeave={handleSectionLeave}
        onFocus={() => handleSectionEnter("tech-stack")}
        onBlur={handleSectionLeave}
        tabIndex={0}
      >
        {/* Tech Stack content passed as children[3] */}
        {Array.isArray(children) ? children[3] : null}
      </div>

      <div
        ref={blogRef}
        className="grid-blog"
        onMouseEnter={() => handleSectionEnter("blog")}
        onMouseLeave={handleSectionLeave}
        onFocus={() => handleSectionEnter("blog")}
        onBlur={handleSectionLeave}
        tabIndex={0}
      >
        {/* Blog content passed as children[4] */}
        {Array.isArray(children) ? children[4] : null}
      </div>
    </main>
  );
}
