export default function StudentsProjectTeam() {
  return (
    <section className="grow flex flex-col lg:flex-row lg:items-center relative overflow-hidden px-8 lg:px-40 py-8">
      <div className="text-xl lg:w-2/3">
        <h2 className="font-semibold text-3xl lg:text-4xl text-black">
          Project Teams
        </h2>
        <p className="bg-maroon px-2 py-1 max-w-max my-3 rounded-md text-white text-lg font-medium">
          APPLICATION REQUIRED
        </p>
        <p>
          <span className="font-bold">Purpose:</span> Work directly on projects
          with non-profit organizations (NPOs)!
        </p>
        <p>
          <span className="font-bold">Goal:</span> Help deliver requested
          software solutions to NPOs and contribute to our mission of creating
          tech for social good!
        </p>
        <p>
          <span className="font-bold">Requirements:</span> Project teams are
          year long commitments depending on the scope of the project. We are
          looking for{" "}
          <span className="font-bold text-maroon">
            technical leads, project managers, developers, and designers
          </span>{" "}
          who can engage and collaborate within this time frame while also
          meeting deadlines punctually.
        </p>
      </div>
      <div className="flex items-center justify-center lg:w-1/3">
        <div>
          <image
            src="../../assets/vector/project_team_clipart.svg"
            alt="Clipart of three people working on a project"
          />
        </div>
      </div>
    </section>
  );
}
