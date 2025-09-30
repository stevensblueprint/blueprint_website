export default function Sponsors({
  comp,
  testimonial_1,
  testimonial_2,
  pricing_tiers,
}) {
  return (
    <section className="flex flex-col lg:items-center justify-center px-8 lg:gap-y-6 lg:px-36 py-4 sm:py-8">
      <p className="text-xl lg:text-2xl lg:text-center w-full lg:w-3/5">
        We use free platforms like GitHub, BookStack, and Authelia to manage our
        operations and development. Your sponsorship can help us expand into
        various Cloud Services and APIs, enhancing the development experience
        for our members and non-profit partners.
      </p>

      
      <p className="lg:text-center text-xl lg:text-2xl lg:px-14 max-w-2xl mx-auto mt-8">
        We are grateful to our sponsors who provide us with resources and support!
      </p>
      <div className="flex flex-row py-12 gap-5 mb-16 mx-auto mt-4">
        <img
          src={"../../assets/logos/notion.webp"}
          alt="notion"
          className="object-cover h-20 max-w-none"
        />
        <img
          src={"../../assets/logos/github.webp"}
          alt="github"
          className="object-cover h-20 max-w-none"
        />
        <img
          src={"../../assets/logos/perplexity.webp"}
          alt="perplexity"
          className="object-cover h-20 max-w-none"
        />
        <img
          src={"../../assets/logos/mongo_logo.png"}
          alt="mongodb"
          className="object-cover h-20 max-w-none"
        />
      </div>
      <div className="flex flex-col w-full sm:pt-8 lg:pl-24">
        <div className="flex flex-col xl:flex-row w-full">
          <comp.Testimonial
            testimonial={testimonial_1.text}
            npo={testimonial_1.npo}
            padding="right"
          />
          <div className="flex flex-col xl:w-1/2 xl:pl-24 mt-8">
            <h1 className="text-xl sm:text-3xl font-bold">Sponsor Benefits</h1>
            <div className="flex flex-col">
              <comp.Sponsors.ListItem
                item="Recognition on our website and project repositories"
                iconPath={"../../assets/vector/medal.svg"}
              />
              <comp.Sponsors.ListItem
                item="Access to our student developers for recruitment"
                iconPath={"../../assets/vector/group.svg"}
              />
              <comp.Sponsors.ListItem
                item="Brand visibility at our events and in our community"
                iconPath={"../../assets/vector/globe.svg"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full">
          <div className="flex flex-col xl:w-1/2 mt-8 order-2 xl:order-1">
            <h1 className="text-xl sm:text-3xl font-bold">
              How We'll Use Donations
            </h1>
            <div className="flex flex-col">
              <comp.Sponsors.ListItem
                item="Cloud infrastructure and hosting services for development"
                iconPath={"../../assets/vector/codepen.svg"}
              />
              <comp.Sponsors.ListItem
                item="Premium development tools to enhance our capabilities"
                iconPath={"../../assets/vector/code.svg"}
              />
              <comp.Sponsors.ListItem
                item="Educational workshops and training for our student developers"
                iconPath={"../../assets/vector/brightness-window.svg"}
              />
            </div>
          </div>
          <comp.Testimonial
            classes="order-1 xl:order-2"
            testimonial={testimonial_2.text}
            npo={testimonial_2.npo}
          />
        </div>
      </div>
      <h1 className="text-2xl lg:text-4xl text-center font-bold px-8">
        Our Sponsorship Tiers
      </h1>
      <div className="flex justify-center w-full mt-12 mb-16">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full max-w-[1154px] px-4 py-4">
          {pricing_tiers &&
            pricing_tiers.map((tier, index) => (
              <comp.Sponsors.PricingTier
                key={index}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isHighlighted={tier.isHighlighted}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center p-12 w-full max-w-full px-4">
        <h1 className="text-2xl lg:text-4xl text-center text-primary font-bold px-8">
          Join Us in Making a Difference - Become a Sponsor Today!
        </h1>
        <a
          href="mailto:blueprint@stevens.edu"
          className="inline-block text-md lg:text-xl text-primary py-4 hover:text-secondary"
        >
          Email us at blueprint@stevens.edu
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
