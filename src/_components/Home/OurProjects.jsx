import { ProjectStatus } from "../../types/constants.ts";

export default function OurProjects({ comp, ourProjects }) {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 lg:py-24 gap-y-6 bg-white">
      <h1 className="text-4xl lg:text-5xl lg:text-center w-full">
        <strong>{ourProjects.title}</strong>
      </h1>
      <p className="lg:text-center text-2xl mb-4 lg:px-14">
        {ourProjects.description}
      </p>
      <div className="flex flex-col md:flex-row md:max-w-[1440px] md:mx-auto gap-6 md:gap-x-6 lg:gap-x-12 flex-nowrap lg:gap-y-6">
        {ourProjects.projects.map((project, index) => (
          <comp.ProjectCard
            key={index}
            name_organization={project.name_organization}
            image_url={project.image_url}
            description={project.description}
            redirect_url={project.redirect_url}
            project_tag={project.project_tag}
            status={ProjectStatus[project.status]}
          />
        ))}
      </div>
      <p className="text-2xl text-primary hover:underline hover:font-bold">
        <a href={ourProjects.viewAllLink}>{ourProjects.viewAllText}</a>
      </p>
    </section>
  );
}
