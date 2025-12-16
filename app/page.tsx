import { Hero } from "@/components/homepage/hero";
import { Navigation } from "@/components/homepage/navigation";
import { ProjectsSection } from "@/components/homepage/projects-section";
import { BlogTeaser } from "@/components/homepage/blog-teaser";
import { TechStack } from "@/components/homepage/tech-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 p-6 sm:p-8 lg:homepage-grid lg:gap-0 lg:p-0">
      <div className="grid-hero">
        <Hero />
      </div>

      <div className="grid-navigation">
        <Navigation />
      </div>

      <div className="grid-projects">
        <ProjectsSection />
      </div>

      <div className="grid-tech-stack">
        <TechStack />
      </div>

      <div className="grid-blog">
        <BlogTeaser />
      </div>
    </main>
  );
}
