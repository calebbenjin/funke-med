import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const StatementSection = () => {
  return (
    <section className="lg:h-screen h-ful">
      <MaxWidthWrapper className="pb-40">
        <div className="text-center mx-auto mt-20">
          <h1 className="text-3xl tracking-tight text-zinc-900 lg:text-5xl md:text-4xl ">
            Problem statement
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mt-40 mt-10">
          <div className="card text-center">
            <div className="icon h-40 w-40 mx-auto bg-orange-600 rounded-full"></div>
            <div className="content p-6">
              <h2 className="font-semibold my-4">Card Title</h2>
              <p>
                Based on a nationally representative survey of 4,720 U.S.
                physicians working 20 or more hours per week in direct patient
                care, the average doctor spent 8.7 hours per week (16.6% of
                working hours) on clinical documentation
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="icon h-40 w-40 mx-auto bg-orange-600 rounded-full"></div>
            <div className="content p-6">
              <h2 className="font-semibold my-4">Card Title</h2>
              <p>
                The economic impact of burnout extends beyond the individual and
                organizational realms, affecting both turnover and productivity
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="icon h-40 w-40 mx-auto bg-orange-600 rounded-full"></div>
            <div className="content p-6">
              <h2 className="font-semibold my-4">Card Title</h2>
              <p>
                The annual societal cost of burnout, encompassing turnover and
                diminished productivity among U.S. physicians, exceeds $4
                billion
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default StatementSection;
