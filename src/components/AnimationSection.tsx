import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const AnimationSection = () => {
  return (
    <div className="relative">
      <section className="bg-zinc-800 sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <h1 className="font-bold text-white text-6xl ">Animation Section One</h1>
        </MaxWidthWrapper>
      </section>
      <section className="bg-amber-700 sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <h1 className="font-bold text-white text-6xl ">Animation Section Two</h1>
        </MaxWidthWrapper>
      </section>
      <section className="bg-amber-500 sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <h1 className="font-bold text-white text-6xl ">Animation Section Two</h1>
        </MaxWidthWrapper>
      </section>
      <section className="bg-amber-200 sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <h1 className="font-bold text-6xl ">Animation Section Two</h1>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default AnimationSection;
