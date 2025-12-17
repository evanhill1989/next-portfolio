import { Hero } from "@/components/homepage/hero";
import { Navigation } from "@/components/homepage/navigation";
import { ProjectsSection } from "@/components/homepage/projects-section";
import { BlogTeaser } from "@/components/homepage/blog-teaser";
import { TechStack } from "@/components/homepage/tech-stack";
import { GridContainer } from "@/components/homepage/grid-container";

export default function Home() {
  return (
    <GridContainer>
      <Hero />
      <Navigation />
      <ProjectsSection />
      <TechStack />
      <BlogTeaser />
    </GridContainer>
  );
}
