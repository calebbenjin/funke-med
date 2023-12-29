import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import secureImg from "/public/iStock-1401491636.jpg";
import secureImg1 from "/public/security2.svg";
import secureImg2 from "/public/security3.svg";
import Image from "next/image";

const SecuritySection = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div className="text-center mx-auto my-10">
          <h1 className="text-3xl tracking-tight mt-4 text-zinc-900 lg:text-5xl md:text-4xl ">
            Safety & Technical Regulations
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mt-40 mt-10">
          <div className="card text-center">
            <div className="icon mx-auto rounded-full">
              <Image
                src={secureImg}
                alt="img-1"
                width="250"
                height="400"
                className="mx-auto"
              />
            </div>
            <div className="content p-6">
              <h2 className="my-4 text-3xl">HIPAA Compliant</h2>
              <p>
                At Cohexa, our AI technology boasts 100% HIPAA compliance,
                incorporating multiple layers of technical and security
                measures. Data encryption removes all personally identifiable
                information, enhancing privacy and security measures.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="icon mx-auto rounded-full">
              <Image
                src={secureImg1}
                alt="img-1"
                width="150"
                height="400"
                className="mx-auto"
              />
            </div>
            <div className="content p-6">
              <h2 className="my-4 text-3xl">Data Encryption</h2>
              <p>
                Cohexa utilizes 256-bit encryption to protect the transfer of
                data between your browser and our servers.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="icon mx-auto rounded-full">
              <Image
                src={secureImg2}
                alt="img-1"
                width="150"
                height="400"
                className="mx-auto"
              />
            </div>
            <div className="content p-6">
              <h2 className="my-4 text-3xl">Secure Cloud Storage</h2>
              <p>
                Cohexa ensures the secure storage and processing of data within
                reputable, US-based data centers, meeting stringent security and
                availability standards
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SecuritySection;
