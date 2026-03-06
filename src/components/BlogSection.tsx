import { ArrowRight } from "lucide-react";

const posts = [
  { title: "Best Time to Visit Spiti Valley", category: "Guide", image: "https://images.unsplash.com/photo-1626621338750-10f1e486d3c8?w=400&q=80" },
  { title: "Complete Kedarnath Travel Guide", category: "Guide", image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=400&q=80" },
  { title: "Meghalaya Hidden Waterfalls", category: "Adventure", image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=400&q=80" },
  { title: "Bike Trip to Ladakh Guide", category: "Bike Trip", image: "https://images.unsplash.com/photo-1626015365107-aa93bbe9f82f?w=400&q=80" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Travel Stories
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            From Our Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group rounded-2xl overflow-hidden bg-card hover-lift shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-secondary font-heading font-semibold text-xs uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-heading font-bold text-base text-foreground mt-2 mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
