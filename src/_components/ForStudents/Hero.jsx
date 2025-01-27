export default function Hero({ comp }) {
  return (
    <section className="flex flex-col min-h-[700px] lg:flex-row lg:items-center bg-primary text-white px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:w-1/2 lg:pr-20">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 lg:mb-16 text-left">
          Student Opportunities
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14 text-left">
          We're proud of the diverse membership here at Blueprint. Join us and
          make an impact with our opportunities in product design, project
          management, or software development!
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <comp.HeroButton
            redirect_url={"mailto:sit.blueprint@gmail.com"}
            text={"Email Us"}
          />
          <comp.HeroButton
            redirect_url={"/projects"}
            text={"See Our Projects"}
          />
        </div>
      </div>
      <div className="flex grow w-full lg:w-1/2 justify-center pb-8 md:pb-12">
        <img
          src="../../assets/events/students_hero.jpg"
          alt="A photo of student Blueprint members"
          className="rounded-[20px] w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
