export default ({ comp, faqs, testimonial, projectCriteria }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
      <title> For Non-Profits </title>
    </head>
    <body>
      <>
        <comp.Navbar />
        <comp.ForNPOs.Hero />
        <comp.ForNPOs.ProjectTimeline />
        <comp.ForNPOs.ProjectCriteria
          projectCriteria={projectCriteria}
          testimonial={testimonial}
        />
        <section className="flex flex-col justify-center mb-16 px-12 lg:px-40">
          <h1 className="text-4xl font-bold py-3">FAQs</h1>
          <div className="w-full flex flex-col">
            {faqs.map((faq, index) => (
              <comp.DropdownFAQ faq={faq} index={index} key={index} />
            ))}
          </div>
        </section>
        <comp.Footer />
      </>
    </body>
  </html>
);
