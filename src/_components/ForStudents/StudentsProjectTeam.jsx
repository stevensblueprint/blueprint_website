export default function StudentsProjectTeam({ projectTeams }) {
  return (
    <section className="grow flex flex-col lg:flex-row lg:items-center relative overflow-hidden px-8 lg:px-40 py-8">
      <div className="text-xl lg:w-2/3">
        <h2 className="font-semibold text-3xl lg:text-4xl text-black">
          {projectTeams.title}
        </h2>
        <p className="bg-maroon px-2 py-1 max-w-max my-3 rounded-md text-white text-lg font-medium">
          {projectTeams.tag}
        </p>
        <p>
          <span className="font-bold">Purpose:</span> {projectTeams.purpose}
        </p>
        <p>
          <span className="font-bold">Goal:</span> {projectTeams.goal}
        </p>
        <p>
          <span className="font-bold">Requirements:</span>{" "}
          <span
            dangerouslySetInnerHTML={{ __html: projectTeams.requirements }}
          />
        </p>
      </div>
      <div className="flex items-center justify-center lg:w-1/3">
        <div>
          <image src={projectTeams.image.src} alt={projectTeams.image.alt} />
        </div>
      </div>
    </section>
  );
}
