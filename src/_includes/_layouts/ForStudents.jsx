export default ({
  comp,
  faqs,
  timelineContent,
  hero,
  projectTeams,
  internalTeams,
}) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <link
        rel="preload"
        href="/assets/fonts/BPText-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin
      />
      <link rel="stylesheet" href="/styles.css" />
      <title>Students</title>
      <meta property="og:title" content="Students" />
      <meta property="og:url" content="https://sitblueprint.com/students/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <comp.Navbar />
      <comp.Hero
        title={hero.title}
        description={hero.description}
        button1={hero.button1}
        button2={hero.button2}
        image={hero.image}
      />
      <h1 className="font-bold text-4xl lg:text-5xl flex flex-col items-center justify-center pt-16 lg:pt-24 gap-y-6">
        Our Teams
      </h1>
      <comp.ForStudents.StudentsProjectTeam projectTeams={projectTeams} />
      <comp.ForStudents.ApplicationProcess timelineContent={timelineContent} />
      <comp.ForStudents.InternalTeams internalTeams={internalTeams} />
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
