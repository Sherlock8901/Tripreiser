import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", review: "The Kedarnath trek with TripReiser was life-changing. Every detail was perfectly planned!", rating: 5, location: "Delhi" },
  { name: "Rahul Mehra", review: "Spiti Valley bike trip was the adventure of a lifetime. The group vibes were incredible.", rating: 5, location: "Mumbai" },
  { name: "Ananya Gupta", review: "Meghalaya trip exceeded all expectations. The hidden waterfalls were surreal!", rating: 5, location: "Bangalore" },
  { name: "Vikram Singh", review: "Dev Diwali in Varanasi was a spiritual experience I'll never forget. Highly recommend!", rating: 4, location: "Jaipur" },
];

const TravelerReviews = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Happy Travelers
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-6 hover-lift shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < r.rating ? "fill-secondary text-secondary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm font-body mb-5 leading-relaxed">
                "{r.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-muted-foreground text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelerReviews;
