export default ({ comp, faqs }) => (
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <comp.Navbar />
      <comp.StudentsHero comp={comp} />
      <section>
        <h1 className="font-bold lg:text-5xl text-7xl flex flex-col items-center justify-center lg:pt-32 max-lg:py-32 gap-y-6">
          Our Teams
        </h1>
      </section>
      <comp.StudentsProjectTeam comp={comp} />
      {/* Application Process Section */}
      <comp.ApplicationProcess comp={comp} />
      {/*Internal Teams & Design Teams Section*/}
      <comp.InternalDesignTeams comp={comp} />
      <section className="flex flex-col justify-center px-5 mb-10 max-w-7xl mx-auto">
        <h1 className="md:text-[40px] font-semibold text-5xl py-3">FAQs</h1>
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => (
            <comp.DropdownFAQ faq={faq} index={index} key={index} />
          ))}
        </div>
      </section>

      <comp.Footer />
    </body>
  </html>
);
