export default function ApplicationProcessTimeline({ comp, timelineContent }) {
  return (
    <div className="hidden lg:grid grid-cols-[1fr_2px_1fr] grid-rows-[auto] h-auto grid-flow-row pt-12 mt-2">
      {/* Start of Timeline Black Line and Timeline Dot */}
      <div className="h-[149px] w-[2px]"></div>
      <div className="w-full relative h-full bg-black">
        <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[10px] h-[10px] bg-black rounded-full"></div>
      </div>
      <div>
        {/*Empty div for space to the right beginning of timeline dot */}
      </div>

      {/* Written Application Section */}
      <div className="flex h-[auto] justify-center mr-14 relative top-[-50%] items-center">
        <div className="w-80 self-stretch p-8 rounded-l-lg border border-maroon">
          <h2 className="font-bold text-2xl text-maroon mb-2">
            {timelineContent[0].title}
          </h2>
          <p className="text-maroon text-xl">
            {timelineContent[0].description}
          </p>
        </div>
        <div className="w-28 self-stretch bg-maroon rounded-r-lg border border-maroon flex justify-center items-center">
          <img
            className="object-cover"
            src={`../../${timelineContent[0].iconPath}`}
            alt="Sticky Note"
          />
        </div>
        <comp.ForStudents.Timeline.RightArrow />
      </div>
      {/* Black line with Timeline number 1 */}
      <div className="w-full relative h-full bg-black">
        <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
          <p className="text-xl text-white text-center font-bold">1</p>
        </div>
      </div>
      <div>
        {/*Empty div for space to the right of Written Application Section */}
      </div>
      <div>
        {/*Empty div for space to the left of Take Home Challenge Section */}
      </div>
      {/* Black line with Timeline number 2 */}
      <div className="w-full relative h-full bg-black">
        <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
          <p className="text-xl text-white text-center font-bold">2</p>
        </div>
      </div>
      {/* Take Home Challenge Section */}
      <div className="flex h-[auto] justify-center ml-14 relative top-[-50%] items-center">
        <comp.ForStudents.Timeline.LeftArrow />
        <div className="w-28 self-stretch bg-maroon rounded-l-lg border border-maroon flex justify-center items-center">
          <img
            className="object-cover"
            src={`../../${timelineContent[1].iconPath}`}
            alt="Menu Book"
          />
        </div>
        <div className="w-80 self-stretch p-8 rounded-r-lg border border-maroon">
          <h2 className="font-bold text-2xl text-maroon mb-2">
            {timelineContent[1].title}
          </h2>
          <p className="text-maroon text-xl">
            {timelineContent[1].description}
          </p>
        </div>
      </div>
      <div className="flex h-[auto] justify-center mr-14 relative top-[-50%] items-center">
        <div className="w-80 self-stretch p-8 rounded-l-lg border border-maroon">
          <h2 className="font-bold text-2xl text-maroon mb-2">
            {timelineContent[2].title}
          </h2>
          <p className="text-maroon  text-xl">
            {timelineContent[2].description}
          </p>
        </div>
        <div className="w-28 self-stretch bg-maroon rounded-r-lg border border-maroon flex justify-center items-center">
          <img
            className="object-cover"
            src={`../../${timelineContent[2].iconPath}`}
            alt="Sticky Note"
          />
        </div>
        {/*This svg is for the triangle pointing right at the end of every left box*/}
        <comp.ForStudents.Timeline.RightArrow />
      </div>
      {/* Black line with Timeline number 3 */}
      <div className="w-full relative h-full bg-black">
        <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
          <p className="text-xl text-white text-center font-bold">3</p>
        </div>
      </div>
      <div>
        {/*Empty div for space to the right of Blueprint Games Section */}
      </div>
      <div>{/*Empty div for space to the left of Coffee Chat Section */}</div>
      {/* Black line with Timeline number 4 */}
      <div className="w-full relative h-full bg-black">
        <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
          <p className="text-xl text-white text-center font-bold">4</p>
        </div>
        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[10px] h-[10px] bg-black rounded-full"></div>
      </div>
      {/* Coffee Chat Section */}
      <div className="flex h-[auto] justify-center ml-14 relative top-[-50%] items-center">
        <comp.ForStudents.Timeline.LeftArrow />
        <div className="w-28 self-stretch bg-maroon rounded-l-lg border border-maroon flex justify-center items-center">
          <img
            className="object-cover"
            src={`../../${timelineContent[3].iconPath}`}
            alt="Menu Book"
          />
        </div>
        <div className="w-80 self-stretch p-8 rounded-r-lg border border-maroon">
          <h2 className="font-bold text-2xl text-maroon mb-2">
            {timelineContent[3].title}
          </h2>
          <p className="text-maroon text-xl">
            {timelineContent[3].description}
          </p>
        </div>
      </div>
    </div>
  );
}
