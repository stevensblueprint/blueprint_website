import { ProjectStatus } from "../../types/constants.ts";

export default function OurProjects({ comp }) {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 lg:py-24 gap-y-6 bg-white">
      <h1 className="text-4xl lg:text-5xl lg:text-center w-full">
        <strong>Our Projects</strong>
      </h1>
      <p className="lg:text-center text-2xl mb-4 lg:px-14">
        We collaborate with non-profit organizations and offer our expertise in
        software development, web design, and product management to bring ideas
        to life
      </p>
      <div className="flex flex-col md:flex-row md:max-w-[1440px] md:mx-auto gap-6 md:gap-x-6 lg:gap-x-12 flex-nowrap lg:gap-y-6">
        <comp.ProjectCard
          name_organization="GenXL"
          image_url="../assets/logos/genxl_logo.png"
          description="GenXL is a nonprofit organization that empowers the next generation of leaders through mentorship and education."
          redirect_url="/projects/genxl"
          project_tag="Content Management System"
          status={ProjectStatus.IN_PROGRESS}
        />
        <comp.ProjectCard
          name_organization="Open Referral"
          image_url="../assets/logos/open_referral_logo.png"
          description="Open Referral is a nonprofit organization that aims to improve access to social services through open data standards."
          redirect_url="/projects/open-referral"
          project_tag="Data Management"
          status={ProjectStatus.IN_PROGRESS}
        />
        <comp.ProjectCard
          name_organization="NJ Appleseed"
          image_url="../assets/logos/nj_appleseed_logo.png"
          description="NJ Appleseed is a nonprofit organization that provides legal services and advocacy for low-income individuals and families in New Jersey."
          redirect_url="/projects/nj-appleseed"
          project_tag="Website"
          status={ProjectStatus.COMPLETED}
        />
      </div>
      <p className="text-2xl text-primary hover:underline hover:font-bold">
        <a href="projects">View all projects</a>
      </p>
    </section>
  );
}
