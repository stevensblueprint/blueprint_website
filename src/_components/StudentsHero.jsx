export default function StudentsHero({ comp }) {
  return (
    <section className="grow flex flex-col lg:flex-row lg:items-center lg:min-h-[42rem] bg-primary relative overflow-hidden">
      <div className="lg:w-7/12 lg:pl-40 lg:pr-20 text-negative max-lg:w-full max-lg:px-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-large:items-center">
        <h1 className="lg:text-4xl text-7xl my-12 lg:px-0 px-10 tracking-wide max-lg:text-center">
          <strong>Students</strong>
        </h1>
        <p className="lg:text-xl text-4xl mb-12 lg:px-0 px-10 tracking-wide max-lg:text-center">
          We’re proud of the diverse membership here at Blueprint. Join us and
          make an impact with our opportunities in product design, project
          management, or software development!
        </p>
        <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-8 max-lg:w-full max-lg:items-center">
          <comp.Button
            style="px-8 py-4 rounded-lg bg-transparent border-2 font-semibold text-lg inline-block max-lg:px-12 max-lg:py-6 max-lg:text-4xl"
            redirect_url={"https://discord.gg/G6aTAc9nFQ"}
            text={"Join Our Discord"}
          />
          <comp.Button
            style="px-8 py-4 rounded-lg bg-transparent border-2 font-semibold text-lg inline-block max-lg:px-12 max-lg:py-6 max-lg:text-4xl"
            redirect_url={"/projects"}
            text={"See Our Projects"}
          />
        </div>
      </div>
      <div className="lg:w-1/2 lg:pr-20 lg:pl-0 px-10 flex items-center justify-center py-8">
        <div className="max-lg:p-8 lg:rounded-2xl lg:overflow-hidden">
          <image
            src="../../assets/events/students_hero.jpg"
            alt="A photo of student Blueprint members"
            className="w-full lg:h-full lg:object-cover max-lg:h-auto max-lg:object-contain max-lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
