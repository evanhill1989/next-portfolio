import Link from "next/link";

export function Navigation() {
  return (
    <nav className="nav m-2.5 rounded-sm" aria-label="Primary navigation">
      <ul className="flex flex-col lg:flex-row lg:justify-between gap-4 text-base sm:text-lg">
        <li>
          <Link
            href="/contact"
            className="inline-block py-2  hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="inline-block py-2 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            About
          </Link>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download
            className="inline-block py-2  hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="/blog"
            download
            className="inline-block py-2  hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
