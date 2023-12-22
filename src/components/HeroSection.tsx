"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import heroImg1 from "/public/hero-web.webp";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="lg:h-[90vh] pb-20 h-full bg-[--secondary] flex items-center justify-center relative">
      <div className="box bg-[#6d3c86] lg:h-60 lg:w-60 h-40 w-40 rounded-full absolute lg:left-[-10rem] left-[-7rem] bottom-[-3rem] "></div>
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center pt-10 sm:gap-20 gap-10">
          <div className="text-left">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Empowering Seamless Clinical Documentation",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "3em", display: "inline-block" }}
              className="text-4xl main-font tracking-tight text-[--accent] font-bold lg:text-6xl md:text-4xl"
              // repeat={Infinity}
            />
            {/* <h1 className="text-4xl main-font tracking-tight text-[--accent] font-bold lg:text-6xl md:text-4xl ">
              Empowering Seamless Clinical Documentation
            </h1> */}
            <p className="sm:mt-8 mt-4 sm:text-xl sub-font text-md mr-auto max-w-prose text-[--accent] ">
              The economic impact of burnout extends beyond the individual and
              organizational realms, affecting both turnover and productivity.
            </p>
            <Button className="bg-[--accent] text-[--secondary] mt-8 py-6 px-8">Request for a demo</Button>
          </div>
          <div className="hero-content flex items-center sm:justify-end justify-center sm:space-x-4 space-x-4">
            <Image
              src={heroImg1}
              alt="hero-image"
              width={1000}
              height={1000}
              priority
              className="h-98"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
