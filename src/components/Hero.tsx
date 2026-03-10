import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {

  const navigate = useNavigate();
  const [search,setSearch] = useState("");

  const trips:any = {
    kedarnath:"kedarnath",
    meghalaya:"meghalaya",
    spiti:"spiti",
    varanasi:"varanasi",
    gangtok:"gangtok",
    ladakh:"ladakh"
  };

  const handleSearch = (e:any) => {

    if(e.key === "Enter"){

      const value = search.toLowerCase().trim();

      if(trips[value]){
        navigate(`/trip/${trips[value]}`);
      }else{
        alert("You made a spelling mistake. Please check the trip name.");
      }

    }

  };

  const handleButtonSearch = () => {

    const value = search.toLowerCase().trim();

    if(trips[value]){
      navigate(`/trip/${trips[value]}`);
    }else{
      alert("You made a spelling mistake. Please check the trip name.");
    }

  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 container-wide px-4 text-center pt-16">

        <div className="max-w-4xl mx-auto">

          <p className="text-secondary font-heading font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            Curated Travel Experiences
          </p>

          <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            Explore Northeast India With{" "}
            <span className="text-secondary">Unique Travel</span>{" "}
            Experiences
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Curated group trips, adventure tours, and unforgettable journeys with TripReiser.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

            <a href="#featured">
              <Button variant="hero" size="xl">
                Explore Trips <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </a>

            <Link to="/upcoming-trips">
              <Button variant="heroOutline" size="xl">
                Upcoming Trips
              </Button>
            </Link>

          </div>

          <div className="max-w-2xl mx-auto">

            <div className="relative flex items-center">

              <Search className="absolute left-5 h-5 w-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Where do you want to go?"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full h-14 pl-14 pr-28 rounded-full bg-primary-foreground/95 backdrop-blur-md text-foreground font-body text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg"
              />

              <button
                onClick={handleButtonSearch}
                className="absolute right-2 bg-secondary text-white px-5 py-2 rounded-full hover:opacity-90"
              >
                Search
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

    </section>
  );
};

export default Hero;