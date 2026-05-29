
"use client";

import Image from "next/image";
import { Star, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";

const reviewsData = [
  {
    name: "Sarah J.",
    text: "I've tried everything from high-end to drugstore. Saam is the first cream that actually made my skin glow without breaking me out. The texture is amazing and my skin feels so hydrated all day.",
    imageId: "rev-1"
  },
  {
    name: "Mark T.",
    text: "The texture is like silk. My fine lines around my eyes are noticeably softer after just two weeks of using Saam. It's now a permanent part of my morning and night routine.",
    imageId: "rev-2"
  },
  {
    name: "Azeezah",
    text: "I didn’t think a cream could work this well, but my face feels firmer, and the lines are fading. I love that it absorbs instantly without that greasy feeling. Saam is magic!",
    imageId: "rev-3"
  },
  {
    name: "Mrs. Enem Bassey",
    text: "It is Magical, I got mine few days back and I have been applying it, the results is great. I wish i got it earlier instead of wasting money on products that don't work.",
    imageId: "rev-4"
  },
  {
    name: "Maria",
    text: "The sagging skin around my jawline started to tighten up! Not only that, but the fine lines and crepe-like texture began to smooth out. I finally feel radiant again!",
    imageId: "rev-5"
  },
  {
    name: "Clara",
    text: "I’ve been battling fine lines for years. But Saam truly delivered. It penetrates deep into the skin, leaving it hydrated and smoother. People have started guessing my age wrong!",
    imageId: "rev-6"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Loved by Enthusiasts</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Real People, <span className="accent-italic">Real Saam Glow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See why thousands are making Saam their daily skin essential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, i) => {
            const img = getPlaceholderImage(review.imageId, {
              imageUrl: "https://picsum.photos/seed/rev/600/600",
              description: review.name,
              imageHint: "customer review"
            });

            return (
              <Card key={i} className="flex flex-col overflow-hidden border-none rounded-[2rem] bg-white lavender-shadow hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-square w-full">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                    <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex text-amber-400 mb-4 gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base text-secondary-foreground/80 leading-relaxed italic mb-6 flex-1">
                    "{review.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-primary/5">
                    <span className="font-bold text-lg block">{review.name}</span>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Verified Customer</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
