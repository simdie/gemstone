"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";

const allGemstones = [
  {
    name: "Ruby",
    description: "The king of gemstones, symbolizing passion and power",
    longDescription: "Known as the king of gemstones, rubies have captivated humanity for centuries with their intense red color and exceptional hardness.",
    image: "/images/collections/ruby.jpg",
    color: "from-red-500/20 to-red-900/20",
    href: "/collections/ruby",
    origin: "Myanmar, Thailand, Sri Lanka",
  },
  {
    name: "Sapphire",
    description: "Royal blue elegance with celestial brilliance",
    longDescription: "Sapphires are renowned for their stunning blue hues, though they come in every color except red. Kashmir sapphires are the most prized.",
    image: "/images/collections/sapphire.jpg",
    color: "from-blue-500/20 to-blue-900/20",
    href: "/collections/sapphire",
    origin: "Kashmir, Sri Lanka, Madagascar",
  },
  {
    name: "Emerald",
    description: "Nature's treasure with captivating green allure",
    longDescription: "Emeralds have been treasured for thousands of years, prized for their rich green color and the garden of inclusions that make each stone unique.",
    image: "/images/collections/emerald.jpg",
    color: "from-emerald-500/20 to-emerald-900/20",
    href: "/collections/emerald",
    origin: "Colombia, Zambia, Brazil",
  },
  {
    name: "Turquoise",
    description: "Ancient beauty with mesmerizing blue-green hues",
    longDescription: "One of the oldest known gemstones, turquoise has been used in jewelry and amulets for over 5,000 years.",
    image: "/images/collections/turquoise.jpg",
    color: "from-cyan-500/20 to-cyan-900/20",
    href: "/collections/turquoise",
    origin: "Iran, USA, Egypt",
  },
  {
    name: "Carnelian",
    description: "Warm sunset hues of ancient significance",
    longDescription: "Carnelian's warm, reddish-orange color has made it a favorite gemstone since ancient times, prized by Egyptian royalty.",
    image: "/images/collections/carnelian.jpg",
    color: "from-orange-500/20 to-orange-900/20",
    href: "/collections/carnelian",
    origin: "India, Brazil, Uruguay",
  },
  {
    name: "Topaz",
    description: "Brilliant fire and stunning clarity",
    longDescription: "Imperial topaz, with its golden orange to pink shades, is among the most valuable and sought-after varieties.",
    image: "/images/collections/topaz.jpg",
    color: "from-amber-500/20 to-amber-900/20",
    href: "/collections/topaz",
    origin: "Brazil, Russia, Pakistan",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeUp>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Collections
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Coloured <span className="gradient-text">Gemstones</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our curated selection of the world&apos;s most precious natural
              gemstones, each one hand-selected for exceptional quality and beauty.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Gemstones grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGemstones.map((gem) => (
              <StaggerItem key={gem.name}>
                <ScaleHover scale={1.02}>
                  <Link href={gem.href} className="group block">
                    <div className="relative overflow-hidden rounded-3xl glass aspect-[3/4]">
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Image */}
                      <div className="relative h-1/2 overflow-hidden">
                        <Image
                          src={gem.image}
                          alt={gem.name}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 inset-x-0 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                              {gem.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {gem.origin}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                          >
                            <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                          </motion.div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {gem.longDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
}
