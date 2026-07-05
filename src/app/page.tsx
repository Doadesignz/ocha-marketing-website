import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { JoinWaitlistSection } from "@/components/sections/JoinWaitlistSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { WaitlistFormSection } from "@/components/sections/WaitlistFormSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <ProblemsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <JoinWaitlistSection />
        <WaitlistFormSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
