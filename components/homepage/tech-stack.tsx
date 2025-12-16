const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

export function TechStack() {
  return (
    <section aria-labelledby="tech-stack-heading" className="flex flex-col justify-center">
      <h2 id="tech-stack-heading" className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
        Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
