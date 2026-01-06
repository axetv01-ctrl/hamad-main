import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-bold text-primary-foreground mb-2 block"
            >
              FK
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Graphic Designer & Motion Artist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <p className="text-primary-foreground/70 text-sm mb-2">
              ✓ Graphic Design
            </p>
            <p className="text-primary-foreground/70 text-sm mb-2">
              ✓ Animation & Motion Graphics
            </p>
            <p className="text-primary-foreground/70 text-sm">
              ✓ Brand Identity & 3D VFX
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>
            &copy; {currentYear} Creative Visual Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
