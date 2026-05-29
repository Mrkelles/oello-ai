
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Reviews } from "@/components/landing/Reviews";
import { MoreReviews } from "@/components/landing/MoreReviews";
import { VideoCarousel } from "@/components/landing/VideoCarousel";
import { ProductPackages } from "@/components/landing/ProductPackages";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { ImageShowcase } from "@/components/landing/ImageShowcase";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />
      <Hero />
      
      {/* Introduction text block - Problem & Solution */}
      <section className="py-24 px-4 bg-white/30 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-bold text-primary tracking-widest uppercase">The Saam Difference</p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
              Why Your Skin <span className="accent-italic">Deserves Better.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
            <p className="text-lg text-secondary-foreground/80 leading-relaxed">
              Modern life—stress, pollution, and lack of sleep—takes a toll on your complexion. Dullness and fine lines shouldn't be your "normal." We didn't just build a moisturizer; we built a barrier.
            </p>
            <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
              <p className="text-lg font-medium text-foreground leading-relaxed italic">
                "Saam works at the cellular level to lock in moisture and stimulate natural collagen production for a glow that lasts."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase sections */}
      <ImageShowcase />

      {/* Video gallery instance above Benefits */}
      <VideoCarousel />

      <Benefits />
      
      <Reviews />

      {/* Second video gallery instance */}
      <VideoCarousel />
      
      <MoreReviews />

      <ProductPackages />

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold">Ready for Your <span className="text-primary italic">Best Skin Ever?</span></h2>
          <p className="text-xl text-background/70">Join the thousands of people who have made Saam their daily essential. Get 15% Off Your First Order today!</p>
          <div className="pt-4">
            <ProductPackages hideHeader />
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
