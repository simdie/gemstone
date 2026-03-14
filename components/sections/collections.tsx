"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";

const gemstones = [
  {
    name: "Ruby",
    description: "The king of gemstones, symbolizing passion and power",
    image: "/images/collections/ruby.jpg",
    color: "from-red-500/20 to-red-900/20",
    href: "/collections/ruby",
  },
  {
    name: "Sapphire",
    description: "Royal blue elegance with celestial brilliance",
    image: "/images/collections/sapphire.jpg",
    color: "from-blue-500/20 to-blue-900/20",
    href: "/collections/sapphire",
  },
  {
    name: "Emerald",
    description: "Nature's treasure with captivating green allure",
    image: "/images/collections/emerald.jpg",
    color: "from-emerald-500/20 to-emerald-900/20",
    href: "/collections/emerald",
  },
  {
    name: "Turquoise",
    description: "Ancient beauty with mesmerizing blue-green hues",
    image: "/images/collections/turquoise.jpg",
    color: "from-cyan-500/20 to-cyan-900/20",
    href: "/collections/turquoise",
  },
  {
    name: "Topaz",
    description: "Brilliant fire and stunning clarity",
    image: "/images/collections/topaz.jpg",
    color: "from-amber-500/20 to-amber-900/20",
    href: "/collections/topaz",
  },
  {
    name: "Carnelian",
    description: "Warm sunset hues with ancient mystique",
    image: "/images/collections/carnelian.jpg",
    color: "from-orange-500/20 to-orange-900/20",
    href: "/collections/carnelian",
  },
];

export function Collections() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <FadeUp className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Collections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Exquisite <span className="gradient-text">Gemstones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our curated selection of the world&apos;s most precious
            natural gemstones, each one hand-selected for exceptional quality.
          </p>
        </FadeUp>

        {/* Gemstone grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gemstones.map((gem) => (
            <StaggerItem key={gem.name}>
              <ScaleHover scale={1.02}>
                <Link href={gem.href} className="group block">
                  <div className="relative overflow-hidden rounded-3xl glass aspect-[4/5]">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Image */}
                    <div className="relative h-3/5 overflow-hidden">
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
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                            {gem.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {gem.description}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 45 }}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </Link>
              </ScaleHover>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all button */}
        <FadeUp className="text-center mt-16">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all group"
          >
            View All Collections
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
