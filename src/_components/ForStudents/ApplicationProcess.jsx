import React from "https://esm.sh/react";

export default function ApplicationProcess({ comp }) {
  return (
    <section className="flex flex-col items-center px-12 pb-12 max-lg:px-12 max-md:w-full max-md:px-4">
      <h1 className="text-4xl text-center">
        <strong>Application Process</strong>
      </h1>
      <div className="grid grid-cols-[1fr_2px_1fr] grid-rows-[auto] h-auto grid-flow-row pt-12 mt-2">
        <div className="h-[149px] w-[2px]"></div>
        <div className="w-full relative h-full bg-black">
          <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[10px] h-[10px] bg-black rounded-full"></div>
        </div>
        <div>{/*Empty div that exists for spacing reasons*/}</div>
        <div className="flex h-[auto] justify-center mr-14 relative top-[-50%] items-center">
          <div className="w-80 self-stretch p-8 rounded-l-lg border border-maroon">
            <h2 className="font-bold text-2xl text-maroon mb-2">
              Written Application
            </h2>
            <p className="text-maroon text-xl">
              Our written application will open in a short and anonymized format
              where we can get a sense of what brings you to Blueprint!
            </p>
          </div>
          <div className="w-28 self-stretch bg-maroon rounded-r-lg border border-maroon flex justify-center items-center">
            <img
              className="object-cover"
              src={"../../assets/clip_art/MdOutlineStickyNote2.svg"}
              alt="Sticky Note"
            />
          </div>
          {/*This svg is for the triangle pointing right at the end of every left box*/}
          <div className="left-[-1px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
              className="left-[-1px]"
            >
              <path d="M23 13L0.5 0.00961876V25.9904L23 13Z" fill="#9D1535" />
            </svg>
          </div>
        </div>
        <div className="w-full relative h-full bg-black">
          <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
            <p className="text-xl text-white text-center font-bold">1</p>
          </div>
        </div>
        <div>{/*Empty div that exists for spacing reasons*/}</div>
        <div>{/*Empty div that exists for spacing reasons*/}</div>
        <div className="w-full relative h-full bg-black">
          <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
            <p className="text-xl text-white text-center font-bold">2</p>
          </div>
        </div>
        <div className="flex h-[auto] justify-center ml-14 relative top-[-50%] items-center">
          {/*This svg is for every triangle pointing left at the end of every right box*/}
          <div className="left-[1px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path d="M0 13L22.5 0.00961876V25.9904L0 13Z" fill="#9D1535" />
            </svg>
          </div>
          <div className="w-28 self-stretch bg-maroon rounded-l-lg border border-maroon flex justify-center items-center">
            <img
              className="object-cover"
              src={"../../assets/clip_art/MdMenuBook.svg"}
              alt="Menu Book"
            />
          </div>
          <div className="w-80 self-stretch p-8 rounded-r-lg border border-maroon">
            <h2 className="font-bold text-2xl text-maroon mb-2">
              Take Home Challenge
            </h2>
            <p className="text-maroon text-xl">
              Next, we will assign you a challenge that corresponds to your
              applied role and is to be completed on your own time (1-2 hours
              max).
            </p>
          </div>
        </div>
        <div className="flex h-[auto] justify-center mr-14 relative top-[-50%] items-center">
          <div className="w-80 self-stretch p-8 rounded-l-lg border border-maroon">
            <h2 className="font-bold text-2xl text-maroon mb-2">
              Blueprint Games
            </h2>
            <p className="text-maroon  text-xl">
              After the challenge, we will invite you to an interactive and
              collaborative activity where you will solve a mock NPO problem.
            </p>
          </div>
          <div className="w-28 self-stretch bg-maroon rounded-r-lg border border-maroon flex justify-center items-center">
            <img
              className="object-cover"
              src={"../../assets/clip_art/MdPeopleOutline.svg"}
              alt="Sticky Note"
            />
          </div>
          {/*This svg is for the triangle pointing right at the end of every left box*/}
          <div className="left-[-1px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
              className="left-[-1px]"
            >
              <path d="M23 13L0.5 0.00961876V25.9904L23 13Z" fill="#9D1535" />
            </svg>
          </div>
        </div>
        <div className="w-full relative h-full bg-black">
          <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
            <p className="text-xl text-white text-center font-bold">3</p>
          </div>
        </div>
        <div>{/*Empty div that exists for spacing reasons*/}</div>
        <div>{/*Empty div that exists for spacing reasons*/}</div>
        <div className="w-full relative h-full bg-black">
          <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-maroon rounded-full flex justify-center items-center">
            <p className="text-xl text-white text-center font-bold">4</p>
          </div>
          <div className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[10px] h-[10px] bg-black rounded-full"></div>
        </div>
        <div className="flex h-[auto] justify-center ml-14 relative top-[-50%] items-center">
          {/*This svg is for every triangle pointing left at the end of every right box*/}
          <div className="left-[1px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path d="M0 13L22.5 0.00961876V25.9904L0 13Z" fill="#9D1535" />
            </svg>
          </div>
          <div className="w-28 self-stretch bg-maroon rounded-l-lg border border-maroon flex justify-center items-center">
            <img
              className="object-cover"
              src={"../../assets/clip_art/BiCoffeeToGo.svg"}
              alt="Menu Book"
            />
          </div>
          <div className="w-80 self-stretch p-8 rounded-r-lg border border-maroon">
            <h2 className="font-bold text-2xl text-maroon mb-2">Coffee Chat</h2>
            <p className="text-maroon text-xl">
              Finally, we will invite you to speak with an executive board
              member to review each stage of the application process, ask
              questions, and talk!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
