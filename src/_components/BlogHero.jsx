import React from "https://esm.sh/react";

export default ({ 
    comp, 
    image_url,
    card_header,
    tags,
    time_posted,
    description,
    redirect_url,
    redirect_url_text, }) => {
    return (
      <figure className="flex-col flex w-full lg:p-5 p-8 lg:max-w-[1280px]">
        <div className="flex">
            <div className="w-2/3 pr-8">
                {/* Left Side Content */}
                <h1 className="pb-8 text-4xl text-primary font-normal"> {"Stevens Blueprint Blog"} </h1>
                <div className="flex">
                    <div>
                    <img
                        className="size-1"
                        src="../assets/vector/clock.svg.svg"
                        alt="Clock"
                    />
                    </div>
                    <div className="text-xl font-normal"> <p> {time_posted} </p> </div>
                </div>
                <div className="flex">
                    <div className="text-3xl font-semibold pb-2 pt-2"> {card_header} </div>
                    <div> {tags} </div>
                <div className="flex flex-wrap">
                            {tags.map((tag) => (
                            <span
                                key={tag}
                                className="m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="flex-auto h-20 text-xl font-normal leading-7 text-balance truncate overflow-hidden text-clip"> {description} </p>
                <comp.Button
                    style={"block lg:px-8 px-8 lg:py-2 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl"} 
                    text={"Read More"}
                    redirect_url={redirect_url}
                />
            </div>
            <div className="w-1/3 bg-transparent">
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
  }  