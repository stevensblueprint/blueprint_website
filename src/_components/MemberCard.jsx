import React from "react";

export default function MemberCard({ name, role, image_url, linkedin }) {
	const defaultImage = "../assets/logos/logo.webp";
	return (
		<figure className="flex flex-col items-center lg:p-4 w-40 lg:w-40 mx-2 mb-8">
			<img
				className="rounded-lg mb-4 object-cover object-center lg:w-32 lg:h-32 w-40 h-40"
				src={image_url ? image_url : defaultImage}
				alt="member image"
				loading="lazy"
				sizes="(max-width: 1024px) 160px, 128px"
			/>
			<figcaption className="text-center w-full">
				<div className="font-semibold lg:text-base text-xl overflow-hidden">
					{name}
				</div>
				<div className="lg:text-base text-xl overflow-hidden">{role}</div>
			</figcaption>
			{linkedin && (
				<a href={linkedin} target="_blank" rel="noopener noreferrer">
					<img
						className="mb-4 mt-1 object-cover object-center w-8 h-8"
						src="../assets/logos/linkedin.webp"
						alt="LinkedIn Logo"
						loading="lazy"
						sizes="32px"
					/>
				</a>
			)}
		</figure>
	);
}
