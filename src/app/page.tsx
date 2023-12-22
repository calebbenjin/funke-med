"use client";
import AnimationSection from "@/components/AnimationSection";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import ProductSection from "@/components/ProductSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import SecuritySection from "@/components/SecuritySection";
import ScrollSection from "@/components/ScrollSection";
import AboutSection from "@/components/AboutSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FutureSection from "@/components/FutureSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* <FutureSection /> */}
      <ScrollSection />
      {/* <AnimationSection /> */}
      {/* <StatementSection /> */}
      {/* <ProductSection /> Remove */}
      {/* <MissionSection /> Go to about page */}
      <TeamSection />
      <ContactSection />
      <SecuritySection />
    </main>
  );
}
