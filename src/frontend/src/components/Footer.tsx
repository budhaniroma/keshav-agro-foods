import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 group w-fit mb-4"
              aria-label="Keshav Agro Foods"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-subtle">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-base tracking-tight">
                  Keshav Agro
                </span>
                <span className="text-xs text-muted-foreground font-body tracking-wide">
                  Foods
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
              Pure plant power for a healthier life. Premium soy-based nutrition
              crafted with care and purpose.
            </p>
            <p className="text-xs text-muted-foreground font-body italic">
              "Nourishing lives, naturally."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone
                  className="w-4 h-4 mt-0.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail
                  className="w-4 h-4 mt-0.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:hello@keshavagrofoods.in"
                  className="hover:text-primary transition-smooth break-all"
                >
                  hello@keshavagrofoods.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin
                  className="w-4 h-4 mt-0.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span>Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Get wellness tips, new product alerts, and exclusive offers
              delivered to your inbox.
            </p>
            {subscribed ? (
              <p
                className="text-sm text-primary font-medium"
                data-ocid="footer.newsletter_success_state"
              >
                ✓ Thank you for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2"
                aria-label="Newsletter signup"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-ocid="footer.newsletter_input"
                  className="bg-background text-sm"
                />
                <Button
                  type="submit"
                  variant="outline"
                  size="sm"
                  data-ocid="footer.newsletter_submit_button"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {year} Keshav Agro Foods. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
