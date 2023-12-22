import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TypeAnimation } from "react-type-animation";

const AboutSection = () => {
  return (
    <section className="bg-gradient py-40 text-center">
      <MaxWidthWrapper>
        <TypeAnimation
          sequence={[
            "Cohexa AI note dictation system is pivotal in meticulously documenting patient discussions, and ensuring the integrity of medical records. By minimizing the risk of errors, it actively safeguards patient care. This precision not only fortifies the foundation of healthcare but also enhances decision-making for professionals, empowering them with accurate information.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-[--background] lg:text-3xl text-xl leading-normal"
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutSection;
