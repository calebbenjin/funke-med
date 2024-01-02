import ContactSection from "@/components/ContactSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <section>
      <section className="aboutHeroBg">
        <div className="mx-auto w-full max-w-screen-xl px-6 pt-20">
          <div className="flex justify-start items-start w-full">
            <div className="text-left flex-col py-20">
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl md:text-4xl ">
                Contact Cohexa.
              </h1>
              <p className="sm:mt-8 mt-4 sm:text-lg text-md sm:w-80 w-full text-white ">
                The economic impact of burnout extends beyond the individual and
                organizational realms, affecting both turnover and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-40">
        <ContactSection />
      </div>
    </section>
  );
};

export default ContactPage;
