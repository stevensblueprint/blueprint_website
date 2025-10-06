export default function PricingTier({ name, price, description, features, isHighlighted }) {
  return (
    <div
      className={`flex flex-col p-8 rounded-lg w-full max-w-[350px] h-full ${
        isHighlighted
          ? "bg-primary text-white"
          : "bg-white text-black border border-gray-200"
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-sm mb-6 opacity-80 leading-relaxed">
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">
          <span className="text-2xl">$</span>
          {price}
        </span>
      </div>
      <h4 className="text-lg font-bold mb-4">What's included?</h4>
      <ul className="space-y-3">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start">
            <svg
              className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                isHighlighted ? "text-white" : "text-blue-500"
              }`}
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
  );
}

