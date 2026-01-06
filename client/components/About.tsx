export default function About() {
  return (
    <section id="about" className="section-container bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            With over 10 years of creative experience, I've dedicated my career
            to crafting compelling visual narratives that bring brands to life.
            My journey in graphic design and motion animation has taught me that
            great design isn't just about aesthetics—it's about solving problems
            and creating meaningful connections between brands and their
            audiences.
          </p>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            I specialize in creating custom graphic designs and engaging video
            animations that elevate brand identity, increase engagement, and
            tell powerful stories. From logo design and branding to complex
            motion graphics and animated explainer videos, I approach every
            project with the same commitment: excellence, creativity, and
            attention to detail.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            My work has helped startups, agencies, and Fortune 500 companies
            create visual content that resonates with their audiences and drives
            measurable results. I'm passionate about combining artistic vision
            with strategic thinking to deliver designs that are both beautiful
            and effective.
          </p>
        </div>

        <div className="animate-fade-down">
          <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-8 border border-secondary/10">
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              My Expertise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="text-foreground/70">
                  Brand Identity & Logo Design
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="text-foreground/70">
                  Graphic Design (Print & Digital)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="text-foreground/70">
                  Motion Graphics & Video Animation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="text-foreground/70">
                  3D Animation & Visual Effects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="text-foreground/70">
                  UI/UX Design & Prototyping
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="text-foreground/70">
                  Social Media Content & Animations
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
