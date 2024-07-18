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
            <div className="w-full flex flex-wrap justify-evenly max-md:flex-nowrap max-md:flex-col">
              <div className="basis-1/3 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  Students
                </h2>
                <p>
                  Our application cycle to join projects begins at 
                  the beginning of each semester. We also have 
                  internal opportunities in the Tech Team, where
                  you can work on the software we use within 
                  the organization.
                </p>
                <a
                  className="text-primary font-semibold mt-2"
                  href="/apply/students"
                >
                  Application Details
                </a>
              </div>
              <div className="basis-1/3 flex flex-col items-center m-2 p-2 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  For Non-Profits
                </h2>
                <p>
                  We’re looking for end-to-end projects that are 
                  feasible in a one year time frame. We want to 
                  ensure our projects are impactful and 
                  delivered within the dedicated collaboration 
                  period. 
                </p>
                <a
                  className="text-primary font-semibold mt-2"
                  href="/apply/nonprofits"
                >
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
