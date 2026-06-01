import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandBeliefSection from "@/components/BrandBeliefSection";
import ProductSection from "@/components/ProductSection";
import IngredientsSection from "@/components/IngredientsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrandBeliefSection />
        <ProductSection />
        <IngredientsSection />
      </main>
      <Footer />
    </div>
  );
}
