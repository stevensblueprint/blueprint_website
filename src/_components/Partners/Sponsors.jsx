import React from "react";

export default function Sponsors({ comp, testimonial_1, testimonial_2 }) {
  return (
    <section className="flex flex-col items-center w-full px-8 lg:px-36 py-4 sm:py-8">
      <p className="text-lg lg:text-xl text-left sm:text-center w-full lg:w-3/5">
        We use free platforms like GitHub, BookStack, and Authelia to manage our
        operations and development. Your sponsorship can help us expand into
        various Cloud Services and APIs, enhancing the development experience
        for our members and non-profit partners.
      </p>
      <div className="flex flex-col w-full pt-8">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:w-1/2">
            <comp.Testimonial
              testimonial={testimonial_1.text}
              npo={testimonial_1.npo}
              padding="right"
            />
          </div>
          <div className="flex flex-col lg:w-1/2 lg:pl-12 mt-8">
            <h1 className="text-xl sm:text-3xl font-bold">Sponsor Benefits</h1>
            <div className="flex flex-col">
              <comp.Partners.ListItem
                item="Recognition on our website and project repositories"
                iconPath={""}
              />
              <comp.Partners.ListItem item="Access to our student developers for recruitment" />
              <comp.Partners.ListItem item="Brand visibility at our events and in our community" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col lg:w-1/2 mt-8 order-2 lg:order-1">
            <h1 className="text-xl sm:text-3xl font-bold">
              How We'll Use Donations
            </h1>
            <div className="flex flex-col">
              <comp.Partners.ListItem
                item="Cloud infrastructure and hosting services for development
                environments"
                iconPath={""}
              />
              <comp.Partners.ListItem item="Premium development tools and APIs to enhance our capabilities" />
              <comp.Partners.ListItem item="Educational workshops and training for our student developers" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <comp.Testimonial
              testimonial={testimonial_2.text}
              npo={testimonial_2.npo}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-12 w-full max-w-full px-4">
        <h1 className="text-3xl lg:text-4xl text-center text-primary font-bold px-8">
          Join Us in Making a Difference - Become a Sponsor Today!
        </h1>
        <a
          href="mailto:blueprint@stevens.edu"
          className="inline-block text-xl text-primary py-4 hover:text-secondary"
        >
          Contact us at blueprint@stevens.edu
          <img
            className="inline h-8 w-8 ml-2"
            src={"../../assets/clip_art/AiOutlineMail.svg"}
            alt="Email"
          />
        </a>
      </div>
    </section>
  );
}
