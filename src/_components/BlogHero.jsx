import React from "https://esm.sh/react@19.0.0";

export default ({
  comp,
  image_url,
  card_header,
  tags,
  time_posted,
  description,
  redirect_url,
}) => {
  return (
    <figure className="flex-col flex w-full lg:p-5 p-8 lg:max-w-[1280px]">
      <div className="flex">
        <div className="w-2/3 pr-8">
          {/* Left Side Content */}
          <h1 className="pb-8 text-4xl text-primary font-normal">
            {" "}
            {"Stevens Blueprint Blog"}{" "}
          </h1>
          <div className="flex content-center">
            <div>
              <img
                className="size-1"
                src="../assets/vector/clock.svg.svg"
                alt="Clock"
              />
            </div>
            <div className="text-base font-normal">
              {" "}
              <p> {time_posted} </p>{" "}
            </div>
          </div>
          <div className="flex">
            <div className="text-3xl font-semibold pb-4 pt-2">
              {" "}
              {card_header}{" "}
            </div>
            <div className="flex flex-wrap grid-cols-2 gap-1 justify-center content-center">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-primary rounded-md px-3 text-sm font-semibold text-white text-center truncate"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <p className="flex-auto text-xl font-normal leading-7 text-balance overflow-hidden text-clip line-clamp-3">
            {" "}
            {description}{" "}
          </p>
          <div className="py-6">
            <comp.Button
              style={
                "block lg:px-8 px-8 lg:py-2 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl"
              }
              text={"Read More"}
              redirect_url={redirect_url}
            />
          </div>
        </div>
        <div className="w-1/3 bg-transparent content-center">
          {/* Image */}
          {image_url && (
            <div className="flex justify-center items-center w-full">
              <img
                src={image_url}
                alt={`${card_header} Image`}
                className="h-full w-full object-cover rounded-xl lg:max-w-[429px]"
              />
            </div>
          )}
        </div>
      </div>
    </figure>
  );
};
