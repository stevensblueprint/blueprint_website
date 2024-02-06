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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim adminim veniam, quis nostrud exercitation ullamco
                  laboris nisi utaliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="basis-1/3 flex flex-col items-center m-2 p-2 max-md:items-start max-md:p-0">
                <h2 className="font-bold text-xl text-primary mb-2">
                  For Non-Profits
                </h2>
                <p>
                  Stevens Blueprint believes in the power of technology to drive social good, and with your mission always
                  top-of-mind, we are committed to delivering solutions built uniquely for you.
                </p>
              </div>
              
            </div>
          </div>
        </section>
        <comp.Footer />
      </>
    </body>
  </html>
);
