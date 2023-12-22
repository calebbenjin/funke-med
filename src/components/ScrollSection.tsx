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
              <h1
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos="fade-up-right"
                className="text-white text-4xl font-semibold ">
                Cohexa AI note dictation system is pivotal in meticulously
                documenting patient discussions.
              </h1>
            </div>
            <div
              className="img rounded-[4rem] relative"
              data-aos-delay="10"
              data-aos-duration="200"
              data-aos="fade-up-left">
              <Image src={img1} alt="img" className="rounded-[4rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="sticky top-0 slice-bg py-40">
        <MaxWidthWrapper className="flex items-center px-20 justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20">
            <div
              data-aos-delay="10"
              data-aos-duration="200"
              data-aos="fade-up-right"
              className="img rounded-[4rem] relative">
              <Image src={img2} alt="img" className="rounded-[4rem]" />
            </div>
            <div className="content flex items-center justify-center ">
              <h1
                data-aos="fade-up-left"
                className="text-white text-4xl font-semibold ">
                Cohexa AI note dictation system is pivotal in meticulously
                documenting patient discussions.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="sticky top-0 slice-bg py-40">
        <MaxWidthWrapper className="flex items-center px-20 justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
            <div className="content flex items-center justify-center ">
              <h1
                data-aos-delay="10"
                data-aos-duration="200"
                data-aos="fade-up-right"
                className="text-white text-4xl font-semibold ">
                Cohexa AI note dictation system is pivotal in meticulously
                documenting patient discussions.
              </h1>
            </div>
            <div className="img rounded-[4rem] relative">
              <Image
                data-aos-delay="10"
                data-aos-duration="200"
                data-aos="fade-up-right"
                src={img3}
                alt="img"
                className="rounded-[4rem]"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ScrollSection;
