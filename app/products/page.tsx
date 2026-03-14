"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Star, SlidersHorizontal, MessageSquare } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactModal } from "@/components/contact-modal";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";

// Loose Gems
const looseGems = [
  { id: 1, name: "Burmese Ruby", type: "Ruby", weight: "3.24 ct", origin: "Myanmar", image: "/images/gems/ruby.jpg" },
  { id: 2, name: "Kashmir Sapphire", type: "Sapphire", weight: "5.12 ct", origin: "Kashmir", image: "/images/gems/sapphire.jpg" },
  { id: 3, name: "Colombian Emerald", type: "Emerald", weight: "4.87 ct", origin: "Colombia", image: "/images/gems/emerald.jpg" },
  { id: 4, name: "Persian Turquoise", type: "Turquoise", weight: "8.45 ct", origin: "Iran", image: "/images/gems/turquoise.jpg" },
  { id: 5, name: "Imperial Topaz", type: "Topaz", weight: "6.32 ct", origin: "Brazil", image: "/images/gems/topaz.jpg" },
  { id: 6, name: "Red Spinel", type: "Spinel", weight: "3.89 ct", origin: "Myanmar", image: "/images/gems/spinel.jpg" },
  { id: 7, name: "Natural Carnelian", type: "Carnelian", weight: "4.89 ct", origin: "India", image: "/images/gems/carnelian.jpg" },
  { id: 8, name: "Green Peridot", type: "Peridot", weight: "5.67 ct", origin: "Pakistan", image: "/images/gems/peridot.jpg" },
  { id: 9, name: "Purple Amethyst", type: "Amethyst", weight: "7.23 ct", origin: "Brazil", image: "/images/gems/amethyst.jpg" },
  { id: 10, name: "Blue Tanzanite", type: "Tanzanite", weight: "4.56 ct", origin: "Tanzania", image: "/images/gems/tanzanite.jpg" },
  { id: 11, name: "Aquamarine Crystal", type: "Aquamarine", weight: "8.92 ct", origin: "Brazil", image: "/images/gems/aquamarine.jpg" },
  { id: 12, name: "Golden Citrine", type: "Citrine", weight: "6.78 ct", origin: "Brazil", image: "/images/gems/citrine.jpg" },
  { id: 13, name: "Red Garnet", type: "Garnet", weight: "3.45 ct", origin: "Mozambique", image: "/images/gems/garnet.jpg" },
  { id: 14, name: "Australian Opal", type: "Opal", weight: "5.34 ct", origin: "Australia", image: "/images/gems/opal.jpg" },
  { id: 15, name: "Imperial Jadeite", type: "Jadeite", weight: "4.12 ct", origin: "Myanmar", image: "/images/gems/jadeite.jpg" },
  { id: 16, name: "Pink Morganite", type: "Morganite", weight: "7.89 ct", origin: "Brazil", image: "/images/gems/morganite.jpg" },
  { id: 17, name: "Watermelon Tourmaline", type: "Tourmaline", weight: "5.67 ct", origin: "Brazil", image: "/images/gems/tourmaline.jpg" },
  { id: 18, name: "Alexandrite", type: "Alexandrite", weight: "2.34 ct", origin: "Russia", image: "/images/gems/alexandrite.jpg" },
  { id: 19, name: "Paraiba Tourmaline", type: "Paraiba", weight: "3.12 ct", origin: "Brazil", image: "/images/gems/paraiba.jpg" },
  { id: 20, name: "Pink Kunzite", type: "Kunzite", weight: "8.45 ct", origin: "Afghanistan", image: "/images/gems/kunzite.jpg" },
];

// Jewelry
const jewelry = [
  // Bracelets
  { id: 101, name: "Diamond Link Bracelet", type: "Bracelet", category: "Bracelets", material: "18K Gold", image: "/images/jewelry/bracelet-gold-1.jpg" },
  { id: 102, name: "Pave Diamond Bangle", type: "Bracelet", category: "Bracelets", material: "18K Gold", image: "/images/jewelry/bracelet-gold-2.jpg" },
  { id: 103, name: "Tennis Bracelet", type: "Bracelet", category: "Bracelets", material: "White Gold", image: "/images/jewelry/bracelet-diamond-1.jpg" },
  { id: 104, name: "Filigree Gold Cuff", type: "Bracelet", category: "Bracelets", material: "18K Gold", image: "/images/jewelry/bracelet-gold-3.jpg" },
  { id: 105, name: "Emerald Station Bracelet", type: "Bracelet", category: "Bracelets", material: "White Gold", image: "/images/jewelry/bracelet-diamond-2.jpg" },
  
  // Brooches
  { id: 201, name: "Flower Brooch", type: "Brooch", category: "Brooches", material: "18K Gold", image: "/images/jewelry/brooch-gold-1.jpg" },
  { id: 202, name: "Butterfly Brooch", type: "Brooch", category: "Brooches", material: "White Gold", image: "/images/jewelry/brooch-diamond-1.jpg" },
  { id: 203, name: "Art Deco Bow Brooch", type: "Brooch", category: "Brooches", material: "18K Gold", image: "/images/jewelry/brooch-gold-2.jpg" },
  { id: 204, name: "Feather Brooch", type: "Brooch", category: "Brooches", material: "White Gold", image: "/images/jewelry/brooch-diamond-2.jpg" },
  { id: 205, name: "Rose Ruby Brooch", type: "Brooch", category: "Brooches", material: "18K Gold", image: "/images/jewelry/brooch-gold-3.jpg" },
  
  // Necklaces
  { id: 301, name: "Solitaire Pendant", type: "Necklace", category: "Necklaces", material: "18K Gold", image: "/images/jewelry/necklace-gold-1.jpg" },
  { id: 302, name: "Diamond Rivière", type: "Necklace", category: "Necklaces", material: "White Gold", image: "/images/jewelry/necklace-diamond-1.jpg" },
  { id: 303, name: "Emerald Choker", type: "Necklace", category: "Necklaces", material: "18K Gold", image: "/images/jewelry/necklace-gold-2.jpg" },
  { id: 304, name: "Sapphire Statement", type: "Necklace", category: "Necklaces", material: "White Gold", image: "/images/jewelry/necklace-diamond-2.jpg" },
  { id: 305, name: "Ruby Pendant Chain", type: "Necklace", category: "Necklaces", material: "18K Gold", image: "/images/jewelry/necklace-gold-3.jpg" },
  
  // Rings
  { id: 401, name: "Citrine Cocktail Ring", type: "Ring", category: "Rings", material: "18K Gold", image: "/images/jewelry/ring-gold-1.jpg" },
  { id: 402, name: "Diamond Halo Ring", type: "Ring", category: "Rings", material: "White Gold", image: "/images/jewelry/ring-diamond-1.jpg" },
  { id: 403, name: "Ruby Art Deco Ring", type: "Ring", category: "Rings", material: "18K Gold", image: "/images/jewelry/ring-gold-2.jpg" },
  { id: 404, name: "Three Stone Ring", type: "Ring", category: "Rings", material: "Platinum", image: "/images/jewelry/ring-diamond-2.jpg" },
  { id: 405, name: "Sapphire Dome Ring", type: "Ring", category: "Rings", material: "18K Gold", image: "/images/jewelry/ring-gold-3.jpg" },
  
  // Earrings
  { id: 501, name: "Pearl Drop Earrings", type: "Earrings", category: "Earrings", material: "18K Gold", image: "/images/jewelry/earrings-gold-1.jpg" },
  { id: 502, name: "Chandelier Earrings", type: "Earrings", category: "Earrings", material: "White Gold", image: "/images/jewelry/earrings-diamond-1.jpg" },
  { id: 503, name: "Emerald Hoop Earrings", type: "Earrings", category: "Earrings", material: "18K Gold", image: "/images/jewelry/earrings-gold-2.jpg" },
  { id: 504, name: "Diamond Studs", type: "Earrings", category: "Earrings", material: "White Gold", image: "/images/jewelry/earrings-diamond-2.jpg" },
  { id: 505, name: "Tassel Earrings", type: "Earrings", category: "Earrings", material: "18K Gold", image: "/images/jewelry/earrings-gold-3.jpg" },
  
  // Timepieces
  { id: 601, name: "Diamond Bezel Watch", type: "Timepiece", category: "Timepieces", material: "18K Gold", image: "/images/jewelry/timepiece-gold-1.jpg" },
  { id: 602, name: "Pave Diamond Watch", type: "Timepiece", category: "Timepieces", material: "Platinum", image: "/images/jewelry/timepiece-diamond-1.jpg" },
  { id: 603, name: "Vintage Pocket Watch", type: "Timepiece", category: "Timepieces", material: "18K Gold", image: "/images/jewelry/timepiece-gold-2.jpg" },
  { id: 604, name: "Art Deco Watch", type: "Timepiece", category: "Timepieces", material: "White Gold", image: "/images/jewelry/timepiece-diamond-2.jpg" },
  { id: 605, name: "Skeleton Watch", type: "Timepiece", category: "Timepieces", material: "Rose Gold", image: "/images/jewelry/timepiece-gold-3.jpg" },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "loose", name: "Loose Gems" },
  { id: "jewellery", name: "Jewellery" },
];

const jewelryCategories = ["All", "Bracelets", "Brooches", "Necklaces", "Rings", "Earrings", "Timepieces"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedJewelryCategory, setSelectedJewelryCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleProductClick = (productName: string) => {
    setSelectedItem(productName);
    setIsContactModalOpen(true);
  };

  const getFilteredProducts = () => {
    if (selectedCategory === "loose") {
      return looseGems;
    } else if (selectedCategory === "jewellery") {
      if (selectedJewelryCategory === "All") {
        return jewelry;
      }
      return jewelry.filter(item => item.category === selectedJewelryCategory);
    } else {
      // All products
      const filteredJewelry = selectedJewelryCategory === "All" 
        ? jewelry 
        : jewelry.filter(item => item.category === selectedJewelryCategory);
      return [...looseGems, ...filteredJewelry];
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeUp>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Products
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Exceptional <span className="gradient-text">Specimens</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our collection of investment-grade loose gemstones and
              exquisite jewellery pieces, each certified for authenticity.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Category tabs */}
            <div className="flex gap-2">
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

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm hover:bg-secondary/50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Expanded filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3">Jewelry Category</p>
                  <div className="flex flex-wrap gap-2">
                    {jewelryCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedJewelryCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedJewelryCategory === category
                            ? "bg-primary/20 text-primary border border-primary"
                            : "glass hover:bg-secondary/50"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-muted-foreground">
            Showing {filteredProducts.length} products
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <ScaleHover>
                  <div 
                    onClick={() => handleProductClick(product.name)}
                    className="block group cursor-pointer"
                  >
                    <div className="glass rounded-3xl overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            Certified
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
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
                            <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {"origin" in product ? product.origin : product.material}
                            </p>
                          </div>
                          {"weight" in product && (
                            <span className="text-sm font-medium text-primary">
                              {product.weight}
                            </span>
                          )}
                        </div>
                        
                        {/* Message for Price */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product.name);
                          }}
                          className="flex items-center gap-2 text-sm text-primary hover:underline mt-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Message for Price
                        </button>
                      </div>
                    </div>
                  </div>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No products match your current filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedJewelryCategory("All");
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Looking for Something{" "}
              <span className="gradient-text">Specific?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We specialize in sourcing rare and exceptional gemstones. Contact
              us with your requirements and our experts will find the perfect
              piece for your collection.
            </p>
            <button
              onClick={() => {
                setSelectedItem("");
                setIsContactModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </FadeUp>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        itemInterested={selectedItem}
      />
    </main>
  );
}
