export default ({ comp, faqs, timelineContent }) => (
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
      <comp.ForStudents.Hero />
      <h1 className="font-bold text-4xl lg:text-5xl flex flex-col items-center justify-center pt-16 lg:pt-24 gap-y-6">
        Our Teams
      </h1>
      <comp.ForStudents.StudentsProjectTeam />
      {/* Application Process Section */}
      <comp.ForStudents.ApplicationProcess timelineContent={timelineContent} />
      {/*Internal Teams & Design Teams Section*/}
      <comp.ForStudents.InternalTeams />
      <section className="flex flex-col justify-center mb-16 px-8 lg:px-40">
        <h1 className="text-4xl lg:text-5xl font-semibold py-3">FAQs</h1>
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
