export default function Testimonial({ testimonial, npo }) {
  return (
    <div className="flex block sm:pt-8 pb-24 lg:pb-24 lg:w-1/2">
      <div className="pt-12 sm:pt-0 sm:pl-24 w-[calc(100%-48px)] sm:w-3/4 min-h-60 self-center">
        <div className="relative bg-primary rounded-2xl md:min-w-[400px]">
          <p className="text-white py-7 px-8 italic">{testimonial}</p>
          <div className="-z-10 absolute left-12 sm:-bottom-14 -bottom-20 h-full w-full md:min-w-[350px] bg-sky-100 rounded-2xl">
            <p className="absolute bottom-4 left-6 font-bold p-1">- {npo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
