export default ({ comp, faqs }) => (
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
          <div className="flex flex-col items-center p-4 lg:p-20">
            <h1 className="max-w-4xl text-7xl lg:text-5xl mb-6 mt-20 lg:mt-0 lg:mb-8 text-center">
              Become part of our Blueprint community!
            </h1>
            <p className="text-4xl lg:text-xl mb-20 lg:mb-16 text-center max-w-3xl">
              Whether you're a student at Stevens looking for a place to make an
              impact with design, development, or management, or a
              representative of a non-profit organization hoping for a
              technology solution, we're the place for you!
            </p>
            <div className="w-full flex flex-col mb-20 lg:mt-0 lg:mb-0 lg:flex-row lg:justify-center lg:space-x-10 space-y-8 lg:space-y-0">
              <div className="flex flex-col mb-8 lg:mb-0 max-w-3xl w-full mx-auto p-10 lg:mx-0 lg:p-6 border border-black rounded-lg lg:w-1/3 lg:max-w-xl">
                <h2 className="text-6xl text-center mb-8 lg:text-left lg:text-2xl lg:mb-3">
                  Students
                </h2>
                <p className="text-4xl mb-8 text-center lg:text-left lg:text-lg lg:mb-4 flex-grow">
                  Our application cycle to join projects begins at the beginning
                  of each semester. We also have internal opportunities in the
                  Tech Team, where you can work on the software we use within
                  the organization.
                </p>
                <a
                  className="text-5xl lg:text-xl text-primary text-center font-semibold mt-auto"
                  href="/community/students"
                >
                  Application Details
                </a>
              </div>
              <div className="flex flex-col lg:mb-0 max-w-3xl w-full mx-auto p-10 lg:mx-0 lg:p-6 border border-black rounded-lg lg:w-1/3 lg:max-w-xl">
                <h2 className="text-6xl text-center mb-8 lg:text-left lg:text-2xl lg:mb-3">
                  For Non-Profits
                </h2>
                <p className="text-4xl mb-8 text-center lg:text-left lg:text-lg lg:mb-4 flex-grow">
                  We're looking for end-to-end projects that are feasible in a
                  one year time frame. We want to ensure our projects are
                  impactful and delivered within the dedicated collaboration
                  period.
                </p>
                <a
                  className="text-5xl lg:text-xl text-primary text-center font-semibold mt-auto"
                  href="/community/organizations"
                >
                  Collaboration Details
                </a>
              </div>
            </div>
          </div>
        </section>
        {faqs.map((faq, index) => (
          <comp.DropdownFAQ faq={faq} key={index} index={index}/>
        ))

        }
        <comp.Footer />
      </>
    </body>
  </html>
);
