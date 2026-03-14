"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, Star, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/motion";

const products = [
  {
    id: 1,
    name: "Burmese Ruby",
    category: "loose",
    type: "Ruby",
    weight: "3.24 ct",
    origin: "Myanmar",
    image: "/assets/images/home/gc1.png",
    rating: 5,
    certified: true,
  },
  {
    id: 2,
    name: "Kashmir Sapphire",
    category: "loose",
    type: "Sapphire",
    weight: "5.12 ct",
    origin: "Kashmir",
    image: "/assets/images/home/gc2.png",
    rating: 5,
    certified: true,
  },
  {
    id: 3,
    name: "Colombian Emerald",
    category: "loose",
    type: "Emerald",
    weight: "4.87 ct",
    origin: "Colombia",
    image: "/assets/images/home/gc3.png",
    rating: 5,
    certified: true,
  },
  {
    id: 4,
    name: "Persian Turquoise",
    category: "loose",
    type: "Turquoise",
    weight: "8.45 ct",
    origin: "Iran",
    image: "/assets/images/home/gc4.png",
    rating: 5,
    certified: true,
  },
  {
    id: 5,
    name: "Imperial Topaz",
    category: "loose",
    type: "Topaz",
    weight: "6.32 ct",
    origin: "Brazil",
    image: "/assets/images/home/gc5.png",
    rating: 5,
    certified: true,
  },
  {
    id: 6,
    name: "Red Spinel",
    category: "loose",
    type: "Spinel",
    weight: "2.89 ct",
    origin: "Tanzania",
    image: "/assets/images/home/gc6.png",
    rating: 5,
    certified: true,
  },
  {
    id: 7,
    name: "Ruby Ring",
    category: "jewellery",
    type: "Ring",
    weight: "2.15 ct center",
    origin: "Myanmar Ruby",
    image: "/assets/images/home/gc7.png",
    rating: 5,
    certified: true,
  },
  {
    id: 8,
    name: "Sapphire Pendant",
    category: "jewellery",
    type: "Pendant",
    weight: "3.45 ct",
    origin: "Sri Lankan Sapphire",
    image: "/assets/images/home/gc8.png",
    rating: 5,
    certified: true,
  },
  {
    id: 9,
    name: "Emerald Earrings",
    category: "jewellery",
    type: "Earrings",
    weight: "2.20 ct total",
    origin: "Colombian Emerald",
    image: "/assets/images/home/gc9.png",
    rating: 5,
    certified: true,
  },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "loose", name: "Loose Gems" },
  { id: "jewellery", name: "Jewellery" },
];

const types = ["All", "Ruby", "Sapphire", "Emerald", "Turquoise", "Topaz", "Spinel", "Ring", "Pendant", "Earrings"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const typeMatch = selectedType === "All" || product.type === selectedType;
    return categoryMatch && typeMatch;
  });

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
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          selectedType === type
                            ? "bg-primary/20 text-primary border border-primary"
                            : "glass hover:bg-secondary/50"
                        }`}
                      >
                        {type}
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

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <ScaleHover>
                  <Link href="/contact" className="block group">
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

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {product.certified && (
                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                              Certified
                            </span>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[...Array(product.rating)].map((_, i) => (
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
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {product.origin}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-primary">
                            {product.weight}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground capitalize">
                            {product.type}
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
                  setSelectedType("All");
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
