export default ({
  comp,
  npoName,
  npoLogo,
  githubRepository,
  npoDescription,
  npoWebsite,
  projectDescription,
  projectLink,
  tools,
  members,
}) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
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
        <main className="w-full flex flex-1 flex-col items-center pt-12 pb-16">
          <article className="prose lg:prose-xl max-w-none px-4 md:px-0 w-full md:w-2/3 lg:w-1/2 overflow-hidden">
            <header className="border-b border-gray-200 mb-4 pb-4 flex items-center justify-between gap-6">
              <div className="text-3xl lg:text-5xl font-bold">{npoName}</div>
              <a href={npoWebsite} className="flex-shrink-0">
                <img
                  className="h-auto max-h-16 w-auto object-contain"
                  src={npoLogo}
                  alt="Project Logo"
                />
              </a>
            </header>
            <p className="pt-6 !mb-2 line-clamp-6">{npoDescription}</p>

            <h2 className="flex items-center gap-2 !mt-2 !mb-1">
              Project
              <a
                href={githubRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center opacity-60 hover:opacity-100 transition-opacity"
                title="View on GitHub"
              >
                <img
                  src="/assets/vector/hyperlink.svg"
                  alt="GitHub link"
                  className="w-5 h-5"
                />
              </a>
            </h2>
            {tools && (
              <div className="flex flex-wrap gap-2 mt-2 !mb-3 not-prose">
                {tools.split(",").map((tool, i) => (
                  <span
                    key={i}
                    className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            )}
            <p>{projectDescription}</p>
            {projectLink && (
              <a
                href={projectLink}
                className="text-primary hover:text-secondary underline hover:no-underline"
              >
                View Project →
              </a>
            )}
            <h2>Team Members</h2>
          </article>
          {members && (
            <div className="w-full py-8">
              <div className="flex flex-wrap justify-center px-4 lg:px-24 lg:max-w-7xl mx-auto">
                {members.map((member, index) => (
                  <div
                    key={index}
                    className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
                  >
                    <comp.MemberCard
                      name={member.name}
                      role={member.role}
                      image_url={member.image_url}
                      linkedin={member.linkedin}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-full md:w-2/3 lg:w-1/2 px-4 md:px-0">
            <a
              href="/projects"
              className="text-primary hover:text-secondary underline hover:no-underline"
            >
              <p>← View Other Projects</p>
            </a>
          </div>
        </main>
        <comp.Footer />
      </div>
    </body>
  </html>
);
