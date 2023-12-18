import AnimationSection from "@/components/AnimationSection";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import ProductSection from "@/components/ProductSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import SecuritySection from "@/components/SecuritySection";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollSection />
      {/* <AnimationSection /> */}
      <StatementSection />
      {/* <ProductSection /> Remove */}
      {/* <MissionSection /> Go to about page */}
      {/* <TeamSection /> Go to about page */}
      <SecuritySection />
    </main>
  );
}
