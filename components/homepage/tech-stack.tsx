const frontEndTech = ["HTML", "TypeScript", "Javascript", "React", "Next.js"];

const styleTech = [
  "Tailwind",
  "CSS",
  "shadcn",
  "GSAP",
  "Illustrator",
  "Photoshop",
  "Figma",
];

const backEndTech = ["Node.js", "Supabase", "Drizzle", "SQL", "PostgreSQL"];

export function TechStack() {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="tech-stack rounded-sm"
    >
      <h2
        id="tech-stack-heading"
        className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl"
      >
        Tech Stack
      </h2>
      <ul className="">
        {frontEndTech.map((tech) => (
          <li key={tech} className="">
            {tech}
          </li>
        ))}
      </ul>
      <ul>
        {styleTech.map((tech) => (
          <li key={tech} className="">
            {tech}
          </li>
        ))}
      </ul>
      <ul>
        {" "}
        {backEndTech.map((tech) => (
          <li key={tech} className="">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
