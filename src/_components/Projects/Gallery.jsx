export default function Gallery({ comp, projects }) {
  return (
    <div className="container mx-auto px-8 py-10 mb-16">
      {/* There is currently no filtering/search functinality so keep commented */}
      {/* <section className="flex justify-center mb-8 lg:mb-20">
        <comp.FilterButtons />
      </section> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <comp.ProjectCard
              name_organization={project.name_organization}
              image_url={project.image_url}
              status={project.status}
              description={project.description}
              redirect_url={project.redirect_url}
              project_tag={project.project_tag}
              year={project.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
