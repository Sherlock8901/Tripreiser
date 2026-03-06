import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const destinations = [
  { name: "Kedarnath", description: "Sacred Himalayan pilgrimage with breathtaking mountain views", image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=600&q=80" },
  { name: "Meghalaya", description: "Living root bridges and stunning waterfalls in the clouds", image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=600&q=80" },
  { name: "Spiti Valley", description: "Remote Himalayan desert with ancient monasteries", image: "https://images.unsplash.com/photo-1626621338750-10f1e486d3c8?w=600&q=80" },
  { name: "Varanasi", description: "Spiritual heart of India on the banks of the Ganges", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80" },
  { name: "Gangtok", description: "Gateway to stunning Sikkim with Kanchenjunga views", image: "https://images.unsplash.com/photo-1622308644420-76f15ca4f2de?w=600&q=80" },
  { name: "Ladakh", description: "The land of high passes and pristine mountain lakes", image: "https://images.unsplash.com/photo-1626015365107-aa93bbe9f82f?w=600&q=80" },
];

const PopularDestinations = () => {
  return (
    <section id="destinations" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Discover India
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Popular Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] hover-lift cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "var(--gradient-card)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1 text-secondary mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="font-heading font-semibold text-sm">India</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
                  {dest.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 font-body">
                  {dest.description}
                </p>
                <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Trips
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
