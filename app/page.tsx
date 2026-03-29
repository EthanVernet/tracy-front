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
import UsersCounter from "@/components/sections/users_counter";

export default function TracyPage() {
  // TODO: brancher sur une vraie source de vérité
  const userCount = 42; // exemple

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
          <UsersCounter userCount={userCount} />
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