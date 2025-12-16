export function Hero() {
  return (
    <section
      className="flex flex-col justify-center gap-2"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Your Name
      </h1>
      <p className="text-lg text-zinc-600 sm:text-xl">Web Developer</p>
    </section>
  );
}
