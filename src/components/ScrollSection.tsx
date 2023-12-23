import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import img1 from "/public/iStock-1488889438.jpg";
import img2 from "/public/iStock-823502214.jpg";
import img3 from "/public/iStock-1300457522.jpg";

const ScrollSection = () => {
  return (
    <div className="relative">
      <section className="sticky top-0 slice-bg py-40">
        <MaxWidthWrapper className="flex items-center px-20 justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20">
            <div className="content flex items-center justify-center ">
              <h1 className=" sub-font text-white text-4xl font-semibold ">
                Based on a nationally representative survey, the average doctor
                spends 8.7 hours per week (16.6% of working hours) on clinical
                documentation.
              </h1>
            </div>
            <div className="img rounded-[4rem] relative">
              <Image src={img1} alt="img" className="rounded-[4rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="sticky top-0 slice-bg py-40">
        <MaxWidthWrapper className="flex items-center px-20 justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20">
            <div className="img rounded-[4rem] relative">
              <Image src={img2} alt="img" className="rounded-[4rem]" />
            </div>
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-white text-4xl font-semibold ">
                Our system seamlessly integrates spoken interactions into
                electronic health records in real-time, providing healthcare
                professionals with an unparalleled level of efficiency and
                accuracy in medical diagnostics and treatment.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="sticky top-0 slice-bg py-40">
        <MaxWidthWrapper className="flex items-center px-20 justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-white text-4xl font-semibold ">
                Note bloat, a growing issue in clinical documentation denotes
                reduced clinical value due to excessive documentation. It not
                only diminishes documentation quality but also burdens
                clinicians when reading, potentially introducing errors.
              </h1>
            </div>
            <div className="img rounded-[4rem] relative">
              <Image src={img3} alt="img" className="rounded-[4rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ScrollSection;
