const skillCategories = [
  {
    category: "Design Software",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Figma",
      "InDesign",
      "CorelDRAW",
    ],
  },
  {
    category: "Animation & Video",
    skills: [
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "Cinema 4D",
      "Blender",
      "DaVinci Resolve",
      "Final Cut Pro",
    ],
  },
  {
    category: "3D & VFX",
    skills: [
      "3D Modeling",
      "3D Rendering",
      "Visual Effects",
      "Motion Capture",
      "Particle Systems",
      "Lighting & Rendering",
    ],
  },
  {
    category: "Motion Graphics",
    skills: [
      "Keyframe Animation",
      "Motion Design",
      "Animated Typography",
      "Transitions",
      "Visual Effects",
      "Compositing",
    ],
  },
  {
    category: "Branding & Design",
    skills: [
      "Logo Design",
      "Brand Strategy",
      "Color Theory",
      "Typography",
      "Layout Design",
      "Visual Hierarchy",
    ],
  },
  {
    category: "Web & UI Design",
    skills: [
      "UI Design",
      "UX Design",
      "Web Design",
      "Prototyping",
      "Responsive Design",
      "User Research",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-card">
      <div className="mb-16 text-center animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Skills & Tools
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Master-level expertise in industry-leading design and animation tools
          combined with strong creative fundamentals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={category.category}
            className="p-6 bg-background rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 animate-fade-up"
            style={{
              animationDelay: `${idx * 50}ms`,
            }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
