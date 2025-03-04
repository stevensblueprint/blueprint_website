export default function Sponsors({ comp, testimonial_1, testimonial_2 }) {
  // TODO: Implement designs
  return (
    <section className="grow flex flex-col items-center relative overflow-hidden px-8 lg:px-40 py-8">
      <p className="text-lg lg:text-xl text-center lg:w-3/5">
        We use free platforms like GitHub, BookStack, and Authelia to manage our
        operations and development. Your sponsorship can help us expand into
        various Cloud Services and APIs, enhancing the development experience
        for our members and non-profit partners.
      </p>
      <div className="flex items-center justify-center py-4">
        <comp.Testimonial
          testimonial={testimonial_1.text}
          npo={testimonial_1.npo}
        />
        <div>
          <h1>Sponsor Benefits</h1>
          <ul>
            <li>Cloud Services</li>
            <li>APIs</li>
            <li>Software Licenses</li>
            <li>Hardware</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <div>
          <h1>How We'll Use Funds</h1>
          <ul>
            <li>Featured on Website</li>
            <li>Resume Playbook</li>
          </ul>
        </div>
        <div className="flex block sm:pt-8 pb-24 lg:pb-24 lg:w-1/2">
          <comp.Testimonial
            testimonial={testimonial_2.text}
            npo={testimonial_2.npo}
          />
        </div>
      </div>
      <div className="flex flex-col items-center p-12 max-lg:px-12 max-md:w-full max-md:px-4">
        <h1 className="text-3xl lg:text-4xl text-center text-primary font-bold px-8">
          Join Us in Making a Difference - Become a Sponsor Today!
        </h1>
        <a
          href="mailto:blueprint@stevens.edu"
          className="inline-block text-xl text-primary py-4 hover:text-secondary"
        >
          Contact us at blueprint@stevens.edu
          <img
            className="object-cover inline h-8 w-8 ml-2"
            src={"../../assets/clip_art/AiOutlineMail.svg"}
            alt="Email"
          />
        </a>
      </div>
    </section>
  );
}
