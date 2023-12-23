import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import ayoImg from "/public/ayoimg1.png";
import funkeImg from "/public/funke.png";
import amoseImg from "/public/5T9A9669copy_Original.jpeg";
import { ImQuotesLeft } from "react-icons/im";

const TeamSection = () => {
  return (
    <section id="team-section" className="teambg-gradient pt-40 pb-10">
      <MaxWidthWrapper>
        <div className="text-left mx-auto">
          <p className="text-2xl text-orange-500 ">Our Leadership</p>
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="10"
            data-aos-duration="1000"
            className="sub-font text-3xl tracking-tight mt-4 text-zinc-900 lg:text-7xl md:text-4xl ">
            Meet the team behind COHEXA.
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:pb-20 pb-20 pt-20">
          <div
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos="zoom-out-down"
            className="team-card">
            <div className="relative bg-white overflow-hidden border-4 border-zinc-800 rounded-2xl">
              <Image src={funkeImg} alt="funke-alabi" />
              <div className="hidden-content bg-[#483055] text-white p-6 absolute top-0 bottom-0 left-0 ">
                <ImQuotesLeft className="text-8xl text-orange-400" />
                <p className="text-2xl">
                  I am on a mission to empower physicians and patients.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl mt-4 text-[--secondary]">
                Funke Alabi
              </h1>
              <p className="mt-2">Founder/CEO</p>
            </div>
          </div>
          <div
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos="zoom-out-down"
            className="team-card">
            <div className="relative overflow-hidden border-4 border-zinc-800 rounded-2xl">
              <Image src={amoseImg} alt="funke-alabi" />
              <div className="hidden-content bg-[#483055] text-white p-6 absolute top-0 bottom-0 left-0 ">
                <ImQuotesLeft className="text-8xl text-orange-400" />
                <p className="text-2xl">
                  I joined Cohexa to make healthcare innovation synonymous with
                  empowerment and well-being.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl mt-4 text-[--secondary]">
                Onyeka Omose
              </h1>
              <p className="mt-2">Co-Founder & CHRO</p>
            </div>
          </div>
          <div
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos="zoom-out-down"
            className="team-card">
            <div className="relative bg-white overflow-hidden border-4 border-zinc-800 rounded-2xl">
              <div className="">
                <Image src={ayoImg} alt="funke-alabi" />
              </div>
              <div className="hidden-content bg-[#483055] text-white p-6 absolute top-0 bottom-0 left-0 ">
                <ImQuotesLeft className="text-8xl text-orange-400" />
                <p className="text-2xl">
                  As an African-built health tech tool, our &quot;why&quot;
                  reflects the type of technical work we do at Cohexa AI.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl mt-4 text-[--secondary]">
                Ayo Alfonso
              </h1>
              <p className="mt-2">Technical Advisor</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TeamSection;
