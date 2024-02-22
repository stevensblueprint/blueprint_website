export default ({ comp }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title> For Students </title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <div class="flex flex-col items-center px-4 lg:px-8">
          <h1 class="text-4xl">
            <strong>For Students</strong>
          </h1>
        </div>

        <section className="grid place-content-center">
          <div></div>

          <div className="flex flex-col items-center p-20 max-lg:px-12 max-md:w-full max-md:px-4">
            <div className="w-full flex flex-wrap justify-evenly max-md:flex-nowrap max-md:flex-col">
              <ol class="flex flex-col p-10 md:flex-row md:divide-x md:divide-charcoal-500 space-y-5 md:space-y-0">
                <li class="flex-1 flex flex-col p-6 space-y-4 md:pr-6">
                  <div class="relative w-16 h-16 mb-3">
                    <h1 class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 row-start-1 text-blue text-[48px] font-medium">
                      1
                    </h1>
                  </div>
                  <h2 className="font-bold text-xl text-primary mb-2">
                    Written Application
                  </h2>
                  <p>
                    Attend our events and info sessions to learn more about our
                    application cycle! In your written application, tell us
                    about yourself and why you're interested in joining
                    Blueprint. We anonymize your applications in this first
                    stage, so please take care to be detailed so we have the
                    most holistic perspective of you. Applications open Feb 26,
                    2024 12:00 AM and close Mar 05, 2024 11:59 PM.
                  </p>
                </li>

                <li class="flex-1 flex flex-col p-6 space-y-4 md:pr-6">
                  <div class="relative w-16 h-16 mb-3">
                    <h1 class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 row-start-1 text-blue text-[48px] font-medium">
                      2
                    </h1>
                  </div>
                  <h2 className="font-bold text-xl text-primary mb-2">
                    Blueprint Games
                  </h2>
                  <p>
                    This semester, Blueprint Games will be hosted on Mar 20,
                    2024 3:00 PM (invites will be sent by Mar 08). The event is
                    a team-based activity that simulates the product design and
                    implementation process for a hypothetical client.
                  </p>
                </li>

                <li class="flex-1 flex flex-col p-6 space-y-4 md:pr-6">
                  <div class="relative w-16 h-16 mb-3">
                    <h1 class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 row-start-1 text-blue text-[48px] font-medium">
                      3
                    </h1>
                  </div>
                  <h2 className="font-bold text-xl text-primary">
                    Coffee Chat with Us
                  </h2>
                  <p>
                    Let's talk! Invites will be sent out by Mar 24 to connect.
                    Before meeting, a small technical problem will be sent out
                    for you to complete. During these chats, you'll have an
                    opportunity to share more about how your values and any
                    questions you may have!
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <comp.Footer />
      </>
    </body>
  </html>
);
