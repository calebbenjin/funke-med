import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import serviceImg from "/public/iStock-1495259020.jpg";
import serviceImg1 from "/public/iStock-1468192814.jpg";
import serviceImg2 from "/public/iStock-1480517288.jpg";
import Image from "next/image";

const ProductSection = () => {
  return (
    <>
      <section className=" hero-b lg:py-20 py-20">
        <MaxWidthWrapper>
          <div className="text-center mx-auto pt-10">
            <h1
              data-aos="fade-up"
              className="text-3xl tracking-tight lg:mb-10 mb-4 text-[--secondary] lg:text-5xl font-extrabold md:text-4xl ">
              COHEXA is your Virtual AI-enabled Scribe
            </h1>
          </div>
          <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-10 py-20">
            <div
              data-aos="fade-left"
              className=" grid lg:grid-cols-2 grid-cols-1 gap-6 shadow-xl border rounded-xl">
              <div className="icon rounded-full">
                <Image
                  src={serviceImg}
                  alt="img-1"
                  width="550"
                  height="400"
                  className="rounded-l-2xl"
                />
              </div>
              <div
                data-aos="fade-up"
                className="content lg:pt-6 lg:pr-10 p-8 text-left">
                <h2 className="lg:mt-8 mt-0 mb-8 text-3xl font-semibold">
                  Speech-to-Text Integration
                </h2>
                <p>
                  <strong>Real-time Dictation:</strong> Cohexa enables
                  clinicians to speak into the app, converting spoken words into
                  text in real-time. This feature enhances the speed and
                  accuracy of note-taking during patient interactions.
                </p>
                <p className="mt-4">
                  <strong>Voice Commands:</strong> Cohexa Incorporates voice
                  commands for common actions, such as creating new notes,
                  adding assessments and problems, to improve hands-free
                  usability.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="grid lg:grid-cols-2 grid-cols-1 gap-6 shadow-xl border rounded-xl">
              <div className="icon rounded-full">
                <Image
                  src={serviceImg1}
                  alt="img-1"
                  width="550"
                  height="400"
                  className=" rounded-2xl"
                />
              </div>
              <div className="content lg:pt-6 lg:pr-10 p-8 text-left">
                <h2 className="lg:mt-8 mb-8 mt-0 text-3xl font-semibold ">
                  Natural Language Processing (NLP)
                </h2>
                <p>
                  <strong>Entity Recognition:</strong>
                  Cohexa Implements NLP algorithms for entity recognition to
                  automatically identify and highlight key medical terms,
                  conditions, symptoms, and other relevant information within
                  the text.
                </p>
                <p className="mt-4">
                  <strong>Customizable Templates:</strong>
                  Cohexa allows users to create and customize templates based on
                  their specialty or specific documentation needs. This ensures
                  that notes follow a standardized structure while accommodating
                  variations in medical practices.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="grid lg:grid-cols-2 grid-cols-1 gap-6 shadow-xl border rounded-xl">
              <div className="icon rounded-full">
                <Image
                  src={serviceImg2}
                  alt="img-1"
                  width="550"
                  height="400"
                  className="rounded-2xl"
                />
              </div>
              <div className="content lg:pt-6 lg:pr-10 p-8 text-left">
                <h2 className="lg:mt-8 mb-8 mt-0 text-3xl font-semibold">
                  Machine Learning
                </h2>
                <p>
                  <strong>Predictive Typing:</strong>
                  Cohexa utilizes machine learning algorithms to predict and
                  suggest the next words or phrases as clinicians type. This can
                  significantly speed up the note-taking process by reducing
                  manual input.
                </p>
                <p className="mt-4">
                  <strong>Auto-Generate Text:</strong> Cohexa Integrates
                  generative AI to automatically generate sections of clinical
                  notes based on the information available. This can assist in
                  drafting initial summaries, treatment plans, or follow-up
                  recommendations.
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
