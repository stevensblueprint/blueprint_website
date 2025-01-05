import React from "https://esm.sh/react";

export default function Hero({ comp }) {
  return (
    <section className="flex flex-col bg-primary text-white p-6 overflow-hidden">
      <h1 className="font-bold text-3xl tracking-wide mb-4 text-left">
        Tech for Social Good
      </h1>
      <p className="text-lg mb-4 text-left">
        We're a team of students from Stevens Institute of Technology that
        provides technical solutions for non-profit organizations.
      </p>
      <div className="flex space-x-2 pb-4">
        <comp.Button
          style="text-xs text-center py-1 px-3 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
          text="Work with us"
          redirect_url="/for-npos"
        />
        <comp.Button
          style="text-xs text-center py-1 px-3 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
          text="Join our team"
          redirect_url="/students"
        />
        <comp.Button
          style="text-xs text-center py-1 px-3 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white"
          text="Support our mission"
          redirect_url="/partners"
        />
      </div>
    </section>
  );
}
