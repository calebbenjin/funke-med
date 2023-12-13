import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const MissionSection = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:h-screen h-auto relative overflow-hidden ">
      <div className="mission-bg bg-orange-400">
        <div className="box bg-zinc-100 lg:h-60 lg:w-60 h-40 w-40 rounded-full absolute lg:left-[-10rem] left-[-7rem] bottom-[-3rem] "></div>
        <MaxWidthWrapper className="flex items-center justify-center lg:h-screen h-auto lg:px-20 py-20 px-10 ">
          <div>
            <h1 className="font-extrabold lg:text-6xl text-4xl text-white ">
              Miss<span className="text-orange-500">ion</span>
            </h1>

            <p className="lg:text-2xl text-lg mt-6 text-white">
              Cohexa sees a future where ambient clinical recording
              revolutionizes how healthcare professionals capture and interpret
              patient information, unlocking new levels of efficiency and
              accuracy in medical diagnostics and treatment, thereby reducing
              physician burnout
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="vision-bg bg-gray-200 relative">
        <div className="box bg-zinc-900 lg:h-60 lg:w-60 h-28 w-28 rounded-full absolute lg:right-[-8rem] right-[-3rem] lg:top-[6rem] top-0 "></div>

        <MaxWidthWrapper className="flex items-center justify-center lg:h-screen h-auto lg:px-20 py-20 px-10 ">
          <div>
            <h1 className="font-extrabold lg:text-6xl text-4xl ">
              Vis<span className="text-orange-500">ion</span>
            </h1>

            <p className="lg:text-2xl text-lg mt-6">
              Cohexa sees a future where ambient clinical recording
              revolutionizes how healthcare professionals capture and interpret
              patient information, unlocking new levels of efficiency and
              accuracy in medical diagnostics and treatment, thereby reducing
              physician burnout
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default MissionSection;
