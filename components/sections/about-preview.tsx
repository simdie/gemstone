"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Shield, Globe, Gem } from "lucide-react";
import { FadeUp, AnimatedCounter, GradientBorder } from "@/components/motion";

const features = [
  {
    icon: Award,
    title: "GIA Certified",
    description: "All gemstones certified by leading gemological institutes",
  },
  {
    icon: Shield,
    title: "100% Natural",
    description: "Untreated, natural gemstones with full transparency",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Ethically sourced from the finest locations worldwide",
  },
  {
    icon: Gem,
    title: "Expert Curation",
    description: "Hand-selected by experienced gemologists",
  },
];

const stats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Gemstones Curated" },
  { value: 50, suffix: "+", label: "Countries Sourced" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

export function AboutPreview() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <FadeUp>
            <div className="relative">
              {/* Main image */}
              <GradientBorder className="overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/about-glen.jpg"
                    alt="Gary White Beaufort - CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </GradientBorder>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -right-8 -bottom-8 glass rounded-2xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold gradient-text">
                      <AnimatedCounter value={30} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years of Excellence
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Led by Europe&apos;s leading authority in natural coloured
                  gemstones
                </p>
              </motion.div>
            </div>
          </FadeUp>

          {/* Content side */}
          <div>
            <FadeUp>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                About The Glowgem
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                A Legacy of{" "}
                <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                The Glowgem stands as a beacon of excellence in the world of
                precious stones, offering a dazzling array of meticulously
                sourced and curated gems.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With a rich heritage steeped in the artistry of gemstones, we
                blend expertise, innovation, and ethical practices to deliver
                unparalleled quality to our discerning clientele.
              </p>
            </FadeUp>

            {/* Features grid */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <feature.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
        </div>

        {/* Stats bar */}
        <FadeUp delay={0.2}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl glass">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
