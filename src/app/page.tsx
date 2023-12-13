import AnimationSection from "@/components/AnimationSection";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import ProductSection from "@/components/ProductSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import SecuritySection from "@/components/SecuritySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnimationSection />
      <StatementSection />
      <ProductSection />
      <MissionSection />
      <TeamSection />
      <SecuritySection />
    </main>
  );
}
