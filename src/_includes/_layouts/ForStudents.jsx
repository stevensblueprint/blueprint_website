export default ({ comp }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Students</title>
      <meta property="og:title" content="Students" />
      <meta
        property="og:url"
        content="https://sitblueprint.com/community/students/"
      />
    </head>
    <body>
      <comp.Navbar />
      <section className="grow flex flex-col lg:flex-row lg:items-center lg:min-h-[42rem] bg-primary relative overflow-hidden">
        <div className="lg:w-7/12 lg:pl-40 lg:pr-20 text-negative max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-large:items-center">
          <h1 className="lg:text-4xl text-7xl my-12 lg:px-0 px-10 tracking-wide max-lg:text-center">
            <strong>Students</strong>
          </h1>
          <p className="lg:text-xl text-4xl mb-12 lg:px-0 px-10 tracking-wide max-lg:text-center">
            We’re proud of the diverse membership here at Blueprint. Join us and
            make an impact with our opportunities in product design, project
            management, or software development!
          </p>
          <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-8 max-lg:w-full max-lg:items-center">
            <comp.Button
              style="px-8 py-4 rounded-lg bg-transparent border-2 font-semibold text-lg inline-block max-lg:px-12 max-lg:py-6 max-lg:text-4xl"
              redirect_url={"https://discord.gg/G6aTAc9nFQ"}
              text={"Join Our Discord"}
            />
            <comp.Button
              style="px-8 py-4 rounded-lg bg-transparent border-2 font-semibold text-lg inline-block max-lg:px-12 max-lg:py-6 max-lg:text-4xl"
              redirect_url={"/projects"}
              text={"See Our Projects"}
            />
          </div>
        </div>
        <div className="lg:w-1/2 lg:pr-20 lg:pl-0 px-10 flex items-center justify-center py-8">
          <div className="max-lg:p-8 lg:rounded-2xl lg:overflow-hidden">
            <image
              src="../../assets/events/students_hero.jpg"
              alt="A photo of student Blueprint members"
              className="w-full lg:h-full lg:object-cover max-lg:h-auto max-lg:object-contain max-lg:rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="lg:text-5xl text-7xl flex flex-col items-center justify-center lg:pt-32 max-lg:py-32 gap-y-6">
          <strong>Our Teams</strong>
        </h1>
      </section>
      <section className="grow flex flex-col lg:flex-row lg:items-center lg:min-h-[42rem] relative overflow-hidden lg:pb-32">
        <div className="lg:w-7/12 lg:pl-40 lg:pr-20 text-negative max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:justify-start max-large:items-start">
          <h2 className="font-semibold lg:text-2xl text-5xl text-black">
            Project Teams
          </h2>
          <p className="bg-[#E9415A] px-2 py-1 max-w-max my-3 rounded-md text-white lg:text-xs text-lg font-medium">
            APPLICATION REQUIRED
          </p>
          <p className="text-black">
            <strong>Purpose:</strong> Work directly on projects with non-profit
            organizations (NPOs)!
          </p>
          <p className="text-black">
            <strong>Goal:</strong> Help deliver requested software solutions to
            NPOs and contribute to our mission of creating tech for social good!
          </p>
          <p className="text-black">
            <strong>Requirements:</strong> Project teams are year long
            commitments depending on the scope of the project. We are looking
            for{" "}
            <strong className="text-[#E9415A]">
              technical leads, project managers, developers, and designers
            </strong>{" "}
            who can engage and collaborate within this time frame while also
            meeting deadlines punctually.
          </p>
          <p className="text-black">
            Have any questions? Reach out to our VPs of Projects:
          </p>
          <p className="text-black">
            <strong className="text-[#E9415A]">
              Justin Ferber:{" "}
              <a
                className="underline"
                target="_blank"
                href="mailto:jferber@stevens.edu"
              >
                jferber@stevens.edu
              </a>
            </strong>
          </p>
          <p className="text-black">
            <strong className="text-[#E9415A]">
              Marcos Traverso:{" "}
              <a
                className="underline"
                target="_blank"
                href="mailto:mtravers@stevens.edu"
              >
                mtravers@stevens.edu
              </a>
            </strong>
          </p>
        </div>
        <div className="lg:w-5/12 lg:pr-20 lg:pl-0 px-10 flex items-center justify-center py-8">
          <div>
            <image
              src="../../assets/vector/project_team_clipart.svg"
              alt="Clipart of three people working on a project."
            />
          </div>
        </div>
      </section>
      <comp.Footer />
    </body>
  </html>
);
