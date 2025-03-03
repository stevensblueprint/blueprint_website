export default function Sponsors({ testimonial_1, testimonial_2 }) {
  // TODO: Refactor Contact Us Component
  // TODO: Refactor testimonial component
  // TODO: Implement designs
  return (
    <section className="flex flex-col items-center px-12 pb-12 max-lg:px-12 max-md:w-full max-md:px-4">
      <h1 className="text-4xl lg:text-5xl py-12">
        <strong>Support Our Mission</strong>
      </h1>
      <p className="text-lg lg:text-xl text-center lg:w-3/5">
        We use free platforms like GitHub, BookStack, and Authelia to manage our
        operations and development. Your sponsorship can help us expand into
        various Cloud Services and APIs, enhancing the development experience
        for our members and non-profit partners.
      </p>
      <div className="flex items-center justify-center py-4">
        <div>
          <h1>How the funds will be used</h1>
          <ul>
            <li>Cloud Services</li>
            <li>APIs</li>
            <li>Software Licenses</li>
            <li>Hardware</li>
          </ul>
        </div>
        <div className="flex block sm:pt-8 pb-24 lg:pb-24 lg:w-1/2">
          <div className="pt-12 sm:pt-0 sm:pl-24 w-[calc(100%-48px)] sm:w-3/4 min-h-60 self-center">
            <div className="relative bg-primary rounded-2xl md:min-w-[400px]">
              <p className="text-white py-7 px-8 italic">
                {testimonial_1.text}
              </p>
              <div className="-z-10 absolute left-12 sm:-bottom-14 -bottom-20 h-full w-full md:min-w-[350px] bg-sky-100 rounded-2xl">
                <p className="absolute bottom-4 left-6 font-bold p-1">
                  - {testimonial_1.npo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <div className="flex block sm:pt-8 pb-24 lg:pb-24 lg:w-1/2">
          <div className="pt-12 sm:pt-0 sm:pl-24 w-[calc(100%-48px)] sm:w-3/4 min-h-60 self-center">
            <div className="relative bg-primary rounded-2xl md:min-w-[400px]">
              <p className="text-white py-7 px-8 italic">
                {testimonial_2.text}
              </p>
              <div className="-z-10 absolute left-12 sm:-bottom-14 -bottom-20 h-full w-full md:min-w-[350px] bg-sky-100 rounded-2xl">
                <p className="absolute bottom-4 left-6 font-bold p-1">
                  - {testimonial_2.npo}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Sponsor Benefits</h1>
          <ul>
            <li>Featured on Website</li>
            <li>Resume Playbook</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center p-12 max-lg:px-12 max-md:w-full max-md:px-4">
        <h1 className="text-3xl lg:text-4xl text-center text-primary font-bold px-8 lg:px-0 lg:w-3/5 my-12 lg:my-16">
          Join Us in Making a Difference - Become a Sponsor Today! Contact Us at {" "}
          <a href="mailto:sit.blueprint@gmail.com" className="inline-block">
            sit.blueprint@gmail.com
            <img
              className="object-cover inline h-8 w-8 ml-2"
              src={"../../assets/clip_art/AiOutlineMail.svg"}
              alt="Email"
            />
          </a>
        </h1>
      </div>
    </section>
  );
}
