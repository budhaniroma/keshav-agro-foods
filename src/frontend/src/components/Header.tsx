import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/data";
import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevPath = useRef(currentPath);
  if (prevPath.current !== currentPath) {
    prevPath.current = currentPath;
    setMobileOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-card border-b border-border transition-smooth ${scrolled ? "shadow-elevated" : "shadow-subtle"}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          data-ocid="header.logo_link"
          aria-label="Keshav Agro Foods — Home"
        >
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-subtle group-hover:scale-105 transition-smooth">
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

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`header.nav_${link.label.toLowerCase().replace(" ", "_")}_link`}
              className={`px-3 py-2 rounded-md text-sm font-body transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive(link.href)
                  ? "text-primary font-medium bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/products" data-ocid="header.shop_now_button">
            <Button
              variant="default"
              size="sm"
              className="gap-2 font-display font-semibold shadow-subtle hover:shadow-elevated transition-smooth"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          data-ocid="header.mobile_menu_toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.22,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            }}
            className="lg:hidden overflow-hidden border-t border-border bg-card"
            data-ocid="header.mobile_menu"
          >
            <nav
              className="container mx-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={`header.mobile_${link.label.toLowerCase().replace(" ", "_")}_link`}
                  className={`px-4 py-3 rounded-md text-sm font-body transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive(link.href)
                      ? "text-primary font-medium bg-primary/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <Link to="/products" data-ocid="header.mobile_shop_button">
                  <Button
                    variant="default"
                    className="w-full gap-2 font-display font-semibold"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Shop Now
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
