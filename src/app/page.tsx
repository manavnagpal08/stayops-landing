import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DynamicBanner } from "@/components/sections/DynamicBanner";
import { Hero } from "@/components/sections/Hero";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { UseCases } from "@/components/sections/UseCases";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full">
      <Navbar />
      <DynamicBanner />
      <Hero />
      <PlatformShowcase />
      <UseCases />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
