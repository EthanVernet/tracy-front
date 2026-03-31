import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import CustomCursor from "@/components/custom-cursor";
import Protocol from "@/components/sections/protocol";
import ScanLine from "@/components/animations/scan-line";
import Testimonials from "@/components/sections/testimonials";
import Features from "@/components/sections/features";
import FinalCTA from "@/components/sections/final-cta";
import Security from "@/components/sections/security";
import Pricing from "@/components/sections/princing";
import EarlyAccessSection from "@/components/sections/users_counter";

export const revalidate = 60;

async function getUserCount(): Promise<number> {
  const res = await fetch(`${process.env.API_URL}/accounts/count`);
  if (!res.ok) throw new Error(`Failed to fetch user count: ${res.status}`);
  const data = await res.json();
  if (typeof data.count !== 'number') throw new Error('Invalid response: missing count');
  return data.count;
}

export default async function TracyPage() {
  const userCount = await getUserCount();

  return (
      <div
          className="min-h-screen bg-[#19222a] antialiased selection:bg-[#235789] selection:text-white"
          style={{ fontFamily: "'DM Sans',sans-serif", cursor: "none" }}
      >
        <CustomCursor />
        <ScanLine />
        <Navbar />

        <main>
          <Hero />
          <EarlyAccessSection userCount={userCount} />
          <Features />
          <Protocol />
          <Security />
          <Testimonials />
          <FinalCTA />
          <Pricing />
        </main>

        <Footer />
      </div>
  );
}