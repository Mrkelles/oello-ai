
"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Leaf, Ban, FlaskConical } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const carouselImageIds = [
    "hero-carousel-1",
    "hero-carousel-2",
    "hero-carousel-3",
    "hero-carousel-4",
    "hero-carousel-5",
  ];

  const heroImages = carouselImageIds.map(id => {
    return (PlaceHolderImages || []).find(img => img && img.id === id);
  }).filter((img): img is NonNullable<typeof img> => !!img && !!img.imageUrl);

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  return (
    <section className="pt-32 pb-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            <span className="animate-pulse">●</span> Order Now To Claim 15% Off Your First Order
          </div>

          <h1 className="text-4xl md:text-7xl font-headline font-extrabold leading-[1.1] text-foreground">
            Reveal Your Most <br />
            <span className="accent-italic">Radiant Self.</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Saam Face Cream combines potent botanicals with advanced dermatological science to hydrate, firm, and brighten your skin—day and night.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg shadow-xl hover:scale-95 transition-transform" asChild>
              <Link href="/order">Shop Saam Now</Link>
            </Button>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs font-medium text-muted-foreground">4.9/5.0 Based on Verified Enthusiasts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/10">
            <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-primary" />
              </div>
              Dermatologist Tested
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              Cruelty-Free
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Ban className="w-4 h-4 text-primary" />
              </div>
              Paraben-Free
            </div>
          </div>
        </div>

        <div className="relative space-y-6">
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-white lg:max-w-md mx-auto">
            <Carousel setApi={setMainApi} className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {heroImages.length > 0 ? heroImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-[4/5] w-full">
                      <Image 
                        src={img.imageUrl} 
                        alt={img.description} 
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </CarouselItem>
                )) : (
                  <CarouselItem>
                    <div className="relative aspect-[4/5] bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Saam Product Showcase</p>
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-primary border-none shadow-md" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-primary border-none shadow-md" />
            </Carousel>
          </div>

          <div className="max-w-[280px] md:max-w-sm mx-auto">
            <Carousel
              setApi={setThumbApi}
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 flex justify-center">
                {heroImages.map((img, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 basis-1/5 cursor-pointer"
                    onClick={() => onThumbClick(index)}
                  >
                    <div 
                      className={cn(
                        "relative aspect-square rounded-xl overflow-hidden border-2 transition-all",
                        selectedIndex === index 
                          ? "border-primary scale-110 shadow-sm" 
                          : "border-transparent opacity-50 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
