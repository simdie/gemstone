"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, SlidersHorizontal, MessageCircle, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";
import { useAppointmentModal } from "@/components/appointment-modal";

const jewelleryCollections = {
  bracelets: [
    {
      id: 1,
      name: "Diamond Tennis Bracelet",
      type: "Bracelet",
      material: "18K Yellow Gold",
      stones: "8.50 ct Diamonds",
      image: "/images/jewellery/bracelets/gold-diamond-tennis.jpg",
      description: "Classic elegance with brilliant cut diamonds",
    },
    {
      id: 2,
      name: "Ruby Gold Bangle",
      type: "Bracelet",
      material: "18K Yellow Gold",
      stones: "3.20 ct Burmese Rubies",
      image: "/images/jewellery/bracelets/ruby-gold-bangle.jpg",
      description: "Hinged bangle with ruby accents",
    },
    {
      id: 3,
      name: "Emerald Link Bracelet",
      type: "Bracelet",
      material: "18K Yellow Gold",
      stones: "5.40 ct Colombian Emeralds",
      image: "/images/jewellery/bracelets/emerald-link.jpg",
      description: "Art deco inspired link design",
    },
    {
      id: 4,
      name: "Sapphire Diamond Cuff",
      type: "Bracelet",
      material: "18K White Gold",
      stones: "6.80 ct Ceylon Sapphires",
      image: "/images/jewellery/bracelets/sapphire-cuff.jpg",
      description: "Statement cuff with sapphire clusters",
    },
    {
      id: 5,
      name: "Diamond Cluster Bracelet",
      type: "Bracelet",
      material: "18K White Gold",
      stones: "4.20 ct Diamonds",
      image: "/images/jewellery/bracelets/diamond-cluster.jpg",
      description: "Floral cluster design with pave diamonds",
    },
  ],
  brooches: [
    {
      id: 6,
      name: "Diamond Butterfly Brooch",
      type: "Brooch",
      material: "Platinum",
      stones: "4.50 ct Diamonds",
      image: "/images/jewellery/brooches/diamond-butterfly.jpg",
      description: "Articulated wings with pave diamonds",
    },
    {
      id: 7,
      name: "Ruby Flower Brooch",
      type: "Brooch",
      material: "18K Yellow Gold",
      stones: "2.80 ct Burmese Rubies",
      image: "/images/jewellery/brooches/ruby-flower.jpg",
      description: "Vintage floral design with diamond center",
    },
    {
      id: 8,
      name: "Emerald Peacock Brooch",
      type: "Brooch",
      material: "18K Gold",
      stones: "3.60 ct Mixed Gems",
      image: "/images/jewellery/brooches/emerald-peacock.jpg",
      description: "Intricate peacock with emerald feathers",
    },
    {
      id: 9,
      name: "Sapphire Bow Brooch",
      type: "Brooch",
      material: "Platinum",
      stones: "2.40 ct Ceylon Sapphires",
      image: "/images/jewellery/brooches/sapphire-bow.jpg",
      description: "Classic ribbon design with sapphires",
    },
    {
      id: 10,
      name: "Gold Leaf Brooch",
      type: "Brooch",
      material: "18K Yellow Gold",
      stones: "0.80 ct Diamonds",
      image: "/images/jewellery/brooches/gold-leaf.jpg",
      description: "Nature-inspired with textured gold",
    },
  ],
  necklaces: [
    {
      id: 11,
      name: "Diamond Riviera Necklace",
      type: "Necklace",
      material: "18K White Gold",
      stones: "15.00 ct Diamonds",
      image: "/images/jewellery/necklaces/diamond-riviera.jpg",
      description: "Graduated brilliant cut diamonds",
    },
    {
      id: 12,
      name: "Emerald Pendant Necklace",
      type: "Necklace",
      material: "18K Yellow Gold",
      stones: "8.50 ct Colombian Emerald",
      image: "/images/jewellery/necklaces/emerald-pendant.jpg",
      description: "Large emerald with diamond halo",
    },
    {
      id: 13,
      name: "Ruby Collar Necklace",
      type: "Necklace",
      material: "18K Yellow Gold",
      stones: "12.00 ct Burmese Rubies",
      image: "/images/jewellery/necklaces/ruby-collar.jpg",
      description: "Statement collar with rubies and diamonds",
    },
    {
      id: 14,
      name: "Sapphire Choker",
      type: "Necklace",
      material: "Platinum",
      stones: "9.80 ct Ceylon Sapphires",
      image: "/images/jewellery/necklaces/sapphire-choker.jpg",
      description: "Royal design with diamond halos",
    },
    {
      id: 15,
      name: "Gold Diamond Chain",
      type: "Necklace",
      material: "18K Yellow Gold",
      stones: "2.40 ct Diamonds",
      image: "/images/jewellery/necklaces/gold-chain.jpg",
      description: "Heavy link chain with diamond stations",
    },
  ],
  rings: [
    {
      id: 16,
      name: "Diamond Solitaire Ring",
      type: "Ring",
      material: "18K White Gold",
      stones: "3.50 ct Diamond",
      image: "/images/jewellery/rings/diamond-solitaire.jpg",
      description: "Classic six-prong setting",
    },
    {
      id: 17,
      name: "Ruby Halo Ring",
      type: "Ring",
      material: "18K Yellow Gold",
      stones: "2.85 ct Burmese Ruby",
      image: "/images/jewellery/rings/ruby-halo.jpg",
      description: "Cushion cut ruby with diamond halo",
    },
    {
      id: 18,
      name: "Vintage Emerald Ring",
      type: "Ring",
      material: "Platinum",
      stones: "4.20 ct Colombian Emerald",
      image: "/images/jewellery/rings/emerald-vintage.jpg",
      description: "Art deco style with side diamonds",
    },
    {
      id: 19,
      name: "Sapphire Three Stone Ring",
      type: "Ring",
      material: "18K White Gold",
      stones: "3.60 ct Ceylon Sapphire",
      image: "/images/jewellery/rings/sapphire-three-stone.jpg",
      description: "Oval sapphire with diamond sides",
    },
    {
      id: 20,
      name: "Gold Signet Ring",
      type: "Ring",
      material: "18K Yellow Gold",
      stones: "0.25 ct Diamond",
      image: "/images/jewellery/rings/gold-signet.jpg",
      description: "Heavy gold band with diamond accent",
    },
  ],
  earrings: [
    {
      id: 21,
      name: "Diamond Stud Earrings",
      type: "Earrings",
      material: "18K White Gold",
      stones: "4.00 ct Diamonds",
      image: "/images/jewellery/earrings/diamond-studs.jpg",
      description: "Round brilliant cut studs",
    },
    {
      id: 22,
      name: "Emerald Drop Earrings",
      type: "Earrings",
      material: "18K Yellow Gold",
      stones: "3.20 ct Colombian Emeralds",
      image: "/images/jewellery/earrings/emerald-drop.jpg",
      description: "Pear shaped drops with diamond tops",
    },
    {
      id: 23,
      name: "Ruby Chandelier Earrings",
      type: "Earrings",
      material: "18K Yellow Gold",
      stones: "5.40 ct Burmese Rubies",
      image: "/images/jewellery/earrings/ruby-chandelier.jpg",
      description: "Cascading rubies and diamonds",
    },
    {
      id: 24,
      name: "Sapphire Hoop Earrings",
      type: "Earrings",
      material: "18K White Gold",
      stones: "2.80 ct Ceylon Sapphires",
      image: "/images/jewellery/earrings/sapphire-hoops.jpg",
      description: "Inside-out sapphire hoops",
    },
    {
      id: 25,
      name: "Gold Diamond Huggies",
      type: "Earrings",
      material: "18K Yellow Gold",
      stones: "1.20 ct Diamonds",
      image: "/images/jewellery/earrings/gold-huggies.jpg",
      description: "Pave diamond huggie earrings",
    },
  ],
  timepieces: [
    {
      id: 26,
      name: "Diamond Dress Watch",
      type: "Timepiece",
      material: "18K White Gold",
      stones: "2.00 ct Diamond Bezel",
      image: "/images/jewellery/timepieces/diamond-dress-watch.jpg",
      description: "Mother of pearl dial with pave bezel",
    },
    {
      id: 27,
      name: "Classic Gold Watch",
      type: "Timepiece",
      material: "18K Yellow Gold",
      stones: "Diamond Markers",
      image: "/images/jewellery/timepieces/gold-classic.jpg",
      description: "Champagne dial with gold bracelet",
    },
    {
      id: 28,
      name: "Ruby Bezel Watch",
      type: "Timepiece",
      material: "18K Yellow Gold",
      stones: "1.50 ct Rubies",
      image: "/images/jewellery/timepieces/ruby-bezel.jpg",
      description: "Black dial with ruby rotating bezel",
    },
    {
      id: 29,
      name: "Sapphire Ladies Watch",
      type: "Timepiece",
      material: "Platinum",
      stones: "Sapphire & Diamond",
      image: "/images/jewellery/timepieces/sapphire-ladies.jpg",
      description: "Blue dial with sapphire accents",
    },
    {
      id: 30,
      name: "Skeleton Gold Watch",
      type: "Timepiece",
      material: "18K Rose Gold",
      stones: "Diamond Markers",
      image: "/images/jewellery/timepieces/skeleton-gold.jpg",
      description: "Exposed mechanical movement",
    },
  ],
};

const allJewellery = [
  ...jewelleryCollections.bracelets,
  ...jewelleryCollections.brooches,
  ...jewelleryCollections.necklaces,
  ...jewelleryCollections.rings,
  ...jewelleryCollections.earrings,
  ...jewelleryCollections.timepieces,
];

const categories = [
  { id: "all", name: "All Collections" },
  { id: "bracelets", name: "Bracelets" },
  { id: "brooches", name: "Brooches" },
  { id: "necklaces", name: "Necklaces" },
  { id: "rings", name: "Rings" },
  { id: "earrings", name: "Earrings" },
  { id: "timepieces", name: "Timepieces" },
];

export default function JewelleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { openModalWithItem } = useAppointmentModal();

  const filteredItems = selectedCategory === "all" 
    ? allJewellery 
    : jewelleryCollections[selectedCategory as keyof typeof jewelleryCollections] || [];

  const handleMessageForPrice = (itemName: string) => {
    openModalWithItem(itemName);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Exclusive Collections</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Fine <span className="gradient-text">Jewellery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Exquisite pieces crafted with the world&apos;s finest gemstones. 
              Each creation is a testament to exceptional artistry and timeless elegance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "glass hover:bg-secondary/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jewellery grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-muted-foreground text-center">
            Showing {filteredItems.length} pieces
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <StaggerItem key={item.id}>
                <ScaleHover>
                  <div className="group cursor-pointer" onClick={() => handleMessageForPrice(item.name)}>
                    <div className="glass rounded-3xl overflow-hidden h-full">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                            {item.type}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-primary text-primary"
                            />
                          ))}
                        </div>

                        {/* Description overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-xs text-foreground/80">{item.description}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="mb-3">
                          <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.material}
                          </p>
                        </div>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-primary">
                            {item.stones}
                          </span>
                        </div>
                        
                        {/* Message for Price Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMessageForPrice(item.name);
                          }}
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Message for Price
                        </button>
                      </div>
                    </div>
                  </div>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Collections showcase */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Explore Our <span className="gradient-text">Collections</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From timeless classics to contemporary masterpieces, each collection 
                represents the pinnacle of fine jewellery craftsmanship.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => (
              <FadeUp key={category.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl">{category.name}</h3>
                    <span className="text-sm text-primary">
                      {jewelleryCollections[category.id as keyof typeof jewelleryCollections]?.length || 0} pieces
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Discover our exclusive {category.name.toLowerCase()} collection featuring 
                    exceptional craftsmanship and rare gemstones.
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Bespoke <span className="gradient-text">Creations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Looking for something truly unique? Our master craftsmen can create 
              bespoke jewellery pieces tailored to your exact specifications.
            </p>
            <button
              onClick={() => openModalWithItem("Bespoke Jewellery Request")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Start Your Custom Design
            </button>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
