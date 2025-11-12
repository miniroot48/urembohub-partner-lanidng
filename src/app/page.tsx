import CTASection from "@/components/page_sections/home/CTA_section";
import Footer from "@/components/page_sections/home/footer";
import HeroSection from "@/components/page_sections/home/hero_section";
import LiveShoppingFeatures from "@/components/page_sections/home/live_shopping_features";
import PaternWithUs from "@/components/page_sections/home/patern_with_us";
import Solutions from "@/components/page_sections/home/solutions";
import TopHeader from "@/components/page_sections/top_header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <HeroSection />
      <PaternWithUs />
      <Solutions />
      <LiveShoppingFeatures />
      <CTASection />
      <Footer />
    </div>
  );
}
