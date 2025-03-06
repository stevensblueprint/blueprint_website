export default ({
  comp,
  faqs,
  testimonial,
  projectCriteria,
  projectTimeline,
}) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>For Non-Profits</title>
      <meta property="og:title" content="Non-Profits" />
      <meta property="og:url" content="https://sitblueprint.com/non-profits/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <comp.Navbar />
      <comp.Hero
        title="Non-Profit Organizations"
        description="We are passionate about leveraging our technical and consulting skills
          to support your organization’s mission, free of charge! Reach out to see how we can
          help!"
        button1={{
          text: "Email Us",
          url: "mailto:blueprint@stevens.edu",
        }}
        button2={{ text: "See Our Projects", url: "/projects" }}
        image={{
          src: "/assets/vector/hands.svg",
          alt: "hands",
        }}
      />
      <comp.ForNPOs.ProjectTimeline projectTimeline={projectTimeline} />
      <comp.ForNPOs.ProjectCriteria
        projectCriteria={projectCriteria}
        testimonial={testimonial}
      />
      <comp.ForNPOs.ContactUs />
      <section className="flex flex-col justify-center mb-16 px-8 lg:px-40">
        <h1 className="text-4xl font-bold py-3">FAQs</h1>
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
