export default ({
  comp,
  faqs,
  testimonial,
  projectCriteria,
  projectTimeline,
  hero,
  contactUs,
  projectCriteriaTitle,
  projectTimelineTitle,
  title,
}) => (
  <html>
    <head>
      <comp.GoogleAnalytics />
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>{title}</title>
      <meta property="og:title" content="Non-Profits" />
      <meta property="og:url" content="https://sitblueprint.com/non-profits/" />
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
      <comp.ForNPOs.ProjectTimeline
        projectTimeline={projectTimeline}
        title={projectTimelineTitle}
      />
      <comp.ForNPOs.ProjectCriteria
        projectCriteria={projectCriteria}
        testimonial={testimonial}
        title={projectCriteriaTitle}
      />
      <comp.ForNPOs.ContactUs contactUs={contactUs} />
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
