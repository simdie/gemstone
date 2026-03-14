import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Collections } from "@/components/sections/collections";
import { AboutPreview } from "@/components/sections/about-preview";
import { Featured } from "@/components/sections/featured";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Collections />
      <AboutPreview />
      <Featured />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
