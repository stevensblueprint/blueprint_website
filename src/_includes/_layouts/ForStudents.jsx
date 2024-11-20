export default ({
  comp, faqs,
  internal_teams_img = "../../assets/clip_art/internal_teams.svg",
}) => (
  <html>
    <head>
      <comp.OpenGraphCommon />
      <link rel="stylesheet" href="/styles.css" />
      <title>Students</title>
      <meta property="og:title" content="Students" />
      <meta
        property="og:url"
        content="https://sitblueprint.com/community/students/"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <comp.Navbar />
      <comp.StudentsHero comp={comp} />
      <section>
        <h1 className="font-bold lg:text-5xl text-7xl flex flex-col items-center justify-center lg:pt-32 max-lg:py-32 gap-y-6">
          Our Teams
        </h1>
      </section>
      <comp.StudentsProjectTeam comp={comp} /> 
      {/* Application Process Section */}
      <section className="flex flex-col items-center p-12 max-lg:px-12 max-md:w-full max-md:px-4">
          <h1 className="text-4xl text-center">
            <strong>Application Process</strong>
          </h1>
          <div className="grid grid-cols-[1fr_2px_1fr] grid-rows-[auto] h-auto grid-flow-row pt-12 mt-2">
            <div className="h-[149px] w-[2px]"></div>
            <div className="w-full relative h-full bg-black">
              <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[10px] h-[10px] bg-black rounded-full"></div>
            </div>
            <div>{/*Empty Div*/}</div>
            <div className="flex h-[auto] justify-center mr-14 relative top-[-50%] items-center">
              <div className="w-80 self-stretch p-8 rounded-l-lg border border-[#9D1535]">
                <h2 className="font-bold text-xl text-[#9D1535]">
                  Written Application
                </h2>
                <p className="text-[#9D1535]">
                  Our written application will open in a short and anonymized
                  format where we can get a sense of what brings you to
                  Blueprint!
                </p>
              </div>
              <div className="w-28 self-stretch bg-[#9D1535] rounded-r-lg border border-[#9D1535] flex justify-center items-center">
                <img
                  className="object-cover"
                  src={"../../assets/clip_art/MdOutlineStickyNote2.svg"}
                  alt="Sticky Note"
                />
              </div>
              <div className="left-[-1px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  className="left-[-1px]"
                >
                  <path
                    d="M23 13L0.5 0.00961876V25.9904L23 13Z"
                    fill="#9D1535"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full relative h-full bg-black">
              <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-[#9D1535] rounded-full flex justify-center items-center">
                <p className="text-xl text-white text-center font-bold">1</p>
              </div>
            </div>
            <div>{/*Empty Div*/}</div>
            <div>{/*Empty Div*/}</div>
            <div className="w-full relative h-full bg-black">
              <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-[#9D1535] rounded-full flex justify-center items-center">
                <p className="text-xl text-white text-center font-bold">2</p>
              </div>
            </div>
            <div className="flex h-[auto] justify-center ml-14 relative top-[-50%] items-center">
              <div className="left-[1px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                >
                  <path
                    d="M0 13L22.5 0.00961876V25.9904L0 13Z"
                    fill="#9D1535"
                  />
                </svg>
              </div>
              <div className="w-28 self-stretch bg-[#9D1535] rounded-l-lg border border-[#9D1535] flex justify-center items-center">
                <img
                  className="object-cover"
                  src={"../../assets/clip_art/MdMenuBook.svg"}
                  alt="Menu Book"
                />
              </div>
              <div className="w-80 self-stretch p-8 rounded-r-lg border border-[#9D1535]">
                <h2 className="font-bold text-xl text-[#9D1535]">
                  Take Home Challenge
                </h2>
                <p className="text-[#9D1535]">
                  Next, we will assign you a challenge that corresponds to your
                  applied role and is to be completed on your own time (1-2
                  hours max).
                </p>
              </div>
            </div>
            <div className="flex h-[auto] justify-center mr-14 relative top-[-50%] items-center">
              <div className="w-80 self-stretch p-8 rounded-l-lg border border-[#9D1535]">
                <h2 className="font-bold text-xl text-[#9D1535]">
                  Blueprint Games
                </h2>
                <p className="text-[#9D1535]">
                  After the challenge, we will invite you to an interactive and
                  collaborative activity where you will solve a mock NPO
                  problem.
                </p>
              </div>
              <div className="w-28 self-stretch bg-[#9D1535] rounded-r-lg border border-[#9D1535] flex justify-center items-center">
                <img
                  className="object-cover"
                  src={"../../assets/clip_art/MdPeopleOutline.svg"}
                  alt="Sticky Note"
                />
              </div>
              <div className="left-[-1px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  className="left-[-1px]"
                >
                  <path
                    d="M23 13L0.5 0.00961876V25.9904L23 13Z"
                    fill="#9D1535"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full relative h-full bg-black">
              <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-[#9D1535] rounded-full flex justify-center items-center">
                <p className="text-xl text-white text-center font-bold">3</p>
              </div>
            </div>
            <div>{/*Empty Div*/}</div>
            <div>{/*Empty Div*/}</div>
            <div className="w-full relative h-full bg-black">
              <div className="absolute top-[-25px] left-1/2 translate-x-[-50%] w-[50px] h-[50px] bg-[#9D1535] rounded-full flex justify-center items-center">
                <p className="text-xl text-white text-center font-bold">4</p>
              </div>
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[10px] h-[10px] bg-black rounded-full"></div>
            </div>
            <div className="flex h-[auto] justify-center ml-14 relative top-[-50%] items-center">
              <div className="left-[1px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                >
                  <path
                    d="M0 13L22.5 0.00961876V25.9904L0 13Z"
                    fill="#9D1535"
                  />
                </svg>
              </div>
              <div className="w-28 self-stretch bg-[#9D1535] rounded-l-lg border border-[#9D1535] flex justify-center items-center">
                <img
                  className="object-cover"
                  src={"../../assets/clip_art/BiCoffeeToGo.svg"}
                  alt="Menu Book"
                />
              </div>
              <div className="w-80 self-stretch p-8 rounded-r-lg border border-[#9D1535]">
                <h2 className="font-bold text-xl text-[#9D1535]">
                  Coffee Chat
                </h2>
                <p className="text-[#9D1535]">
                  Finally, we will invite you to speak with an executive board
                  member to review each stage of the application process, ask
                  questions, and talk!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*Internal Teams & Design Teams Section*/}
        <section className="flex items-start justify-center flex-wrap align-center pt-12 px-12 max-lg:px-12 max-md:w-full max-md:px-4 gap-14">
          <div>
            <img
              className="object-cover"
              src={internal_teams_img}
              alt="Internal Teams"
            />
          </div>
          <div className="flex w-7/12 flex-col gap-6">
            <h2 className="font-bold text-3xl">Internal Teams</h2>
            <span className="bg-primary text-white self-start px-2 rounded-md text-xs">
              No Application
            </span>
            <div>
              <h2 className="text-2xl mb-3.5 font-bold">Tech Team</h2>
              <p className="text-xl">
                <strong>Purpose: </strong>
                Apply your coding skills and support internal development
                projects!
              </p>
              <p className="text-xl">
                <strong>Goal: </strong>
                Help run Blueprint as an organization while also
                learning/improving programming skills!
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-3.5 font-bold">Design Team</h2>
              <p className="text-xl">
                <strong>Purpose: </strong>
                Support the design process in the tech team and project teams!
              </p>
              <p className="text-xl">
                <strong>Goal: </strong>
                Help strengthen collaboration between designers and developers
                while also learning/improving design skills!
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center p-12 max-lg:px-12 max-md:w-full max-md:px-4">
          <h1 className="text-4xl text-center text-primary font-bold w-3/5 my-20">
            Have any questions? Reach out at sit.blueprint@gmail.com
          </h1>
        </section>
      <section className="flex flex-col justify-center px-5 mb-10 max-w-7xl mx-auto">
        <h1 className="md:text-[40px] font-semibold text-5xl py-3">FAQs</h1>
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => (
            <comp.DropdownFAQ faq={faq} index={index} key={index} />
          ))}
        </div>
      </section>

      <comp.Footer />
    </body>
  </html>
);
