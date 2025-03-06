export default function OurProjects({ comp }) {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-24 lg:py-32 gap-y-6 bg-white">
      <h1 className="text-4xl lg:text-5xl lg:text-center w-full">
        <strong>Our Projects</strong>
      </h1>
      <p className="lg:text-center text-2xl mb-4 lg:px-14">
        We collaborate with non-profit organizations and offer <br /> our
        expertise in software development, web design, <br /> and product
        management to bring ideas to life
      </p>
      <p className="text-2xl text-primary hover:underline hover:font-bold">
        <a href="projects">View all projects</a>
      </p>
      <div className="flex flex-col md:flex-row md:max-w-[1440px] md:mx-auto gap-6 md:gap-x-6 lg:gap-x-12 flex-nowrap lg:gap-y-6">
        <comp.ProjectCard
          name_organization={"Sarapis"}
          image_url={"../assets/logos/sarapis_logo.png"}
          description={
            "Sarapis is nonprofit organization advancing the free/libre/open source movement by helping NGOs, community groups and governments solve problems managing human services information."
          }
          redirect_url={"/projects/sarapis"}
          project_tag={"Data Management"}
          status={"In Progress"}
        />
        <comp.ProjectCard
          name_organization={"Asian American Dream"}
          image_url={"../assets/logos/aad_logo.png"}
          description={
            "Asian American Dream empowers underserved Asian American and Pacific Islander undergraduates through career-centric mentorship and professional development opportunities."
          }
          redirect_url={"/projects/asian-american-dream"}
          project_tag={"Volunteer Management"}
          status={"Completed"}
        />
        <comp.ProjectCard
          name_organization={"InReach"}
          image_url={"../assets/logos/inreach_logo.png"}
          description={
            "InReach provides verified services for LGBTQ+ asylum seekers, immigrants, refugees, BIPOC communities, TGNC individuals, LGBTQ+ youth, caregivers, and more."
          }
          redirect_url={"/projects/inreach"}
          project_tag={"Community Resources"}
          status={"Completed"}
        />
      </div>
    </section>
  );
}
