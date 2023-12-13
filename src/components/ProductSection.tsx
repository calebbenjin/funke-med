import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import waveImg from "/public/wave.png";
import Image from "next/image";

const ProductSection = () => {
  return (
    <>
      <div className="svg-container">
        <div className="relative lg:h-60 h-20 mb-[-1rem] ">
          <Image
            src={waveImg}
            alt="waveImg"
            fill
            priority
            className="absolute"
          />
        </div>
      </div>

      <section className=" bg-zinc-900">
        <MaxWidthWrapper>
          <div className="text-center mx-auto pt-10">
            <h1 className="text-3xl tracking-tight text-orange-500 lg:text-5xl md:text-4xl ">
              What our product does
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-20">
            <div className="card-one-bg h-[600px] p-6 w-full border-8 border-white flex items-end justify-start ">
              <div>
                <h1 className="text-2xl my-6 text-orange-500 uppercase">
                  Clinicians
                </h1>
                <p className="text-white">
                  ‘Cohexa utilizes voice recognition technology, smart sensors,
                  and natural language processing to seamlessly integrate spoken
                </p>
              </div>
            </div>
            <div className="card-two-bg h-[600px] p-6 w-full border-8 border-white flex items-end justify-start ">
              <div>
                <h1 className="text-2xl my-6 uppercase text-orange-500">
                  Enterprise
                </h1>
                <p className="text-white">
                  ‘Cohexa utilizes voice recognition technology, smart sensors,
                  and natural language processing to seamlessly integrate spoken
                </p>
              </div>
            </div>
            <div className="card-three-bg h-[600px] p-6 w-full border-8 border-white flex items-end justify-start ">
              <div>
                <h1 className="text-2xl my-6 text-orange-500">Patients</h1>
                <p className="text-white">
                  ‘Cohexa utilizes voice recognition technology, smart sensors,
                  and natural language processing to seamlessly integrate spoken
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default ProductSection;
