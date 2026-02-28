export default function MemberCard({ name, role, image_url, linkedin }) {
  const defaultImage = "/assets/logos/logo.webp";
  return (
    <figure className="flex flex-col items-center lg:p-4 w-auto mx-2 mb-8">
      <div className="relative w-48 h-[320px] lg:w-[250px] lg:h-[320px]">
        <img
          className="rounded-lg object-cover object-center w-full h-full"
          src={image_url ? image_url : defaultImage}
          alt={`${name} image`}
        />
        <div className="absolute bottom-2 left-2 right-2 flex items-center bg-white rounded-[40px] px-4 py-2 shadow-md">
          <figcaption className="flex flex-col flex-1 min-w-0 pr-2">
            <div className="text-primary font-semibold text-[18px] leading-tight truncate">
              {name}
            </div>
            <div className="text-gray-600 text-[15px] leading-tight truncate">
              {role}
            </div>
          </figcaption>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 h-8 w-8 ml-2 flex items-center justify-center"
            >
              <img
                className="object-contain w-full h-full"
                src="/assets/logos/linkedin.svg"
                alt="LinkedIn Logo"
              />
            </a>
          )}
        </div>
      </div>
    </figure>
  );
}
