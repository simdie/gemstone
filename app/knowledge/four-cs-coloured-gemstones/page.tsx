"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

export default function FourCsArticlePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6">
          <FadeUp>
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Center
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Education
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                The Four C&apos;s of <span className="gradient-text">Coloured Gemstones</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding colour, clarity, cut, and carat weight in natural gemstones - your essential guide to evaluating precious stones.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  The Glowgem Experts
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  March 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/knowledge/four-cs.jpg"
              alt="The Four C's of Coloured Gemstones"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <FadeUp>
              <p className="lead text-xl text-muted-foreground">
                While the &quot;Four C&apos;s&quot; were originally developed for diamonds, coloured gemstones require a nuanced understanding of these criteria. Unlike diamonds where cut and clarity reign supreme, coloured gemstones place colour as the paramount factor in determining value and desirability.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                1. Colour: The Most Critical Factor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In coloured gemstones, colour accounts for approximately 50-70% of a stone&apos;s value. When evaluating colour, gemologists consider three essential components:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Hue:</strong> The dominant spectral colour of the gemstone. For rubies, the most prized hue is &quot;pigeon blood red&quot; - a pure red with subtle blue undertones.</li>
                <li><strong className="text-foreground">Saturation:</strong> The intensity or vividness of the colour. Highly saturated stones with vivid colours command premium prices.</li>
                <li><strong className="text-foreground">Tone:</strong> The lightness or darkness of the colour. The ideal tone varies by gemstone type but generally falls in the medium to medium-dark range.</li>
              </ul>

              <div className="my-10 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="font-serif text-xl mb-3 text-foreground">Expert Insight</h4>
                <p className="text-muted-foreground mb-0">
                  &quot;The finest Kashmir sapphires exhibit a velvety, cornflower blue that seems to glow from within. This phenomenon, caused by microscopic inclusions, is actually what makes these stones so valuable - proving that in coloured gemstones, the rules are beautifully complex.&quot;
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                2. Clarity: A Different Standard
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unlike diamonds, where clarity is judged under 10x magnification, coloured gemstones are graded &quot;eye-clean&quot; - evaluated with the naked eye at a normal viewing distance. This is because inclusions are far more common and expected in coloured stones.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In fact, certain inclusions can add value. The &quot;silk&quot; in fine Burmese rubies and Kashmir sapphires creates a prized velvety appearance. Colombian emeralds are expected to have inclusions, lovingly termed &quot;jardin&quot; (garden), which actually help authenticate their origin.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                3. Cut: Maximising Beauty
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The cut of a coloured gemstone serves a different purpose than in diamonds. Rather than maximising brilliance through precise mathematical proportions, the cut of a coloured stone aims to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Optimise the stone&apos;s colour presentation</li>
                <li>Minimise the visibility of inclusions</li>
                <li>Maximise carat weight from the rough</li>
                <li>Create pleasing proportions and symmetry</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Common cuts for coloured gemstones include oval, cushion, and emerald cuts, which tend to showcase colour better than brilliant cuts designed for diamonds.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                4. Carat Weight: Size Matters Differently
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Carat weight measures a gemstone&apos;s mass, with one carat equalling 200 milligrams. However, density varies significantly between gemstone types. A one-carat ruby will appear smaller than a one-carat emerald due to ruby&apos;s higher density.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Price per carat increases exponentially with size for fine gemstones. A 5-carat ruby of fine quality may cost more than five times the price of a comparable 1-carat stone, as large, high-quality rubies are exceptionally rare.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-serif text-xl mb-3 text-foreground">The Glowgem Difference</h4>
                <p className="text-muted-foreground mb-0">
                  At The Glowgem, every gemstone is evaluated by our expert gemologists using these criteria, ensuring you receive detailed information about each stone&apos;s unique characteristics. We believe in complete transparency, providing certification from recognised laboratories for all significant purchases.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Beyond the Four C&apos;s
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While the Four C&apos;s provide a foundation for evaluation, coloured gemstones require consideration of additional factors:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Origin:</strong> Gemstones from certain localities command premium prices. Kashmir sapphires, Burmese rubies, and Colombian emeralds are the most coveted.</li>
                <li><strong className="text-foreground">Treatment:</strong> Natural, untreated gemstones are increasingly rare and valuable. Heat treatment is common and accepted, but other treatments may significantly impact value.</li>
                <li><strong className="text-foreground">Phenomena:</strong> Special optical effects like asterism (star effect) or colour change can dramatically increase a stone&apos;s desirability.</li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl mb-4">
              Ready to Find Your <span className="gradient-text">Perfect Gemstone?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our expert gemologists can help you understand and select the ideal stone based on your preferences and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Speak with an Expert
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
