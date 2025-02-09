export default function Team({ comp, team }) {
  return (
    <section>
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl lg:text-5xl mb-8">
          <strong>Our Team</strong>
        </h1>
        <div className="flex flex-wrap gap-6 my-8 px-4 lg:px-24 lg:max-w-[75rem] justify-center">
          {team.map((member, index) => (
            <comp.MemberCard
              key={index}
              name={member.name}
              role={member.role}
              image_url={member.image_url}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
