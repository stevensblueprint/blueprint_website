import React from "react";

export default function Carousel({ array_of_images }) {
  return (
    <div className="w-full lg:max-h-[40rem] overflow-y-scroll relative">
      <div className="flex gap-6 overflow-scroll lg:px-32 px-12 py-4 max-md:px-16 max-sm:flex-col max-sm:px-4">
        <div className="absolute top-0 left-0 w-36 h-full bg-gradient-to-l from-transparent to-white max-sm:hidden"></div>

        {array_of_images.map((image, i) => {
          return (
            <div
              key={i}
              className="flex justify-center shrink-0 lg:w-[35rem] w-[55rem] h-auto max-sm:w-full"
            >
              <img className="rounded-lg" src={image} alt="carousel image" />
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 w-36 h-full bg-gradient-to-r from-transparent to-white max-sm:hidden"></div>
      {/* 
      // Control Buttons
      <span className="absolute top-1/2 left-[5.5rem] -translate-y-1/2 z-10 h-1/5 aspect-square grid place-content-center shadow-xl bg-white rounded-xl max-sm:hidden">
        Placeholder
      </span>
      <span className="absolute top-1/2 right-[7rem] -translate-y-1/2 z-10 h-1/5 aspect-square grid place-content-center shadow-xl bg-blue-500 rounded-xl max-sm:hidden">
        Placeholder
      </span>
      */}
    </div>
  );
}
