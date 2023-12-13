import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image';
import funkeImg from "/public/5T9A9669copy_Original.jpeg";
import { ImQuotesLeft } from "react-icons/im";

const TeamSection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-left mx-auto mt-20">
          <p className="text-2xl text-orange-500 ">Our Leadership</p>
          <h1 className="text-3xl tracking-tight mt-4 text-zinc-900 lg:text-7xl font-extrabold md:text-4xl ">
            Meet the team behind COHEXA.
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-40">
          <div className="team-card">
            <div className="relative overflow-hidden border-[1rem] border-zinc-800 rounded-lg">
              <Image src={funkeImg} alt="funke-alabi" />
              <div className="hidden-content bg-zinc-800 text-white p-6 absolute top-0 bottom-0 left-0 ">
                <ImQuotesLeft className="text-8xl text-orange-400" />
                <p className="text-2xl">
                  I joined Cohexa to help bring human connection back to
                  healthcare and ensure we all remember the details of our care.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl mt-4 text-orange-500">
                Funke Alabi
              </h1>
              <p>CEO, Co-Founder</p>
            </div>
          </div>
          <div className="team-card">
            <div className="relative overflow-hidden border-[1rem] border-zinc-800 rounded-lg">
              <Image src={funkeImg} alt="funke-alabi" />
              <div className="hidden-content bg-zinc-800 text-white p-6 absolute top-0 bottom-0 left-0 ">
                <ImQuotesLeft className="text-8xl text-orange-400" />
                <p className="text-2xl">
                  I joined Cohexa to help bring human connection back to
                  healthcare and ensure we all remember the details of our care.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl mt-4 text-orange-500">
                Julia Chapin
              </h1>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className="team-card cursor ">
            <div className="relative overflow-hidden border-[1rem] border-zinc-800 rounded-lg">
              <Image src={funkeImg} alt="funke-alabi" />
              <div className="hidden-content bg-zinc-800 text-white p-6 absolute top-0 bottom-0 left-0 ">
                <ImQuotesLeft className="text-8xl text-orange-400" />
                <p className="text-2xl">
                  I joined Cohexa to help bring human connection back to
                  healthcare and ensure we all remember the details of our care.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl mt-4 text-orange-500">
                Zack Lipton, PhD
              </h1>
              <p>Chief Technology/Science Officer</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default TeamSection
