import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import benlogoImg from "/public/bendada-logo.png";
import sunLogoImg from "/public/thesun-logo.png";

const SeenSection = () => {
  return (
    <section className="text-center pb-10 pt-20">
      <MaxWidthWrapper>
        <h1 className="text-lg text-[--accent] uppercase ">As seen on</h1>
        <div className="logos w-9/12 mx-auto flex justify-center items-center space-x-8 pt-6 ">
          <div className="logo flex items-center">
            <Image src={benlogoImg} alt="benjamindada" className="w-6" />
            <p className="lg:text-xl text-md text-white">BenjaminDada</p>
          </div>
          <div className="logo flex items-center">
            <Image
              src={sunLogoImg}
              alt="benjamindada"
              width={100}
              height={30}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SeenSection;
