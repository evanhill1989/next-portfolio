"use client";

import { Hero } from "@/components/homepage/hero";
import { Navigation } from "@/components/homepage/navigation";
import { ProjectsSection } from "@/components/homepage/projects-section";
import { BlogTeaser } from "@/components/homepage/blog-teaser";
import { TechStack } from "@/components/homepage/tech-stack";

import { useState, useRef, ReactNode, Children, isValidElement } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

export function GridContainer() {
  return (
    <div className="homepage-grid">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <TechStack />
      <BlogTeaser />
    </div>
  );
}
