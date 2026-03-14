"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Globe, Shield, Gem, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, GradientBorder, ScaleHover } from "@/components/motion";

const gemstoneData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  history: string;
  properties: { label: string; value: string }[];
  images: string[];
  color: string;
  relatedGems: string[];
}> = {
  ruby: {
    name: "Ruby",
    tagline: "The King of Gemstones",
    description: "Ruby, the July birthstone and traditional anniversary gem, has captivated humanity for centuries. Known as the 'King of Gemstones' in ancient Sanskrit, rubies symbolize passion, protection, and prosperity. The most prized rubies display a vivid, slightly purplish red color known as 'pigeon blood' red.",
    history: "Throughout history, rubies have adorned the crowns of royalty and been worn by warriors for protection. Ancient Burmese warriors believed rubies made them invincible in battle. The finest rubies come from the Mogok Valley in Myanmar, though exceptional specimens are also found in Thailand, Sri Lanka, and Mozambique.",
    properties: [
      { label: "Hardness", value: "9 (Mohs Scale)" },
      { label: "Chemical Formula", value: "Al₂O₃" },
      { label: "Crystal System", value: "Trigonal" },
      { label: "Refractive Index", value: "1.762 - 1.770" },
      { label: "Specific Gravity", value: "3.97 - 4.05" },
      { label: "Origin", value: "Myanmar, Thailand, Sri Lanka" },
    ],
    images: [
      "/images/collections/ruby.jpg",
      "/images/featured/burma-ruby.jpg",
      "/images/collections/ruby.jpg",
    ],
    color: "from-red-500/30 to-red-900/30",
    relatedGems: ["sapphire", "spinel", "garnet"],
  },
  sapphire: {
    name: "Sapphire",
    tagline: "Royal Blue Elegance",
    description: "Sapphires are renowned for their stunning blue hues, though they come in every color except red. The most coveted sapphires display a rich, velvety blue with exceptional clarity and brilliance. Kashmir sapphires, with their legendary 'cornflower blue' color, are among the most valuable gemstones in the world.",
    history: "Sapphires have been treasured by royalty and clergy for millennia. Ancient Persians believed the earth rested on a giant sapphire that gave the sky its blue color. The British Crown Jewels feature some of the world's most famous sapphires, including the Stuart Sapphire and the St. Edward's Sapphire.",
    properties: [
      { label: "Hardness", value: "9 (Mohs Scale)" },
      { label: "Chemical Formula", value: "Al₂O₃" },
      { label: "Crystal System", value: "Trigonal" },
      { label: "Refractive Index", value: "1.762 - 1.770" },
      { label: "Specific Gravity", value: "3.95 - 4.03" },
      { label: "Origin", value: "Kashmir, Sri Lanka, Madagascar" },
    ],
    images: [
      "/images/collections/sapphire.jpg",
      "/images/featured/kashmir-sapphire.jpg",
      "/images/collections/sapphire.jpg",
    ],
    color: "from-blue-500/30 to-blue-900/30",
    relatedGems: ["ruby", "tanzanite", "spinel"],
  },
  emerald: {
    name: "Emerald",
    tagline: "Nature's Green Treasure",
    description: "Emeralds have been treasured for over 5,000 years, prized for their rich, verdant green color. The finest emeralds display a vivid, slightly bluish green with excellent transparency. Their characteristic inclusions, known as 'jardin' (French for garden), make each stone unique.",
    history: "Cleopatra was famously passionate about emeralds, and the ancient Egyptians mined them as early as 1500 BCE. Spanish conquistadors discovered vast emerald deposits in Colombia, which to this day produces the world's finest specimens. Colombian emeralds are prized for their warm, intense green color.",
    properties: [
      { label: "Hardness", value: "7.5 - 8 (Mohs Scale)" },
      { label: "Chemical Formula", value: "Be₃Al₂Si₆O₁₈" },
      { label: "Crystal System", value: "Hexagonal" },
      { label: "Refractive Index", value: "1.565 - 1.602" },
      { label: "Specific Gravity", value: "2.67 - 2.78" },
      { label: "Origin", value: "Colombia, Zambia, Brazil" },
    ],
    images: [
      "/images/collections/emerald.jpg",
      "/images/featured/colombian-emerald.jpg",
      "/images/collections/emerald.jpg",
    ],
    color: "from-emerald-500/30 to-emerald-900/30",
    relatedGems: ["peridot", "tourmaline", "tsavorite"],
  },
};

// Default data for other gemstones
const defaultGemData = {
  tagline: "Exquisite Natural Beauty",
  description: "This exceptional gemstone represents the finest quality natural specimens available. Hand-selected by our expert gemologists, each piece demonstrates remarkable color, clarity, and character.",
  history: "Throughout history, this gemstone has been treasured for its unique beauty and properties. Our collection features certified natural specimens from the world's most renowned sources.",
  properties: [
    { label: "Certification", value: "GIA / AGL Certified" },
    { label: "Treatment", value: "Natural / Untreated" },
    { label: "Quality Grade", value: "Investment Grade" },
    { label: "Availability", value: "By Appointment" },
  ],
  relatedGems: ["ruby", "sapphire", "emerald"],
};

export default function GemstoneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = gemstoneData[slug] || {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    ...defaultGemData,
    images: [`/images/collections/${slug}.jpg`, `/images/hero-gemstone.jpg`, `/images/collections/${slug}.jpg`],
    color: "from-primary/30 to-secondary/30",
  };

  const features = [
    { icon: Award, title: "GIA Certified", desc: "Authenticated by leading institutes" },
    { icon: Shield, title: "100% Natural", desc: "Untreated natural specimens" },
    { icon: Globe, title: "Ethical Sourcing", desc: "Responsibly sourced worldwide" },
    { icon: Gem, title: "Expert Selected", desc: "Hand-picked by gemologists" },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${data.color}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="relative container mx-auto px-6">
          {/* Back link */}
          <FadeUp>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <FadeUp>
                <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                  {data.tagline}
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
                  <span className="gradient-text">{data.name}</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {data.description}
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all group"
                >
                  Inquire About {data.name}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </FadeUp>
            </div>

            {/* Main image */}
            <FadeUp delay={0.3}>
              <GradientBorder>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={data.images[0]}
                    alt={data.name}
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

      {/* Features */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="text-center p-6 rounded-2xl glass">
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* History & Properties */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* History */}
            <FadeUp>
              <h2 className="font-serif text-3xl mb-6">
                History & <span className="gradient-text">Significance</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {data.history}
              </p>
            </FadeUp>

            {/* Properties */}
            <FadeUp delay={0.2}>
              <h2 className="font-serif text-3xl mb-6">
                Gemological <span className="gradient-text">Properties</span>
              </h2>
              <div className="space-y-4">
                {data.properties.map((prop, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30"
                  >
                    <span className="text-muted-foreground">{prop.label}</span>
                    <span className="font-medium">{prop.value}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <h2 className="font-serif text-3xl">
              Gallery
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.images.map((img, index) => (
              <StaggerItem key={index}>
                <ScaleHover>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${data.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <h2 className="font-serif text-3xl">
              Related <span className="gradient-text">Collections</span>
            </h2>
          </FadeUp>

          <div className="flex flex-wrap justify-center gap-4">
            {data.relatedGems.map((gem) => (
              <Link
                key={gem}
                href={`/collections/${gem}`}
                className="px-6 py-3 rounded-full glass hover:bg-primary/20 transition-colors capitalize"
              >
                {gem}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
