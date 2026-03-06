import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";

const upcoming = [
  { title: "Kedarnath Trek", date: "Mar 15 – Mar 20, 2026", seats: 6, price: "₹12,999" },
  { title: "Spiti Valley Expedition", date: "Apr 5 – Apr 12, 2026", seats: 4, price: "₹22,999" },
  { title: "Meghalaya Explorer", date: "Apr 18 – Apr 23, 2026", seats: 10, price: "₹18,499" },
  { title: "Ladakh Bike Trip", date: "May 1 – May 10, 2026", seats: 8, price: "₹28,999" },
];

const UpcomingTrips = () => {
  return (
    <section id="upcoming" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Join The Group
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Upcoming Group Trips
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {upcoming.map((trip) => (
            <div
              key={trip.title}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-card hover-lift shadow-[var(--shadow-card)]"
            >
              <div className="flex-1">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {trip.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-secondary" /> {trip.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-secondary" /> {trip.seats} seats left
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-heading font-extrabold text-xl text-foreground">{trip.price}</span>
                <Button variant="secondary" size="sm">
                  Join Group <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
