export default function InternalTeams({ comp, internalTeams }) {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start justify-center align-center pt-12 px-8 lg:px-40 gap-4 lg:gap-14">
        <img
          className="object-cover"
          src={internalTeams.image.src}
          alt={internalTeams.image.alt}
        />
        <div className="flex lg:w-7/12 flex-col gap-6">
          <h2 className="font-bold text-3xl lg:text-4xl">
            {internalTeams.title}
          </h2>
          <span className="bg-primary px-2 py-1 max-w-max rounded-md text-white text-lg font-medium">
            {internalTeams.tag}
          </span>
          {internalTeams.teams.map((team, index) => (
            <div key={index}>
              <h2 className="text-2xl mb-3.5 font-bold">{team.title}</h2>
              <p className="text-xl">
                <strong>Purpose: </strong>
                {team.purpose}
              </p>
              <p className="text-xl">
                <strong>Goal: </strong>
                {team.goal}
              </p>
            </div>
          ))}
        </div>
      </div>
      <comp.MailToAction text={internalTeams.mailToAction} />
    </section>
  );
}
