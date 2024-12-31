import React from "https://esm.sh/react";

export default function ProjectCriteria({ comp }) {
  return (
    <figure className="flex-col flex w-full lg:px-24 xl:px-64">
      <div className="m-24">
        <h1 className="text-4xl font-semibold pb-6 text-center">
          Our Impact
        </h1>
        <div className="justify-center flex flex-col md:flex-row grid-cols-3 gap-x-32">
            <div className="max-w-56">
                <p className="text-center"> 4 </p>
                <p className="text-center"> NONPROFIT PROJECTS </p>
            </div>
            <div className="max-w-56">
                <p className="text-center"> 5,000 </p>
                <p className="text-center"> ACCUMULATED VOLUNTEER HOURS </p>
            </div>
            <div className="max-w-56">
                <p className="text-center"> 80 </p>
                <p className="text-center"> STUDENT VOLUNTEERS </p>
            </div>
        </div>
      </div>
    </figure>
  );
}