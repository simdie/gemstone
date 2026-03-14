"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

export default function GemTreatmentsArticlePage() {
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
                Understanding <span className="gradient-text">Gemstone Treatments</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Learn about common treatments and why natural, untreated gemstones are increasingly valuable in today&apos;s market.
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
                  10 min read
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
              src="/images/knowledge/gem-treatments.jpg"
              alt="Understanding Gemstone Treatments"
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
                In the world of coloured gemstones, treatments are commonplace. Understanding what treatments exist, how they affect value, and why disclosure matters is essential for any serious collector or investor.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-foreground">Important Principle</h4>
                    <p className="text-muted-foreground mb-0">
                      The issue with treatments isn&apos;t that they exist - it&apos;s when they&apos;re not disclosed. Reputable dealers always reveal any treatments, and professional certification will identify them.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Common Gemstone Treatments
              </h2>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Heat Treatment</h3>
              <p className="text-muted-foreground leading-relaxed">
                The most common treatment involves heating gemstones to high temperatures (typically 800-1800°C) to improve colour and clarity. Heat treatment has been practiced for centuries and is generally accepted in the trade when disclosed.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Sapphires:</strong> Heat can dissolve rutile silk, improving clarity, and intensify blue colour.</li>
                <li><strong className="text-foreground">Rubies:</strong> Heat treatment can improve colour and reduce visible inclusions.</li>
                <li><strong className="text-foreground">Tanzanite:</strong> Nearly all tanzanite is heated to transform brown/yellow material to violet-blue.</li>
              </ul>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Clarity Enhancement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Various substances may be used to fill fractures and improve a stone&apos;s apparent clarity:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Oil Treatment (Emeralds):</strong> Traditional treatment using cedar oil to fill surface-reaching fractures. Accepted when disclosed.</li>
                <li><strong className="text-foreground">Resin Filling:</strong> More permanent than oil but considered a more significant treatment.</li>
                <li><strong className="text-foreground">Glass Filling (Rubies):</strong> Lead glass filling of heavily fractured rubies. Significantly reduces value and durability.</li>
              </ul>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Diffusion Treatment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elements are diffused into a stone&apos;s surface at high temperatures to alter colour. Surface diffusion creates a shallow colour layer, while newer beryllium diffusion can penetrate deeper. Both treatments significantly impact value.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Irradiation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exposure to radiation can alter or intensify colour. Blue topaz is routinely irradiated - nearly all blue topaz on the market has been treated. Some fancy colour diamonds are also irradiated.
              </p>

              {/* Treatment Guide */}
              <div className="my-12 not-prose">
                <h3 className="font-serif text-2xl mb-6 text-foreground">Treatment Acceptance Guide</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Generally Accepted</h4>
                      <p className="text-sm text-muted-foreground">Heat treatment, minor oil in emeralds - widely practiced and accepted when disclosed</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Moderate Concern</h4>
                      <p className="text-sm text-muted-foreground">Heavy oiling, resin filling, diffusion - significant value impact, must be disclosed</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-4">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Significant Concern</h4>
                      <p className="text-sm text-muted-foreground">Lead glass filling, heavy diffusion, coating - major durability/value concerns</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                The Premium for &quot;No Heat&quot;
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Natural, untreated gemstones command increasingly significant premiums. A fine unheated Burmese ruby might sell for 30-50% more than a comparable heated stone. For investment-grade pieces, the premium can be even higher.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This premium reflects genuine rarity. Less than 5% of gem-quality sapphires reach the market without heat treatment. For rubies, the percentage is even lower. Collectors value these stones as nature created them, millions of years ago.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                How Treatments Are Detected
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Modern gemological laboratories use sophisticated equipment to identify treatments:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Microscopy:</strong> Skilled examination reveals tell-tale signs like dissolved silk, altered inclusions, or filled fractures.</li>
                <li><strong className="text-foreground">Spectroscopy:</strong> FTIR and UV-Vis spectroscopy detect chemical signatures of treatments.</li>
                <li><strong className="text-foreground">X-ray Fluorescence:</strong> Identifies foreign elements introduced through diffusion.</li>
                <li><strong className="text-foreground">Photoluminescence:</strong> Advanced techniques can detect subtle heat treatment effects.</li>
              </ul>

              <div className="my-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-serif text-xl mb-3 text-foreground">The Glowgem Standard</h4>
                <p className="text-muted-foreground mb-0">
                  We provide complete transparency about any treatments. All significant gemstones are accompanied by reports from respected laboratories (GIA, AGL, Gubelin, SSEF) that detail any detected treatments. Our commitment to untreated natural gemstones means that when we offer a &quot;no heat&quot; stone, you can trust that designation completely.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Questions to Ask
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When purchasing any significant gemstone, always ask:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Has this stone been treated in any way?</li>
                <li>What specific treatments, if any, has it undergone?</li>
                <li>Is there laboratory certification documenting treatment status?</li>
                <li>How do treatments affect the stone&apos;s durability and care requirements?</li>
                <li>How does the treatment status affect value?</li>
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
              Discover <span className="gradient-text">Natural Beauty</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our collection of certified natural and untreated gemstones, each accompanied by full disclosure and documentation.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Browse Untreated Stones
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
