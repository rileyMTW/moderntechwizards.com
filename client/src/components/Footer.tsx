import { Link } from "wouter";
import iconImage from "@assets/Gemini_Generated_Image_fzb2obfzb2obfzb2_1763412873745.png";

export default function Footer() {
  return (
    <footer className="glass-effect border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={iconImage}
                alt="Modern Tech Wizards Icon"
                className="h-16 w-16 rounded-full object-cover neon-border"
              />
              <h3 className="font-display text-lg text-primary">Modern Tech Wizards</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Technology consulting that architects, builds, and operates production AI, cloud, data, and automation systems - end to end.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-services">Services</Link></li>
              <li><Link href="/voice" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-voice">Voice Agents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:riley@moderntechwizards.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="text-contact-email"
                >
                  riley@moderntechwizards.com
                </a>
              </li>
              <li>
                <a
                  href="tel:949-887-9822"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="text-contact-phone"
                >
                  949-887-9822
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">&copy; 2026 Modern Tech Wizards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
