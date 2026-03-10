import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import FeaturedTrips from "@/components/FeaturedTrips";
import UpcomingTrips from "@/components/UpcomingTrips";
import WhyTripReiser from "@/components/WhyTripReiser";
import TravelerReviews from "@/components/TravelerReviews";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <FeaturedTrips />
      <UpcomingTrips />
      <WhyTripReiser />
      <TravelerReviews />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
