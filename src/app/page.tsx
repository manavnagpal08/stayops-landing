import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DynamicBanner } from "@/components/sections/DynamicBanner";
import { Hero } from "@/components/sections/Hero";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { getCmsData, getBannerData } from "@/lib/cms";

export default function Home() {
  const cmsData = getCmsData();
  const bannerData = getBannerData();

  if (!cmsData) return null; // Fallback if data is missing

  return (
    <main className="min-h-screen bg-[#050505]">
      <DynamicBanner initialData={bannerData} />
      <Navbar />
      <Hero data={cmsData.hero} />
      <PlatformShowcase data={cmsData.platforms} />
      <Features data={cmsData.features} />
      <UseCases data={cmsData.useCases} />
      <Pricing data={cmsData.pricing} />
      <FAQ data={cmsData.faq} />
      <Contact />
      <Footer />
    </main>
  );
}
