export default function ApplicationProcessTimelineMobile({
  comp,
  timelineContent,
}) {
  return (
    <div className="grid lg:hidden grid-rows-[auto] h-auto grid-flow-row pt-12 mt-2">
      {/* Content column */}
      <div className="flex flex-col gap-12">
        {timelineContent.map((content, index) => (
          <div
            className="flex h-[auto] items-center"
            key={`timeline-content-${index}`}
          >
            <div className="min-w-20 self-stretch bg-maroon rounded-l-lg border border-maroon flex justify-center items-center">
              <img
                className="object-cover"
                src={`../../${content.iconPath}`}
                alt={content.title}
              />
            </div>
            <div className="self-stretch p-6 rounded-r-lg border border-maroon">
              <h2 className="font-bold text-2xl text-maroon mb-2">
                {index + 1}. {content.title}
              </h2>
              <p className="text-maroon text-xl">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
