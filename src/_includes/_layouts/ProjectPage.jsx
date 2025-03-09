export default ({
  comp,
  npoName,
  npoLogo,
  githubRepository,
  npoDescription,
  projectDescription,
  tools,
  members,
}) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>{npoName}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body>
      <div>
        <comp.Navbar />
        <main className="w-full flex flex-1 justify-center items-start pt-12 pb-16">
          <article className="prose lg:prose-xl max-w-none px-4 md:px-0 w-full md:w-2/3 lg:w-1/2 overflow-hidden">
            <header className="border-b border-gray-200 mb-4 pb-2">
              <div className="text-3xl lg:text-5xl font-bold mb-4">
                {npoName}
              </div>
            </header>
            <div className="w-full flex justify-center items-center border-2 border-gray-200 rounded-lg px-16 py-8">
              <img
                className="h-auto max-h-96"
                src={npoLogo}
                alt="Project Logo"
              />
            </div>
            <p className="pt-6 line-clamp-6">{npoDescription}</p>

            <h2 className="">Project</h2>
            <p>{projectDescription}</p>

            <h2>Tools</h2>
            <p className="line-clamp-6">{tools}</p>

            <div className="flex">
              <a
                href={githubRepository}
                className="text-gray-500 hover:text-gray-300 dark:hover:text-white"
                target="_blank"
              >
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="sr-only">Github</span>
              </a>
            </div>
            {members && (
              <div className="w-full max-w-2xl mx-auto p-4">
                <p className="text-2xl font-bold text-center">
                  Special thanks to the students who worked on this project!
                </p>
                <div className="w-full flex flex-col gap-3 p-2 items-center">
                  {members.map((member, index) => (
                    <div
                      className="grid grid-cols-2 place-items-start w-full max-w-sm"
                      key={index}
                    >
                      <span>{member.name}</span>
                      <span>{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </main>
        <comp.Footer />
      </div>
    </body>
  </html>
);
