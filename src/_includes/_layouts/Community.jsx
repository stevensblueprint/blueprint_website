export default ({ comp }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <meta property="og:title" content="Apply to Stevens Blueprint" />
      <meta property="og:url" content="https://sitblueprint.com/apply/" />
      <link rel="stylesheet" href="/styles.css" />
      <title>Apply to Stevens Blueprint</title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <section className="grid place-content-center">
          <div className="flex flex-col items-center p-20 max-lg:px-12 max-md:w-full max-md:px-4">
            <h1 className="text-5xl mb-8">
              Become part of our Blueprint community!
            </h1>
            <p className="text-xl mb-16 text-center max-w-3xl">
              Whether you’re a student at Stevens looking for a place to make an
              impact with design, development, or management, or a
              representative of a non-profit organization hoping for a
              technology solution, we’re the place for you!
            </p>
            <div className="w-full flex justify-center space-x-10 max-md:flex-col max-md:space-x-0 max-md:space-y-4">
              <div className="basis-1/3 flex flex-col m-2 p-4 max-md:items-start max-md:p-0s border border-black rounded-lg max-w-xl">
                <h2 className="text-2xl mb-3 mt-4">Students</h2>
                <p className="text-[1.1rem] mb-4 flex-grow">
                  Our application cycle to join projects begins at the beginning
                  of each semester. We also have internal opportunities in the
                  Tech Team, where you can work on the software we use within
                  the organization.
                </p>
                <a
                  className="text-xl text-primary text-center font-semibold mt-1 mb-1"
                  href="/community/students"
                >
                  Application Details
                </a>
              </div>
              <div className="basis-1/3 flex flex-col m-2 p-4 max-md:items-start max-md:p-0 border border-black rounded-lg max-w-xl">
                <h2 className="text-2xl mb-3 mt-4">For Non-Profits</h2>
                <p className="text-[1.1rem] mb-4 flex-grow">
                  We’re looking for end-to-end projects that are feasible in a
                  one year time frame. We want to ensure our projects are
                  impactful and delivered within the dedicated collaboration
                  period.
                </p>
                <a
                  className="text-xl text-primary text-center font-semibold mt-1 mb-1"
                  href="/community/organizations"
                >
                  {/* organizations currently points to placeholder */}
                  Collaboration Details
                </a>
              </div>
            </div>
          </div>
        </section>
        <comp.Footer />
      </>
    </body>
  </html>
);
