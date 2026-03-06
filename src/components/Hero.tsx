import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 container-wide px-4 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-secondary font-heading font-semibold text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Curated Travel Experiences
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Explore India With{" "}
            <span className="text-secondary">Unique Travel</span>{" "}
            Experiences
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-body" style={{ animationDelay: "0.3s" }}>
            Curated group trips, adventure tours, and unforgettable journeys with TripReiser.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl">
              Explore Trips <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Plan Your Trip
            </Button>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full h-14 pl-14 pr-6 rounded-full bg-primary-foreground/95 backdrop-blur-md text-foreground font-body text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
