import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Adventure Trips", href: "#featured" },
  { label: "Bike Trips", href: "#featured" },
  { label: "Group Tours", href: "#upcoming" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#why" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-wide flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <Mountain className="h-7 w-7 text-secondary" />
          <span className="font-heading font-extrabold text-xl text-primary-foreground tracking-tight">
            Trip<span className="text-secondary">Reiser</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary-foreground/80 hover:text-secondary text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="secondary" size="sm">
            Plan Your Trip
          </Button>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-secondary py-2 text-sm font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" className="mt-2 w-full">
              Plan Your Trip
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
