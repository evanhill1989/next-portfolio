import Link from "next/link";

// Placeholder blog post data
const recentPosts = [
  {
    slug: "post-one",
    title: "Why I chose CSS Grid over Flexbox for the homepage layout",
    date: "2025-01-10",
  },
  {
    slug: "post-two",
    title: "Balancing animation performance with visual polish",
    date: "2025-01-05",
  },
  {
    slug: "post-three",
    title: "Server Components vs Client Components: Where I drew the line",
    date: "2024-12-28",
  },
];

export function BlogTeaser() {
  return (
    <section aria-labelledby="blog-heading">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 id="blog-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
          Recent Posts
        </h2>
        <Link
          href="/blog"
          className="text-sm text-zinc-600 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
        >
          View all
        </Link>
      </div>
      <ul className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <li key={post.slug}>
            <article className="flex flex-col gap-1">
              <h3 className="text-base font-medium sm:text-lg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
                >
                  {post.title}
                </Link>
              </h3>
              <time dateTime={post.date} className="text-sm text-zinc-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
