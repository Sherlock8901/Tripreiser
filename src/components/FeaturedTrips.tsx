import { Button } from "@/components/ui/button";
import { Clock, Mountain, IndianRupee } from "lucide-react";

const trips = [
  { title: "Kedarnath Spiritual Trek", image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=500&q=80", duration: "5 Days", price: "₹12,999", difficulty: "Moderate" },
  { title: "Meghalaya Waterfalls Adventure", image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=500&q=80", duration: "6 Days", price: "₹18,499", difficulty: "Easy" },
  { title: "Spiti Valley Bike Expedition", image: "https://images.unsplash.com/photo-1626621338750-10f1e486d3c8?w=500&q=80", duration: "8 Days", price: "₹22,999", difficulty: "Hard" },
  { title: "Dev Diwali Varanasi Experience", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&q=80", duration: "4 Days", price: "₹9,999", difficulty: "Easy" },
  { title: "Gangtok Bike Trip", image: "https://images.unsplash.com/photo-1622308644420-76f15ca4f2de?w=500&q=80", duration: "7 Days", price: "₹19,999", difficulty: "Moderate" },
];

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const FeaturedTrips = () => {
  return (
    <section id="featured" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Handpicked Journeys
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Featured Trips
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.title}
              className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold font-heading ${difficultyColor[trip.difficulty]}`}>
                  {trip.difficulty}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {trip.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mountain className="h-4 w-4" /> {trip.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center font-heading font-extrabold text-xl text-foreground">
                    {trip.price}
                  </span>
                  <Button variant="secondary" size="sm">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
