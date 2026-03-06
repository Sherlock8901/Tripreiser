import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626015365107-aa93bbe9f82f?w=1200&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
      
      <div className="relative z-10 container-wide px-4 text-center">
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
          Ready for Your Next{" "}
          <span className="text-secondary">Adventure?</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10 font-body">
          Let us plan the perfect trip for you. Explore destinations, join groups, and create memories that last a lifetime.
        </p>
        <Button variant="hero" size="xl">
          Start Planning <ArrowRight className="ml-1 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
