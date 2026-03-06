import { Mountain, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-4 lg:px-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
          <div className="flex items-center gap-2 mb-4">
          <img 
          src={logo} 
          alt="TripReiser Logo" 
          className="h-8 w-auto"
          />

          <span className="font-heading font-extrabold text-lg text-primary-foreground">
          Trip<span className="text-secondary">Reiser</span>
          </span>
           </div>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">
              Curated group trips, adventure tours, and unforgettable journeys across India.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-primary-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Destinations", "Adventure Trips", "Bike Trips", "Group Tours", "Blog"].map((l) => (
                <a key={l} href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-primary-foreground mb-4 uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2">
              {["About Us", "Contact", "Careers", "Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-primary-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +91 98765 43210</span>
              <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> hello@tripreiser.com</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm font-body">
            © 2026 TripReiser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
