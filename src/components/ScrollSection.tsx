import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import img1 from "/public/iStock-1488889438.jpg";
import img2 from "/public/iStock-823502214.jpg";
import img3 from "/public/iStock-1300457522.jpg";

const ScrollSection = () => {
  return (
    <div className="relative">
      <section className="bg-[--background] sticky top-0">
        <MaxWidthWrapper className="h-screen flex pt-20">
          <h1 className="text-[--foreground] main-font text-4xl leading-normal ">
            Cohexa stands out in the landscape of healthcare technology
            providers with our emphasis on ambient clinical recording. Our
            system seamlessly integrates spoken interactions into electronic
            health records in real time, providing healthcare professionals with
            an unparalleled level of efficiency and accuracy in medical
            diagnostics and treatment. By reducing administrative tasks, we help
            mitigate factors contributing to physician burnout, leading to a
            more positive work environment and better patient outcomes.
          </h1>
        </MaxWidthWrapper>
      </section>
      <section className="bg-[--foreground] sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="img">
              <Image src={img1} alt="img" />
            </div>
            <div className="content">
              <h1 className="text-[--background] text-xl leading-normal ">
                Cohexa AI note dictation system is pivotal in meticulously
                documenting patient discussions, and ensuring the integrity of
                medical records. By minimizing the risk of errors, it actively
                safeguards patient care. This precision not only fortifies the
                foundation of healthcare but also enhances decision-making for
                professionals, empowering them with accurate information.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-[--foreground] sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="content">
              <h1 className="text-[--background] text-xl leading-normal ">
                Cohexa AI note dictation system is pivotal in meticulously
                documenting patient discussions, and ensuring the integrity of
                medical records. By minimizing the risk of errors, it actively
                safeguards patient care. This precision not only fortifies the
                foundation of healthcare but also enhances decision-making for
                professionals, empowering them with accurate information.
              </h1>
            </div>
            <div className="img">
              <Image src={img2} alt="img" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-[--foreground] sticky top-0">
        <MaxWidthWrapper className="h-screen flex items-center justify-center">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="img">
              <Image src={img3} alt="img" />
            </div>
            <div className="content">
              <h1 className="text-[--background] text-3xl leading-normal ">
                Cohexa AI note dictation system is pivotal in meticulously
                documenting patient discussions, and ensuring the integrity of
                medical records. By minimizing the risk of errors, it actively
                safeguards patient care. This precision not only fortifies the
                foundation of healthcare but also enhances decision-making for
                professionals, empowering them with accurate information.
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ScrollSection;
