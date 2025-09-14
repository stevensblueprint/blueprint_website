export default function ProjectCriteria({
  comp,
  projectCriteria,
  testimonial,
}) {
  return (
    <figure className="flex-col flex w-full py-8 lg:py-16 px-8 lg:px-40">
      <h1 className="text-3xl lg:text-4xl font-bold pb-6">
        {" "}
        What We're Looking For{" "}
      </h1>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side Content */}
        <div className="flex flex-col w-full lg:w-1/2">
          {projectCriteria.map((criteria, index) => (
            <div key={index}>
              <div className="flex">
                <div>
                  <img
                    className="pr-3"
                    src={`../../${criteria.iconPath}`}
                    alt={criteria.title}
                  />
                </div>
                <div className="font-semibold text-2xl lg:text-3xl text-primary">
                  <p>{criteria.title}</p>
                </div>
              </div>
              <div>
                <p className="font-normal text-xl pb-2">
                  {criteria.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Side Content */}
        <comp.Testimonial
          testimonial={testimonial.text}
          npo={testimonial.npo}
        />
      </div>
    </figure>
  );
}
