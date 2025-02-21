export default ({ comp, faqs, timelineContent }) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Students</title>
      <meta property="og:title" content="Students" />
      <meta property="og:url" content="https://sitblueprint.com/students/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <comp.Navbar />
      <comp.Hero
        title="Student Opportunities"
        descr="We're proud of the diverse membership here at Blueprint. Join us and
          make an impact with our opportunities in product design, project
          management, or software development!"
        button1={{
          text: "Email Us",
          url: "mailto:sit.blueprint@gmail.com",
        }}
        button2={{ text: "See Our Projects", url: "/projects" }}
        image={{
          src: "../../assets/vector/student_hero.svg",
          alt: "student",
        }}
      />
      <h1 className="font-bold text-4xl lg:text-5xl flex flex-col items-center justify-center pt-16 lg:pt-24 gap-y-6">
        Our Teams
      </h1>
      <comp.ForStudents.StudentsProjectTeam />
      <comp.ForStudents.ApplicationProcess timelineContent={timelineContent} />
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
