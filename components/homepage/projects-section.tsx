import Link from "next/link";

// Placeholder project data
const projects = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A brief description of the first project",
  },
];

export function ProjectsSection() {
  return (
    <section className="overflow-hidden" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
      >
        Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project) => (
          <article key={project.slug} className="flex flex-col gap-2   ">
            <h3 className="text-xl font-semibold">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
              >
                {project.title}
              </Link>
            </h3>
            <p className="text-zinc-600">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
