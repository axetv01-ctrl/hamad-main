import {
  Paintbrush,
  Clapperboard,
  Sparkles,
  Image,
  Layers,
  Film,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Brand Identity Design",
    description:
      "Complete branding solutions including logo design, brand guidelines, color palettes, and visual identity systems that reflect your brand's unique personality.",
  },
  {
    icon: Clapperboard,
    title: "Video Animation",
    description:
      "Engaging animated videos for marketing, explainer content, product demonstrations, and social media that captivate and convert your audience.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic motion graphics design for promotional videos, intros, outros, transitions, and animated typography that bring energy to your content.",
  },
  {
    icon: Image,
    title: "Graphic Design",
    description:
      "Professional graphic design for print and digital media including posters, brochures, packaging, social media graphics, and promotional materials.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centered design for digital products and interfaces, creating intuitive and beautiful experiences that users love to interact with.",
  },
  {
    icon: Film,
    title: "3D Animation & VFX",
    description:
      "Cutting-edge 3D animation and visual effects for commercials, product visualization, and immersive visual experiences that stand out.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-container bg-background">
      <div className="mb-16 text-center animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Services & Creative Solutions
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Comprehensive design and animation services crafted to elevate your
          brand and create unforgettable visual experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
            >
              <div className="mb-4 inline-flex p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Icon className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
