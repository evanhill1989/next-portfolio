import Link from "next/link";

// Placeholder project data
const projectOne = {
  slug: "project-one",
  title: "Project One",
  description: "A brief description of the first project",
};

const projectTwo = {
  slug: "project-two",
  title: "Project Two",
  description: "A brief description of the second project",
};

export function ProjectsSection() {
  return (
    <section className="projects" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="rounded-sm text-2xl font-bold tracking-tight sm:text-3xl"
      >
        Projects
      </h2>

      <article key={projectOne.slug} className="rounded-sm flex flex-col gap-2">
        <h3 className="text-xl font-semibold">
          <Link
            href={`/projects/${projectOne.slug}`}
            className="hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            {projectOne.title}
          </Link>
        </h3>
        <p className="text-zinc-600">{projectOne.description}</p>
      </article>
      <article key={projectTwo.slug} className="rounded-sm flex flex-col gap-2">
        <h3 className="text-xl font-semibold">
          <Link
            href={`/projects/${projectTwo.slug}`}
            className="hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            {projectTwo.title}
          </Link>
        </h3>
        <p className="text-zinc-600">{projectTwo.description}</p>
      </article>
    </section>
  );
}
