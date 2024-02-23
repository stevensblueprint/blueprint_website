export default ({ comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title> Apply </title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <section className="grid place-content-center">
          <div className="flex flex-col items-center p-20 max-lg:px-12 max-md:w-full max-md:px-4">
            <div className="w-full flex flex-wrap justify-evenly max-md:flex-nowrap max-md:flex-col">
              <div className="basis-1/3 flex flex-col items-center m-4 p-4 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  For Students
                </h2>
                <p>
                  At Blueprint, we are dedicated to leveraging our technical
                  skills to drive positive social impact. Our culture is as
                  important as our projects, and we value the relationships and
                  learning opportunities we find in each other!
                </p>
                <a
                  className="text-primary font-semibold mt-2"
                  href="/apply/students"
                >
                  Learn More
                </a>
              </div>
              <div className="basis-1/3 flex flex-col items-center m-2 p-2 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  For Non-Profits
                </h2>
                <p>
                  We believe in the power of technology to support our
                  communities, and with your mission always top-of-mind, we are
                  committed to delivering web solutions built uniquely for you,
                  completely free of charge.
                </p>
                <a
                  className="text-primary font-semibold mt-2"
                  href="/apply/nonprofits"
                >
                  Learn More
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
