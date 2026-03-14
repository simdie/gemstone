"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Shield, FileCheck, Award, Building } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";

export default function CertificationArticlePage() {
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
                Certification and <span className="gradient-text">Authentication</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Why GIA and other certifications matter for your gemstone purchase - understanding the importance of professional grading.
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
                  7 min read
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
              src="/images/knowledge/certification.jpg"
              alt="Gemstone Certification and Authentication"
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
                In a market where natural and synthetic gems can appear identical, and where treatments can dramatically alter appearance, professional certification provides the independent verification that protects buyers and ensures transparency. For any significant gemstone purchase, proper documentation isn&apos;t optional - it&apos;s essential.
              </p>

              {/* Key Points */}
              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Authentication</h4>
                  <p className="text-sm text-muted-foreground">Confirms natural origin vs synthetic or simulant</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <FileCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Treatment Disclosure</h4>
                  <p className="text-sm text-muted-foreground">Identifies any enhancements or modifications</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                  <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-2">Origin Determination</h4>
                  <p className="text-sm text-muted-foreground">Provides geographic source when possible</p>
                </div>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                What a Certificate Contains
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A comprehensive gemstone report from a reputable laboratory includes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Identity:</strong> Confirmation of the gem species and variety (e.g., natural ruby, natural sapphire).</li>
                <li><strong className="text-foreground">Measurements:</strong> Precise dimensions and carat weight.</li>
                <li><strong className="text-foreground">Colour Description:</strong> Detailed assessment of hue, saturation, and tone.</li>
                <li><strong className="text-foreground">Clarity Assessment:</strong> Description of inclusions and their impact.</li>
                <li><strong className="text-foreground">Cut Evaluation:</strong> Assessment of proportions and craftsmanship.</li>
                <li><strong className="text-foreground">Treatment Status:</strong> Disclosure of any detected enhancements.</li>
                <li><strong className="text-foreground">Origin Opinion:</strong> Geographic source determination when conclusive.</li>
                <li><strong className="text-foreground">Photographs:</strong> Documentation images for identification.</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Leading Gemological Laboratories
              </h2>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">GIA (Gemological Institute of America)</h3>
              <p className="text-muted-foreground leading-relaxed">
                The world&apos;s largest and most recognised gemological organisation. GIA established the diamond grading standards used worldwide and provides highly respected coloured stone reports. Their reports are widely accepted in both retail and auction markets.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">Gubelin Gem Lab</h3>
              <p className="text-muted-foreground leading-relaxed">
                Based in Switzerland, Gubelin is considered the premier laboratory for coloured gemstone origin determination. Their reports carry particular weight for high-value rubies, sapphires, and emeralds. Gubelin pioneered many of the inclusion studies used to determine geographic origin.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">SSEF (Swiss Gemmological Institute)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Another Swiss laboratory with exceptional expertise in coloured gemstones. SSEF reports are particularly valued for their detailed treatment analysis and conservative origin determinations. Often used for the most significant auction pieces.
              </p>

              <h3 className="font-serif text-2xl mt-8 mb-4 text-foreground">AGL (American Gemological Laboratories)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialising in coloured gemstones, AGL provides detailed reports with comprehensive treatment disclosure. Their colour grading system for coloured stones is widely referenced in the trade.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="font-serif text-xl mb-3 text-foreground">Choosing a Laboratory</h4>
                <p className="text-muted-foreground mb-0">
                  For significant purchases, we often recommend obtaining reports from multiple laboratories. While this involves additional cost and time, it provides the highest level of confidence, particularly for origin-sensitive stones like Kashmir sapphires or Burmese rubies.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Understanding Origin Reports
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Origin determination is one of the most valuable - and challenging - services laboratories provide. Gemologists analyse inclusions, trace elements, and spectroscopic signatures to determine where a stone formed. However, it&apos;s important to understand the limitations:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Origin is stated as an &quot;opinion&quot; based on available evidence</li>
                <li>Some stones cannot be definitively sourced</li>
                <li>Different laboratories may reach different conclusions</li>
                <li>Heat treatment can sometimes complicate origin determination</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Treatment Disclosure Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Laboratories use standardised terminology to describe treatments:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">&quot;No indications of heating&quot;</strong> - The most desirable designation, commanding premium prices.</li>
                <li><strong className="text-foreground">&quot;Heated&quot; or &quot;Evidence of heat treatment&quot;</strong> - Standard heat treatment detected.</li>
                <li><strong className="text-foreground">&quot;Minor enhancement&quot;</strong> - For emeralds, indicates typical minor oil treatment.</li>
                <li><strong className="text-foreground">Specific treatment descriptions</strong> - Details on any other modifications detected.</li>
              </ul>

              <div className="my-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-serif text-xl mb-3 text-foreground flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  The Glowgem Certification Standard
                </h4>
                <p className="text-muted-foreground mb-0">
                  Every significant gemstone sold by The Glowgem is accompanied by certification from one or more respected independent laboratories. We never sell major pieces without proper documentation, and we can arrange additional certification upon request. For our most important stones, we obtain reports from multiple laboratories to ensure the highest level of confidence.
                </p>
              </div>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                Verifying Your Certificate
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reputable laboratories provide ways to verify report authenticity:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Online Databases:</strong> Most major labs allow you to verify reports online using the report number.</li>
                <li><strong className="text-foreground">Security Features:</strong> Look for holograms, special paper, and other anti-counterfeiting measures.</li>
                <li><strong className="text-foreground">QR Codes:</strong> Many modern reports include scannable codes linking to digital verification.</li>
                <li><strong className="text-foreground">Direct Contact:</strong> You can always contact the laboratory directly to verify a report.</li>
              </ul>

              <h2 className="font-serif text-3xl mt-12 mb-6 text-foreground">
                The Value of Documentation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Beyond providing peace of mind at purchase, proper certification serves important long-term purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Insurance:</strong> Insurers require professional documentation for valuable pieces.</li>
                <li><strong className="text-foreground">Resale:</strong> Certified stones command higher prices and sell more easily.</li>
                <li><strong className="text-foreground">Estate Planning:</strong> Documentation helps establish value for inheritance purposes.</li>
                <li><strong className="text-foreground">Authentication:</strong> Protects against disputes about a stone&apos;s characteristics.</li>
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
              Shop with <span className="gradient-text">Confidence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Every gemstone in our collection comes with comprehensive certification from leading international laboratories.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Certified Gemstones
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
