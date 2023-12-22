import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ContactForm } from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact-section">
      <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
        <div className="contact-bg bg-[--secondary] ">
          <div className="header text-center py-20">
            <p className="text-orange-600 mb-2">Our Contact Info</p>
            <h2 className="text-3xl font-bold tracking-tight text-[--accent] sm:text-5xl ">
              Get In Touch.
            </h2>
          </div>
        </div>
        <MaxWidthWrapper>
          <ContactForm />
        </MaxWidthWrapper>
      </section>
    </section>
  );
};

export default ContactSection;
