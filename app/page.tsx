import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PartnersSection from "@/components/partners-section";
import TeamSection from "@/components/team-section";
import CommunitySection from "@/components/community-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background Gradient and Pattern */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900"></div>
        <div
          className="absolute inset-0 bg-[url('/bad.png')] bg-repeat opacity-20"
          style={{ backgroundSize: "500px 500px", mixBlendMode: "overlay" }}
        ></div>
      </div>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <TeamSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
