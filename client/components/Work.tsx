import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "@/lib/projects";

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
          <motion.div key={project.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.04 }} className="group overflow-hidden bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
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
                  <motion.div whileHover={{ x: 6 }} className="inline-flex items-center gap-2 text-secondary font-semibold group/btn hover:gap-3 transition-all">
                    <Link to={`/projects/${project.id}`}>View Project</Link>
                    <ArrowRight size={18} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
