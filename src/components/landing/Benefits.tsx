
import { CheckCircle2, Droplets, Sparkles, Sun, Feather, FlaskConical, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    desc: "24-hour moisture lock for a dewy, plump finish. Our hyaluronic acid complex ensures your skin stays hydrated at every level.",
    imageId: "benefit-1"
  },
  {
    icon: Sparkles,
    title: "Age-Defying Results",
    desc: "Visibly reduces the appearance of fine lines and wrinkles. Potent botanical extracts stimulate natural collagen production.",
    imageId: "benefit-2"
  },
  {
    icon: Sun,
    title: "Brightening Complex",
    desc: "Evens skin tone and fades dark spots naturally using high-potency Vitamin C and Niacinamide.",
    imageId: "benefit-3"
  },
  {
    icon: Feather,
    title: "Lightweight Feel",
    desc: "Absorbs instantly with zero greasy residue. Perfect for layering under makeup or as a standalone nighttime essential.",
    imageId: "benefit-4"
  },
  {
    icon: FlaskConical,
    title: "Clean Ingredients",
    desc: "We believe in clean beauty that actually works. No fillers, no fluff—just highly effective, dermatologist-tested results.",
    imageId: "benefit-5"
  },
  {
    icon: Globe,
    title: "Ethically Sourced",
    desc: "Our rare botanical extracts are sourced ethically to ensure the highest quality while respecting the environment.",
    imageId: "benefit-6"
  },
  {
    icon: ShieldCheck,
    title: "100% Risk-Free",
    desc: "Try Saam for 30 days. If you don't love your radiant glow, we'll take care of you. 97% success rate.",
    imageId: "benefit-7"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">The Science of Saam</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            What Makes Saam <span className="accent-italic">So Special?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Potent botanicals meet advanced dermatological science for results you can actually see.
          </p>
        </div>

        <div className="space-y-12 md:space-y-0">
          {benefits.map((benefit, i) => {
            const isEven = i % 2 === 0;
            const img = getPlaceholderImage(benefit.imageId, {
              imageUrl: `https://picsum.photos/seed/benefit${i}/600/400`,
              description: benefit.title,
              imageHint: "skincare"
            });

            return (
              <div 
                key={i} 
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 border-b border-primary/5 last:border-0",
                  !isEven && "md:flex-row-reverse"
                )}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute -inset-2 bg-primary/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-2 border-white shadow-xl lavender-shadow group-hover:scale-[1.02] transition-transform duration-500">
                    <Image 
                      src={img.imageUrl} 
                      alt={img.description} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary font-bold text-xl">
                    {i + 1}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-headline font-extrabold flex items-center justify-center md:justify-start gap-3">
                      <benefit.icon className="w-6 h-6 text-primary" />
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Feature
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
