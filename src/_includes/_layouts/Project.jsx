export default ({
  comp,
  project_title,
  about_project,
  redirect_url,
  project_logo_url,
  children,
}) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title>Stevens Blueprint</title>
    </head>
    <body>
      <div className="flex flex-col items-center w-screen min-h-screen gap-y-12 px-80 py-20 max-xl:px-40 max-md:px-20 max-sm:w-full max-sm:px-12">
        {/* Navbar */}
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl">
            <strong>{project_title}</strong>
          </h1>
          <p className="text-xl">{about_project}</p>
          <comp.Button
            style={"rounded-sm bg-white text-xl text-primary font-bold"}
            redirect_url={redirect_url}
            text={"Learn More"}
          />
        </div>
        <img
          className="max-w-[40rem]"
          src={project_logo_url}
          alt={"project logo"}
        />
        <div className="w-full flex flex-col gap-y-4">
          <h2 className="text-3xl">
            <strong>Our Project</strong>
          </h2>
          <p className="text-xl">{children}</p>
        </div>

        {/* Footer */}
      </div>
    </body>
  </html>
);
