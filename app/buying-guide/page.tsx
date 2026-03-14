"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Gem, 
  Search, 
  Shield, 
  Award, 
  Palette, 
  Sparkles, 
  Scale,
  Eye,
  FileCheck,
  Heart,
  CheckCircle2
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, GradientBorder } from "@/components/motion";
import { useAppointmentModal } from "@/components/appointment-modal";

const fourCs = [
  {
    icon: Palette,
    title: "Colour",
    description: "The most important factor in coloured gemstones. We evaluate hue, tone, and saturation to ensure exceptional colour quality.",
    details: [
      "Hue: The dominant colour (e.g., red, blue, green)",
      "Tone: Lightness or darkness of the colour",
      "Saturation: Intensity and purity of the colour",
      "Distribution: Evenness of colour throughout the stone",
    ],
  },
  {
    icon: Eye,
    title: "Clarity",
    description: "Natural gemstones have inclusions that can affect their beauty and value. We select stones with excellent clarity for their type.",
    details: [
      "Eye-clean: No visible inclusions to the naked eye",
      "Type I, II, III classifications for different gem types",
      "Inclusion types and their impact on durability",
      "How inclusions can verify natural origin",
    ],
  },
  {
    icon: Sparkles,
    title: "Cut",
    description: "Expert cutting maximizes a gemstone's beauty by optimizing colour, brilliance, and light performance.",
    details: [
      "Proportions that maximize colour intensity",
      "Symmetry and polish quality",
      "Traditional vs. modern cutting styles",
      "How cut affects overall value",
    ],
  },
  {
    icon: Scale,
    title: "Carat Weight",
    description: "Size matters, but bigger isn't always better. The right carat weight depends on quality and intended use.",
    details: [
      "Price per carat increases with size",
      "Optimal sizes for different gem types",
      "Measurements vs. carat weight",
      "Balancing size with quality",
    ],
  },
];

const buyingSteps = [
  {
    step: "01",
    title: "Define Your Purpose",
    description: "Consider whether you're buying for personal enjoyment, investment, or a special occasion. This will guide your priorities.",
  },
  {
    step: "02",
    title: "Set Your Budget",
    description: "Establish a comfortable budget range. Quality natural gemstones are available at various price points.",
  },
  {
    step: "03",
    title: "Research and Learn",
    description: "Understand the gemstone you're interested in, including typical treatments, origins, and value factors.",
  },
  {
    step: "04",
    title: "Consult an Expert",
    description: "Work with a reputable dealer who can provide guidance, certifications, and access to quality stones.",
  },
  {
    step: "05",
    title: "Verify Certification",
    description: "Always request certificates from recognized laboratories like GIA, AGL, Gübelin, or SSEF.",
  },
  {
    step: "06",
    title: "Make Your Decision",
    description: "Choose the stone that speaks to you, balancing quality factors with personal preference and budget.",
  },
];

const certifications = [
  { name: "GIA", full: "Gemological Institute of America", description: "The world's most recognized gemological laboratory" },
  { name: "AGL", full: "American Gemological Laboratories", description: "Specialists in coloured gemstone analysis" },
  { name: "Gübelin", full: "Gübelin Gem Lab", description: "Swiss laboratory renowned for origin determination" },
  { name: "SSEF", full: "Swiss Gemmological Institute", description: "Leading research and certification laboratory" },
];

const redFlags = [
  "Prices that seem too good to be true",
  "Reluctance to provide certification",
  "Pressure to make immediate decisions",
  "Vague or inconsistent descriptions",
  "No return policy or inspection period",
  "Unwillingness to answer questions",
];

export default function BuyingGuidePage() {
  const { openModal } = useAppointmentModal();

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Expert Guidance
              </span>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Gemstone{" "}
                <span className="gradient-text">Buying Guide</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Your comprehensive guide to purchasing natural coloured gemstones 
                with confidence. Learn what to look for, what to avoid, and how 
                to make informed decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-medium hover:bg-secondary/50 transition-colors"
                >
                  Browse Collections
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <GradientBorder>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/knowledge/four-cs.jpg"
                    alt="Gemstone evaluation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </GradientBorder>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* The Four Cs */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              The Four <span className="gradient-text">C&apos;s</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the four key factors that determine a coloured 
              gemstone&apos;s quality and value.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {fourCs.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-3xl p-8 h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Buying Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Steps to <span className="gradient-text">Purchase</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to ensure a confident and informed gemstone 
              purchasing experience.
            </p>
          </FadeUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-6">
              {buyingSteps.map((item, index) => (
                <StaggerItem key={item.step}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-xl font-bold text-primary-foreground">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1 pb-6 border-b border-border/50">
                      <h3 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Trusted <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Always request certification from recognized gemological laboratories 
              to verify authenticity and quality.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-3xl p-6 text-center h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl mb-1">{cert.name}</h3>
                  <p className="text-primary text-sm mb-3">{cert.full}</p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="glass rounded-3xl p-8 md:p-12 border border-destructive/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-destructive" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl">Red Flags to Watch For</h2>
                    <p className="text-muted-foreground">Protect yourself from common pitfalls</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {redFlags.map((flag, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                      {flag}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Why Choose <span className="gradient-text">The Glowgem</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Gem,
                title: "30+ Years Experience",
                description: "Decades of expertise in sourcing and evaluating the finest natural gemstones.",
              },
              {
                icon: FileCheck,
                title: "Full Certification",
                description: "Every gemstone comes with certification from leading gemological laboratories.",
              },
              {
                icon: Heart,
                title: "Personalized Service",
                description: "One-on-one consultations to find the perfect gemstone for your needs.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Ready to Find Your{" "}
              <span className="gradient-text">Perfect Gemstone?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our expert gemologists are here to guide you through every step of 
              your gemstone journey. Schedule a consultation today.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
