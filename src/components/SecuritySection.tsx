import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import secureImg from "/public/security.svg";
import secureImg1 from "/public/security2.svg";
import secureImg2 from "/public/security3.svg";
import Image from "next/image";

const SecuritySection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center mx-auto mt-10">
          <h1 className="text-3xl tracking-tight mt-4 text-zinc-900 lg:text-5xl font-extrabold md:text-4xl ">
            Safety & Technical Regulations
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mt-40 mt-10">
          <div className="card text-center">
            <div className="icon h-40 w-40 mx-auto rounded-full">
              <Image src={secureImg} alt="img-1" />
            </div>
            <div className="content p-6">
              <h2 className="my-4 text-3xl">HIPAA Compliant</h2>
              <p>
                DeepScribe AI technology is 100% HIPAA compliant and all
                employees are HIPAA certified, ensuring your practice maintains
                high levels of patient privacy.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="icon h-40 w-40 mx-auto rounded-full">
              <Image src={secureImg1} alt="img-1" />
            </div>
            <div className="content p-6">
              <h2 className="my-4 text-3xl">End to End Encryption</h2>
              <p>
                All data captured during a visit and processed by DeepScribe is
                encrypted using end-to-end AES-256 technology.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="icon h-40 w-40 mx-auto rounded-full">
              <Image src={secureImg2} alt="img-1" />
            </div>
            <div className="content p-6">
              <h2 className="my-4 text-3xl">HIPAA Compliant</h2>
              <p>
                Encrypted data is stripped of all personally identifiable
                information, helping ensure patient information can’t be
                associated with an individual.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SecuritySection;
