import { useParams, Link } from "react-router-dom";
import projects from "@/lib/projects";

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <Link to="/" className="text-secondary mt-4 inline-block">
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero media */}
      <div className="w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left text column */}
            <div className="text-left">
              <div className="text-sm text-slate-500 mb-4">{project.id.replace(/-/g, ' ')} </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-foreground/75 mb-6">{project.description}</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-secondary font-semibold mb-6"
              >
                Live view <span aria-hidden>→</span>
              </a>

              <div className="flex items-center gap-6 mt-8">
                {project.logo && (
                  <img src={project.logo} alt="logo" className="h-10 w-auto rounded-md" />
                )}

                {project.client && (
                  <div className="flex items-center gap-3">
                    <img src={project.client.avatar} alt={project.client.name} className="h-12 w-12 rounded-full object-cover border border-border" />
                    <div>
                      <div className="text-sm font-semibold">{project.client.name}</div>
                      <div className="text-xs text-foreground/60">{project.client.role}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right media column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[720px] rounded-xl overflow-hidden shadow-lg border border-border bg-white">
                {project.video ? (
                  <video src={project.video} controls className="w-full h-[420px] object-cover" />
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-[420px] object-cover" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <article className="prose lg:prose-lg">
          <h2 className="font-display font-bold">Project Details</h2>
          <p className="leading-relaxed text-foreground/75">{project.details}</p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Impact</h3>
            <p className="text-secondary font-semibold">{project.impact}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
