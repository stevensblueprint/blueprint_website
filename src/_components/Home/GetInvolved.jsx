export default function GetInvolved({ comp }) {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-10 gap-y-6 bg-white">
      <h1 className="lg:text-5xl text-4xl lg:text-center w-full">
        <strong>Get Involved</strong>
      </h1>
      <div className="flex flex-col md:flex-row md:max-w-[1440px] md:mx-auto justify-between gap-6 md:gap-x-6 lg:gap-x-12 flex-nowrap lg:gap-y-6">
        <comp.GetInvolvedCard
          title="Non-Profits"
          description="We can help you grow your organization with innovative software solutions. Learn how Blueprint can support your mission!"
          icon_url="../assets/vector/hands_blue.svg"
          redirect_url="/non-profits"
        />
        <comp.GetInvolvedCard
          title="Students"
          description="We invite you to join our Blueprint family as a student volunteer and contribute to the design, development, or management of our projects!"
          icon_url="../assets/vector/student.svg"
          redirect_url="/students"
        />
        <comp.GetInvolvedCard
          title="Sponsors"
          description="Join us as a sponsor to empower our initiatives! Your support provides invaluable experiences to our student developers and non-profit partners."
          icon_url="../assets/vector/partnership_handshake.svg"
          redirect_url="/sponsors"
        />
      </div>
    </section>
  );
}
