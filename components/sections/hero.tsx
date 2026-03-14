"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Float, TextReveal, Magnetic } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                30+ Years of Excellence
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              <TextReveal text="Expert in Natural" />
              <br />
              <span className="gradient-text">
                <TextReveal text="Coloured Gemstones" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Discover the world&apos;s finest certified natural gemstones &
              crystals. Curated with expertise from the most prestigious sources
              around the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Magnetic>
                <Link
                  href="/collections"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
                >
                  Explore Collections
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <button className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full font-medium hover:bg-secondary/50 transition-all">
                  <Play className="w-4 h-4" />
                  Watch Story
                </button>
              </Magnetic>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-12 mt-16 pt-8 border-t border-border/50"
            >
              {[
                { value: "30+", label: "Years Experience" },
                { value: "5K+", label: "Gemstones Curated" },
                { value: "100%", label: "Certified Natural" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-serif font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <Float duration={6} distance={15}>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-full blur-3xl" />

                {/* Main image */}
                <div className="relative rounded-full overflow-hidden border-2 border-primary/20 glow">
                  <Image
                    src="/assets/images/hand_bg.png"
                    alt="Premium gemstone collection"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -left-8 top-1/4 glass rounded-2xl p-4"
                >
                  <div className="text-2xl font-serif font-bold gradient-text">GIA</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4"
                >
                  <div className="text-2xl font-serif font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground">Natural</div>
                </motion.div>
              </div>
            </Float>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ["20%", "50%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
