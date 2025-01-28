import React from "react";

export default function ContactUs({ comp }) {
  return (
    <section>
      <div className="flex justify-center pt-12 md:pt-20">
        <p className="text-center text-4xl font-semibold max-w-3xl text-primary">
          Want to get in touch with us? Reach out at
          <a href="mailto:sit.blueprint@gmail.com" className="block">
            sit.blueprint@gmail.com
            <img
              className="object-cover inline h-8 w-8 ml-2"
              src={"../../assets/clip_art/AiOutlineMail.svg"}
              alt="Email"
            />
          </a>
        </p>
      </div>
      <div className="flex justify-center pt-12">
        <comp.Button
          style={
            "block lg:px-8 px-8 lg:py-2 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl"
          }
          text={"Download our proposal template"}
          redirect_url={"../../assets/docs/NPO_Project_Proposal.pdf"}
          download={"NPO_Project_Proposal.pdf"}
        />
      </div>
    </section>
  );
}
