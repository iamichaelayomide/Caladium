import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";

export default function PricingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="pt-32">
        <Pricing />
      </section>
      <Footer />
    </main>
  );
}
