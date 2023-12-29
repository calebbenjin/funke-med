import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TypeAnimation } from "react-type-animation";

const FutureSection = () => {
  return (
    <section className="py-40 hero-bg flex items-center justify-center">
      <MaxWidthWrapper>
        <div data-aos="zoom-in-up" className="text-left mx-auto">
          <h1 className="text-3xl tracking-tight mt-4 text-[--accent] font-bold lg:text-8xl md:text-4xl ">
            The Future of Healthcare delivery is AI integration.
          </h1>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FutureSection;
