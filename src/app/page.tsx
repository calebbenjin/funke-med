"use client";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import SecuritySection from "@/components/SecuritySection";
import ScrollSection from "@/components/ScrollSection";
import AboutSection from "@/components/AboutSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import FutureSection from "@/components/FutureSection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ScrollSection />
      <ProductSection />
      <TeamSection />
      <FutureSection />
      {/* <ContactSection /> */}
      <SecuritySection />
    </main>
  );
}
