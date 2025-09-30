export default function PricingTiers() {
  const tiers = [
    {
      name: "Monthly",
      price: "$500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      features: [
        "Mention on LinkedIn / Instagram",
        "Access to Student Resumes",
      ],
      isHighlighted: false,
    },
    {
      name: "Standard",
      price: "$1000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      features: [
        "Everything in Basic",
        "Host Workshops / Tech Talk",
        "Name / Logo on Merchandise",
      ],
      isHighlighted: false,
    },
    {
      name: "Gold",
      price: "$1500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      features: ["Everything in Standard", "Host Recruiting Events"],
      isHighlighted: true,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full max-w-[1154px] h-[518px] px-4">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={`flex flex-col p-8 rounded-lg w-full max-w-[350px] h-full ${
            tier.isHighlighted
              ? "bg-blue-600 text-white"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
          <p className="text-sm mb-6 opacity-80 leading-relaxed">
            {tier.description}
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold">
              <span className="text-2xl">$</span>
              {tier.price.slice(1)}
            </span>
          </div>
          <h4 className="text-lg font-bold mb-4">What's included?</h4>
          <ul className="space-y-3">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
