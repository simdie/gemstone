"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { FadeUp } from "@/components/motion";

const testimonials = [
  {
    name: "Victoria Hamilton",
    role: "Private Collector",
    image: "/images/testimonials/victoria-hamilton.jpg",
    content:
      "The Glowgem's expertise in natural coloured gemstones is unparalleled. The 5-carat Kashmir sapphire they sourced for my collection exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Marcus Rothschild",
    role: "Investment Advisor",
    image: "/images/testimonials/marcus-rothschild.jpg",
    content:
      "For over a decade, I've relied on The Glowgem for investment-grade gemstones. Their certification and provenance documentation is impeccable.",
    rating: 5,
  },
  {
    name: "Elizabeth Crawford",
    role: "Jewellery Designer",
    image: "/images/testimonials/elizabeth-crawford.jpg",
    content:
      "As a designer, quality is everything. The Glowgem consistently provides the most exceptional stones that bring my creations to life.",
    rating: 5,
  },
  {
    name: "James Wellington",
    role: "Estate Buyer",
    image: "/images/testimonials/james-wellington.jpg",
    content:
      "Their knowledge of the gemstone market and ethical sourcing practices make them my first choice for acquiring exceptional pieces.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <FadeUp className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl">
            Trusted by <span className="gradient-text">Collectors</span>
          </h2>
        </FadeUp>

        {/* Testimonials carousel */}
        <FadeUp delay={0.2}>
          <Carousel delay={6000}>
            {testimonials.map((testimonial) => (
              <CarouselSlide
                key={testimonial.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%]"
              >
                <div className="glass rounded-3xl p-8 mx-2 h-full">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-6" />

                  {/* Content */}
                  <p className="text-lg mb-8 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
        </FadeUp>
      </div>
    </section>
  );
}
