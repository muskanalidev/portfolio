import { Navbar } from "../components/Navbar";
import LiquidEther from "../components/LiquidEther";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { MoreAboutSection } from "../components/MoreAboutSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Liquid Ether Background — fixed, full-viewport, behind everything */}
      <LiquidEther
        mouseForce={4}
        cursorSize={240}
        isViscous={true}
        viscous={15}
        colors={['#5227FF', '#FF9FFC', '#B497CF', '#ffffff']}
        style={{ backgroundColor: '#04060c' }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content — relative + z-10 so it layers above the background */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <MoreAboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
