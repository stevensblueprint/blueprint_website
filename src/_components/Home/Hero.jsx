export default function Hero({ comp }) {
	const heroButtons = [
		{ text: "Work with us", url: "/non-profits" },
		{ text: "Join our team", url: "/students" },
		{ text: "Support our mission", url: "/sponsors" },
	];

	return (
		<section className="flex flex-col grow md:min-h-[600px] md:flex-row items-center justify-between bg-primary text-white py-8 px-6 md:p-0 overflow-hidden">
			<div className="hidden w-full md:flex md:items-center md:justify-start">
				<img src="../../assets/vector/gear.svg" alt="gear" className="pt-24" />
			</div>
			<div className="flex flex-col w-full lg:items-center justify-center lg:text-center">
				<h1 className="font-bold w-full text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-6 lg:mb-16">
					Tech for Social Good
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-14">
					We're a team of students from Stevens Institute of Technology that
					develop pro bono technical solutions for non-profit organizations.
				</p>
				<div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
					{heroButtons.map((button, index) => {
						return (
							<comp.HeroButton
								key={index}
								text={button.text}
								redirect_url={button.url}
							/>
						);
					})}
				</div>
			</div>
			<div className="hidden w-full md:flex md:items-center md:justify-end">
				<img
					src="../../assets/vector/gear.svg"
					alt="gear"
					className="rotate-180 md:pt-72"
				/>
			</div>
		</section>
	);
}
