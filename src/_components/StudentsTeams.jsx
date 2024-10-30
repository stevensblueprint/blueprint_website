export default function StudentsTeams({ comp }) {
  return (
    <div>
      <section>
        <h1 className="lg:text-5xl text-7xl flex flex-col items-center justify-center lg:pt-32 max-lg:py-32 gap-y-6">
          <strong>Our Teams</strong>
        </h1>
      </section>
      <comp.StudentsProjectTeam comp={comp} />
    </div>
  );
}
