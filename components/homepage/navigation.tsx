import Link from "next/link";

export function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col gap-4 text-base sm:text-lg">
        <li>
          <Link
            href="/"
            className="inline-block py-2 text-zinc-900 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="inline-block py-2 text-zinc-900 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download
            className="inline-block py-2 text-zinc-900 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
