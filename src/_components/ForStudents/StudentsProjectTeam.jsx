export default function StudentsProjectTeam({ comp }) {
  return (
    <section className="grow flex flex-col lg:flex-row lg:items-center lg:min-h-[42rem] relative overflow-hidden lg:pb-32">
      <div className="lg:w-7/12 lg:pl-40 lg:pr-20 text-negative max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:justify-start max-large:items-start">
        <h2 className="font-semibold lg:text-2xl text-5xl text-black">
          Project Teams
        </h2>
        <p className="bg-[#9D1535] px-2 py-1 max-w-max my-3 rounded-md text-white lg:text-xs text-lg font-medium">
          APPLICATION REQUIRED
        </p>
        <p className="text-black">
          <span className="font-bold">Purpose:</span> Work directly on projects
          with non-profit organizations (NPOs)!
        </p>
        <p className="text-black">
          <span className="font-bold">Goal:</span> Help deliver requested
          software solutions to NPOs and contribute to our mission of creating
          tech for social good!
        </p>
        <p className="text-black">
          <span className="font-bold">Requirements:</span> Project teams are
          year long commitments depending on the scope of the project. We are
          looking for{" "}
          <span className="font-bold text-[#9D1535]">
            technical leads, project managers, developers, and designers
          </span>{" "}
          who can engage and collaborate within this time frame while also
          meeting deadlines punctually.
        </p>
      </div>
      <div className="lg:w-5/12 lg:pr-20 lg:pl-0 px-10 flex items-center justify-center py-8">
        <div>
          <image
            src="../../assets/vector/project_team_clipart.svg"
            alt="Clipart of three people working on a project."
          />
        </div>
      </div>
    </section>
  );
}
