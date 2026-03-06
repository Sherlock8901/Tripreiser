import { Users, Map, Hotel, Compass, Mountain } from "lucide-react";

const reasons = [
  { icon: Users, title: "Small Group Experiences", desc: "Travel in intimate groups of 10–20 like-minded adventurers" },
  { icon: Map, title: "Expert Travel Planning", desc: "Every itinerary is crafted by seasoned travel experts" },
  { icon: Hotel, title: "Handpicked Stays", desc: "Unique stays from heritage havelis to mountain camps" },
  { icon: Compass, title: "Authentic Local Experiences", desc: "Immerse in local culture, food, and traditions" },
  { icon: Mountain, title: "Adventure & Cultural Trips", desc: "From high-altitude treks to spiritual journeys" },
];

const WhyTripReiser = () => {
  return (
    <section id="why" className="section-padding bg-primary">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            The TripReiser Difference
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground">
            Why Travel With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mb-4 group-hover:bg-secondary/25 transition-colors duration-300">
                <Icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-base text-primary-foreground mb-2">
                {title}
              </h3>
              <p className="text-primary-foreground/60 text-sm font-body">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTripReiser;
