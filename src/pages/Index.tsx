import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import PromoSection from "@/components/PromoSection";

const Index = () => {
  return (
    <main className="min-h-screen gradient-hero">
      <Hero />
      <CategoryGrid />
      <PromoSection />
    </main>
  );
};

export default Index;
