import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TechFlow Brand Identity",
    description:
      "Complete brand identity redesign for a tech startup including logo, color system, typography guidelines, and branded collateral. Results in 45% increase in brand recognition.",
    tags: ["Logo Design", "Branding", "Brand Guidelines"],
    impact: "45% increase in brand recognition",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    title: "Product Demo Animation",
    description:
      "3-minute animated explainer video showcasing SaaS product features with smooth transitions and engaging visuals. Used across marketing campaigns and sales presentations.",
    tags: ["Animation", "Video Production", "Motion Graphics"],
    impact: "2M+ views across platforms",
    image:
      "https://images.unsplash.com/photo-1598618667-e36a77f0c4a2?w=800&h=600&fit=crop",
  },
  {
    title: "Social Media Campaign",
    description:
      "Series of animated graphics and short video clips for social media marketing. Includes reels, stories, and carousel animations optimized for Instagram, TikTok, and LinkedIn.",
    tags: ["Animation", "Social Media", "Graphic Design"],
    impact: "300K+ impressions, 8.5% engagement rate",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Packaging Design",
    description:
      "Premium packaging design for high-end cosmetics brand featuring sophisticated graphics, elegant typography, and sustainable materials. Enhanced perceived value.",
    tags: ["Package Design", "Graphic Design", "Print"],
    impact: "25% increase in sales",
    image:
      "https://images.unsplash.com/photo-1586717167055-bac0ad1e4a1b?w=800&h=600&fit=crop",
  },
  {
    title: "3D Product Visualization",
    description:
      "Photorealistic 3D animation and visualization of electronic products for e-commerce. Allows customers to see products from every angle in stunning detail.",
    tags: ["3D Animation", "VFX", "Product Visualization"],
    impact: "Reduced product returns by 30%",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    title: "Corporate Event Identity",
    description:
      "Complete visual identity for annual corporate conference including dynamic motion graphics, animated title sequences, and branded promotional videos.",
    tags: ["Motion Graphics", "Video Production", "Branding"],
    impact: "Professional brand elevation",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=800&h=600&fit=crop",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-container bg-background">
      <div className="mb-16 text-center animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A showcase of design and animation work that demonstrates creativity,
          technical skill, and strategic thinking.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="group overflow-hidden bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
            style={{
              animationDelay: `${idx * 50}ms`,
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-lg font-semibold text-secondary mb-4">
                    {project.impact}
                  </p>
                  <button className="inline-flex items-center gap-2 text-secondary font-semibold group/btn hover:gap-3 transition-all">
                    View Project <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
