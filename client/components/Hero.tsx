import { ArrowRight } from "lucide-react";
import ImageSlider from "./ImageSlider";

const heroImages = [
  "https://images.unsplash.com/photo-1678203699263-917199c725b2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600&h=900&fit=crop",
];

export default function Hero() {
  const handleBackgroundClick = () => {
    // Background click handler
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      onClick={handleBackgroundClick}
    >
      {/* Background Slider */}
      <div
        className="absolute inset-0 -z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageSlider images={heroImages} autoPlay autoPlayInterval={5000} />
      </div>

      {/* Overlay - Lighter for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 -z-10" />

      {/* Content */}
      <div
        className="max-w-4xl mx-auto text-center animate-fade-up relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium backdrop-blur-sm border border-secondary/30">
            Graphic Designer & Motion Artist
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white drop-shadow-2xl">
          Creative Visual Storyteller
        </h1>

        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Transforming ideas into stunning visual experiences. Specializing in{" "}
          <span className="font-semibold text-secondary">graphic design</span>{" "}
          and{" "}
          <span className="font-semibold text-secondary">video animation</span>{" "}
          for brands that stand out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-200 hover:gap-3 shadow-lg hover:shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            Start a Project <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            View My Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-16 border-t border-white/20">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2 drop-shadow-lg">
              50+
            </div>
            <p className="text-sm text-white/90">Clients Served</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2 drop-shadow-lg">
              200+
            </div>
            <p className="text-sm text-white/90">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2 drop-shadow-lg">
              10+
            </div>
            <p className="text-sm text-white/90">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
