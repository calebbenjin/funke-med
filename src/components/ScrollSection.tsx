import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import img1 from "/public/iStock-1488889438.jpg";
import img2 from "/public/iStock-823502214.jpg";
import img3 from "/public/iStock-1300457522.jpg";
import img4 from "/public/kkkkk.png";
import img5 from "/public/iStock-1486620184.jpg";
import img6 from "/public/iStock-1446451643.jpg";

const ScrollSection = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="stick top-0 slice-bg lg:py-40 py-20">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 relative ">
            <div className="content flex items-center justify-center ">
              <h1 className=" sub-font text-white lg:text-5xl text-3xl font-bold ">
                Cohexa stands out in the landscape of healthcare technology
                providers with our emphasis on ambient clinical recording.
              </h1>
            </div>
            <div className="img lg:w-[750px] md:w-[600px] w-[400px]">
              <Image src={img1} alt="img" className="rounded-tl-[4rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="stick top-0 bg-gradient lg:py-40 py-20">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20">
            <div className="img lg:w-[750px] md:w-[600px] w-[400px] lg:ml-[-9rem] ml-[-5rem]">
              <Image src={img2} alt="img" className="rounded-tr-[4rem]" />
            </div>
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-[--primary] lg:text-5xl text-3xl font-bold">
                Based on a nationally representative survey, the average doctor
                spends 8.7 hours per week (16.6% of working hours) on clinical
                documentation.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="stick top-0 slice-bg lg:py-40 py-20">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-white lg:text-5xl text-3xl font-bold ">
                Note bloat, a growing issue in clinical documentation denotes
                reduced clinical value due to excessive documentation.
              </h1>
            </div>
            <div className="img lg:w-[750px] md:w-[600px] w-[400px]">
              <Image src={img3} alt="img" className="rounded-tl-[4rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="stick top-0 bg-gradient lg:py-40 py-20">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
            <div className="img lg:w-[750px] md:w-[600px] w-[400px] lg:ml-[-13rem] ml-[-5rem]">
              <Image src={img4} alt="img" className="rounded-tr-[4rem]" />
            </div>
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-[--primary] lg:text-5xl text-3xl font-bold ">
                Physician burnout poses a significant risk to the quality of
                healthcare, patient outcomes, and the overall well-being of the
                medical workforce.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="stick top-0 slice-bg lg:py-40 py-20">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-white lg:text-5xl text-3xl font-bold ">
                The annual societal cost of burnout, encompassing turnover and
                diminished productivity among U.S. physicians, exceeds $4
                billion.
              </h1>
            </div>
            <div className="img lg:w-[750px] md:w-[600px] w-[400px]">
              <Image src={img5} alt="img" className="rounded-tl-[4rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="stick top-0 bg-gradient py-40">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
            <div className="img lg:w-[750px] md:w-[600px] w-[400px] lg:ml-[-13rem] ml-[-5rem]">
              <Image src={img6} alt="img" className="rounded-tr-[4rem]" />
            </div>
            <div className="content flex items-center justify-center ">
              <h1 className="sub-font text-[--primary] lg:text-5xl text-3xl font-bold ">
                Research has shown that the seamless integration of ambient
                listening and AI dictation contributes to a more transparent
                healthcare process.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ScrollSection;
