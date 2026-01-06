import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@creativestudio.com",
      href: "mailto:hello@creativestudio.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 (337) 841-8500",
      href: "tel:+923378418500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, USA",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-container bg-card">
      <div className="mb-16 text-center animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          Let's Create Something Amazing
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Ready to bring your vision to life? Get in touch and let's discuss
          your design and animation project. I'd love to hear about your ideas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="animate-fade-up">
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

          <div className="space-y-6 mb-12">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors mt-1">
                    <Icon className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold group-hover:text-secondary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div>
            <p className="text-sm text-foreground/60 mb-4">Connect With Me</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors text-secondary"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="animate-fade-down space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Project Type
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              placeholder="e.g., Logo Design, Animation, Branding"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
              placeholder="Tell me about your design or animation project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="text-sm text-green-600 text-center">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-sm text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
