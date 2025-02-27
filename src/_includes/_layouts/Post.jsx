export default ({ title, author, date, tags, comp, children }) => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body className="">
      <div className="flex flex-col min-h-screen justify-between">
        <comp.Navbar />
        <main className="w-full flex flex-1 justify-center items-start pt-12 pb-8">
          <article className="prose lg:prose-xl max-w-none px-4 md:px-0 w-full md:w-2/3 lg:w-1/2 overflow-hidden">
            <header className="border-b border-gray-200 mb-4 pb-2">
              <div className="text-3xl lg:text-5xl font-bold mb-4">{title}</div>
              <div className="text-gray-600 italic mb-2">
                By {author} on{" "}
                <time
                  dateTime={date instanceof Date ? date.toISOString() : date}
                >
                  {date instanceof Date ? date.toLocaleDateString() : date}
                </time>
              </div>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>
            {children}
            <a href="/blog">
              <div className="text-primary underline hover:text-secondary hover:no-underline">
                ← View Other Posts
              </div>
            </a>
          </article>
        </main>
        <comp.Footer />
      </div>
    </body>
  </html>
);
