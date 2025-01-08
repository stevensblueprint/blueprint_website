import React from "https://esm.sh/react";

export default function Impact() {
  return (
    <section className="flex flex-col items-center justify-center py-32 gap-y-6 bg-gray-50">
      <h1 className="lg:text-5xl text-7xl text-center lg:pb-20 sm:pb-10">
        <strong>Our Impact</strong>
      </h1>
      <div className="flex lg:flex-row sm:flex-col gap-20 items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-9xl text-secondary font-bold">4</h2>
          <span className="text-center text-3xl font-bold">
            <span className="block">NON-PROFIT</span>
            <span className="block">PROJECTS</span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-9xl text-primary font-bold">5,000</h2>
          <span className="text-center text-3xl font-bold">
            <span className="block">ACCUMULATED</span>
            <span className="block">VOLUNTEER HOURS</span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-9xl text-secondary font-bold">80</h2>
          <span className="text-center text-3xl font-bold">
            <span className="block">STUDENT</span>
            <span className="block">VOLUNTEERS</span>
          </span>
        </div>
      </div>
    </section>
  );
}
