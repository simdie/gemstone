import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-32 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 text */}
            <h1 className="font-serif text-[150px] md:text-[200px] leading-none gradient-text mb-4">
              404
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              The page you&apos;re looking for seems to have vanished like a rare
              gemstone. Let us help you find your way back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-full font-medium hover:bg-secondary/50 transition-colors group"
              >
                Explore Collections
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
