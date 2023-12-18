import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import heroImg from "/public/step1Img.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:h-[90vh] pb-20 h-full bg-white flex items-center justify-center relative">
      <div className="box bg-[--primary] lg:h-60 lg:w-60 h-40 w-40 rounded-full absolute lg:left-[-10rem] left-[-7rem] bottom-[-3rem] "></div>
      <MaxWidthWrapper>
        <div className="flex items-center lg:flex-row md:flex-col flex-col pt-10 sm:gap-20 gap-10">
          <div className=" text-left flex flex-col">
            <h1 className="text-4xl main-font tracking-tight text-[--primary] lg:text-5xl md:text-4xl ">
              Empowering Seamless Clinical Documentation
            </h1>
            <p className="sm:mt-8 mt-4 sm:text-xl sub-font text-md mr-auto max-w-prose text-muted-foreground">
              The economic impact of burnout extends beyond the individual and
              organizational realms, affecting both turnover and productivity.
            </p>
          </div>
          <div className="hero-content flex items-center sm:justify-end justify-center sm:space-x-4 space-x-4">
            <Image
              src={heroImg}
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
