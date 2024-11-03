import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="grow flex flex-col h-[400px] lg:flex-row lg:items-center relative overflow-hidden bg-primary text-white">
      <div className="px-20">
        <h1 className="font-bold text-5xl leading-[1.3] tracking-wide mb-8 max-lg:text-5xl max-lg:text-center max-lg:mb-8">
          Non-Profit Organizations
        </h1>
        <p className="text-[1.5rem] w-[36rem] leading-[1.3] mb-16 font-weight:400">
          We are passionate about leveraging our technical and
          <br />
          consulting skills to support your organization’s mission,
          <br />
          free of charge!
        </p>
        <div className="flex space-x-6">
          <comp.Button
            style="h-10 px-8 py-4 rounded-md border border-white justify-center items-center gap-2 text-white font-semibold text-lg inline-flex"
            text="See our Projects"
            redirect_url="../../projects" // FIXME: How can we avoid hardcoding the URL?
          />
          <comp.Button
            style="h-10 px-8 py-4 rounded-md border border-white justify-center items-center gap-2 text-white font-semibold text-lg inline-flex"
            text="Email Us"
            redirect_url="community"
          />
        </div>
      </div>
    </section>
  );
}
