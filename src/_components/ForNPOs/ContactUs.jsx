import React from "react";

export default function ContactUs({ comp }) {
  return (
    <section>
      <div className="flex justify-center pt-12 md:pt-8 px-8 lg:px-40">
        <p className="text-3xl lg:text-4xl text-center text-primary font-bold px-8 lg:px-0 lg:w-3/5 my-12">
          Want to get in touch with us? Reach out at{" "}
          <a href="mailto:blueprint@stevens.edu" className="inline-block">
            blueprint@stevens.edu
            <img
              className="object-cover inline h-8 w-8 ml-2"
              src={"../../assets/clip_art/AiOutlineMail.svg"}
              alt="Email"
            />
          </a>
        </p>
      </div>
      <div className="flex justify-center pb-32">
        <comp.Button
          style={
            "block px-8 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl"
          }
          text={"Download our proposal template"}
          redirect_url={"../../assets/docs/NPO_Project_Proposal.pdf"}
          download={"NPO_Project_Proposal.pdf"}
        />
      </div>
    </section>
  );
}
