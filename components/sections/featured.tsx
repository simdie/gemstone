"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { FadeUp, ScaleHover } from "@/components/motion";

const featuredGems = [
  {
    name: "Burmese Ruby",
    weight: "3.24 ct",
    origin: "Myanmar",
    price: "Contact for pricing",
    image: "/assets/images/home/gc1.png",
    rating: 5,
  },
  {
    name: "Kashmir Sapphire",
    weight: "5.12 ct",
    origin: "Kashmir",
    price: "Contact for pricing",
    image: "/assets/images/home/gc2.png",
    rating: 5,
  },
  {
    name: "Colombian Emerald",
    weight: "4.87 ct",
    origin: "Colombia",
    price: "Contact for pricing",
    image: "/assets/images/home/gc3.png",
    rating: 5,
  },
  {
    name: "Persian Turquoise",
    weight: "8.45 ct",
    origin: "Iran",
    price: "Contact for pricing",
    image: "/assets/images/home/gc4.png",
    rating: 5,
  },
  {
    name: "Imperial Topaz",
    weight: "6.32 ct",
    origin: "Brazil",
    price: "Contact for pricing",
    image: "/assets/images/home/gc5.png",
    rating: 5,
  },
  {
    name: "Red Spinel",
    weight: "2.89 ct",
    origin: "Tanzania",
    price: "Contact for pricing",
    image: "/assets/images/home/gc6.png",
    rating: 5,
  },
];

export function Featured() {
  return (
    <section className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Featured Pieces
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">
              Exceptional <span className="gradient-text">Specimens</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all products
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </FadeUp>

        {/* Carousel */}
        <FadeUp delay={0.2}>
          <Carousel className="overflow-visible" delay={5000}>
            {featuredGems.map((gem, index) => (
              <CarouselSlide
                key={gem.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <ScaleHover>
                  <Link href="/products" className="block group">
                    <div className="glass rounded-3xl overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={gem.image}
                          alt={gem.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                        {/* Rating */}
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[...Array(gem.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-serif text-xl group-hover:text-primary transition-colors">
                              {gem.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {gem.origin}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-primary">
                            {gem.weight}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {gem.price}
                          </span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="text-primary"
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScaleHover>
              </CarouselSlide>
            ))}
          </Carousel>
        </FadeUp>
      </div>
    </section>
  );
}
