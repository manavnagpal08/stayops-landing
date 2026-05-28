import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { UnifiedLogin } from "@/components/sections/UnifiedLogin";
import { UseCases } from "@/components/sections/UseCases";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full">
      <Navbar />
      <Hero />
      <PlatformShowcase />
      <UnifiedLogin />
      <UseCases />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
