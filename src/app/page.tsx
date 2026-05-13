import { Hero } from "@/components/Hero";
import { AIGenerator } from "@/components/AIGenerator";
import { Benefits } from "@/components/Benefits";
import { Community } from "@/components/Community";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-neon selection:text-black">
      <Navbar />
      <Hero />
      <AIGenerator />
      <Benefits />
      <Community />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
