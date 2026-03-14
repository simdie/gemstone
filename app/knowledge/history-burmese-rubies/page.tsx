"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, MapPin, Crown, Gem } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

export default function BurmeseRubiesArticlePage() {
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
                History
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                The History of <span className="gradient-text">Burmese Rubies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Exploring the legendary Mogok Valley and its prized pigeon blood rubies that have captivated royalty for centuries.
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
                  15 min read
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
              src="/images/knowledge/burmese-rubies.jpg"
              alt="Burmese Rubies from Mogok Valley"
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
                Deep in the highlands of Myanmar lies the Mogok Valley - a remote region that has produced the world&apos;s finest rubies for over a millennium. Known as the &quot;Valley of Rubies,&quot; this legendary source has yielded stones that have adorned the crowns of kings and commanded record prices at auction.
              </p>

              {/* Quick Facts */}
              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">Mogok Valley, Mandalay Region, Myanmar (Burma)</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Royal Heritage</h4>
                  <p className="text-sm text-muted-foreground">Burmese kings controlled mining for centuries</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Gem className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Pigeon Blood</h4>
                  <p className="text-sm text-muted-foreground">The most prized colour in the ruby world</p>
                </div>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                The Valley of Rubies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Mogok Valley sits at 1,200 metres elevation, surrounded by mountains that have protected both its ruby deposits and its mystique. The region&apos;s unique geology - marble host rock formed through intense metamorphism - creates rubies of unparalleled colour and character.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Historical accounts suggest ruby mining in Mogok began at least 800 years ago, though local legend places the discovery even earlier. For centuries, Burmese kings claimed all significant rubies as royal property, with miners facing severe punishment for concealing large stones.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                What Makes Burmese Rubies Special
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Several factors combine to make Mogok rubies the standard against which all others are measured:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Pigeon Blood Colour:</strong> The term describes an intense red with a subtle blue undertone and strong fluorescence. This colour, seen only in Burmese rubies, seems to glow even in low light.</li>
                <li><strong className="text-foreground">Silk:</strong> Microscopic rutile needles create a soft, velvety appearance that diffuses light beautifully. This &quot;silk&quot; is actually considered desirable in Burmese stones.</li>
                <li><strong className="text-foreground">Fluorescence:</strong> Strong red fluorescence makes Burmese rubies appear even more vivid in daylight, which contains UV light.</li>
                <li><strong className="text-foreground">Marble Origin:</strong> Unlike rubies from other sources that form in basalt, Mogok rubies crystallise in marble, resulting in purer colour.</li>
              </ul>

              <div className="my-10 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="font-serif text-xl mb-3 text-foreground">The Pigeon Blood Standard</h4>
                <p className="text-muted-foreground mb-0">
                  The term &quot;pigeon blood&quot; reportedly derives from the colour of the first drop of blood from a freshly killed pigeon - a vivid red that hasn&apos;t yet oxidised. Today, major gemological laboratories use specific parameters to award this coveted designation, but the term remains subjective. True pigeon blood rubies represent perhaps 1% of all Burmese production.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                A Royal Legacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Throughout history, Burmese rubies have been the stones of kings and emperors. The Burmese monarchs themselves recognised the ruby as a stone of invincibility - warriors would embed rubies in their flesh, believing this would make them impervious to harm in battle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                European royalty prized Burmese rubies above all other gems. The French Crown Jewels contained spectacular Mogok rubies, as did the Russian Imperial collection. The Maharajas of India, despite having access to other ruby sources, specifically sought Burmese stones for their most important pieces.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Famous Burmese Rubies
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">The Sunrise Ruby (25.59 carats):</strong> Sold for $30.3 million in 2015, setting a world record price per carat for any gemstone at auction.</li>
                <li><strong className="text-foreground">The Graff Ruby (8.62 carats):</strong> Another record-setter, this pigeon blood ruby sold for $8.6 million - $1 million per carat.</li>
                <li><strong className="text-foreground">The DeLong Star Ruby (100.32 carats):</strong> One of the world&apos;s largest and finest star rubies, now in the American Museum of Natural History.</li>
                <li><strong className="text-foreground">The Mogok Ruby:</strong> A legendary 40-carat stone said to have been found in the 15th century, its current whereabouts unknown.</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Mining Then and Now
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Traditional mining in Mogok relied on simple tools and manual labour. Miners would dig narrow tunnels following ruby-bearing zones, hauling gravel to the surface in baskets for washing and sorting. This artisanal approach continues today alongside more mechanised operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The industry has faced numerous challenges. International sanctions, internal conflict, and depletion of easily accessible deposits have all impacted production. Fine Burmese rubies have become increasingly scarce, driving prices to unprecedented levels.
              </p>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Collecting Burmese Rubies Today
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For serious collectors, Burmese rubies represent the pinnacle of gemstone acquisition. However, navigating this market requires expertise:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Origin Verification:</strong> Laboratory reports from GIA, Gubelin, or SSEF can confirm Burmese origin with high confidence.</li>
                <li><strong className="text-foreground">Treatment Status:</strong> Unheated Burmese rubies command substantial premiums over heated stones.</li>
                <li><strong className="text-foreground">Colour Assessment:</strong> &quot;Pigeon blood&quot; designation from a reputable lab significantly increases value.</li>
                <li><strong className="text-foreground">Provenance:</strong> Historical ownership can add considerable value to important stones.</li>
              </ul>

              <div className="my-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-serif text-xl mb-3 text-foreground">The Glowgem Collection</h4>
                <p className="text-muted-foreground mb-0">
                  Our long-established relationships with trusted sources in Myanmar give us access to exceptional Burmese rubies that rarely appear on the open market. Each stone comes with comprehensive certification and our personal guarantee of authenticity. For collectors seeking the finest, we can source specific criteria through our network.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                An Enduring Legacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The mystique of Burmese rubies endures because no other source has matched Mogok&apos;s quality. While fine rubies are found in Mozambique, Madagascar, and Vietnam, gemologists and collectors still measure all rubies against the Burmese standard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As fine Burmese material becomes increasingly scarce, these gems represent not just beauty and value, but a tangible connection to one of earth&apos;s most remarkable geological phenomena and centuries of human fascination with the king of gems.
              </p>
            </FadeUp>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl mb-4">
              Discover Our <span className="gradient-text">Ruby Collection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our curated selection of exceptional rubies, including fine Burmese specimens with full certification.
            </p>
            <Link
              href="/collections/ruby"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View Ruby Collection
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
