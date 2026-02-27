export default function Sponsors({
  comp,
  testimonial_1,
  testimonial_2,
  pricing_tiers,
  sponsorInfo,
}) {
  return (
    <section className="flex flex-col lg:items-center justify-center px-8 lg:gap-y-6 lg:px-36 py-4 sm:py-8">
      <p className="text-xl lg:text-2xl lg:text-center w-full lg:w-3/5">
        {sponsorInfo.supportMissionDescription}
      </p>

      <p className="lg:text-center text-xl lg:text-2xl lg:px-14 max-w-2xl mx-auto mt-8">
        {sponsorInfo.currentSponsorsTitle}
      </p>
      <div className="flex flex-row py-12 gap-5 mb-16 mx-auto mt-4">
        {sponsorInfo.logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="object-cover h-20 max-w-none"
          />
        ))}
      </div>
      <div className="flex flex-col w-full sm:pt-8 lg:pl-24">
        <div className="flex flex-col xl:flex-row w-full">
          <comp.Testimonial
            testimonial={testimonial_1.text}
            npo={testimonial_1.npo}
            padding="right"
          />
          <div className="flex flex-col xl:w-1/2 xl:pl-24 mt-8">
            <h1 className="text-xl sm:text-3xl font-bold">
              {sponsorInfo.sponsorBenefitsTitle}
            </h1>
            <div className="flex flex-col">
              {sponsorInfo.sponsorBenefitsList.map((item, idx) => (
                <comp.Sponsors.ListItem
                  key={idx}
                  item={item.item}
                  iconPath={item.iconPath}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full">
          <div className="flex flex-col xl:w-1/2 mt-8 order-2 xl:order-1">
            <h1 className="text-xl sm:text-3xl font-bold">
              {sponsorInfo.howUseDonationsTitle}
            </h1>
            <div className="flex flex-col">
              {sponsorInfo.howUseDonationsList.map((item, idx) => (
                <comp.Sponsors.ListItem
                  key={idx}
                  item={item.item}
                  iconPath={item.iconPath}
                />
              ))}
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
        {sponsorInfo.pricingTiersTitle}
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
          {sponsorInfo.joinUsTitle}
        </h1>
        <a
          href={sponsorInfo.joinUsEmailLink}
          className="inline-block text-md lg:text-xl text-primary py-4 hover:text-secondary"
        >
          {sponsorInfo.joinUsEmailText}
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
