import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BENEFITS, PRODUCTS, TESTIMONIALS } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.55,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    delay,
  },
});

/* Peacock feather SVG eye motif — inlined as background data URI for hero */
const PEACOCK_EYE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cellipse cx='100' cy='100' rx='90' ry='40' fill='none' stroke='%2300897b' stroke-width='0.6' stroke-opacity='0.06'/%3E%3Cellipse cx='100' cy='100' rx='70' ry='30' fill='none' stroke='%23c99a2e' stroke-width='0.5' stroke-opacity='0.05'/%3E%3Cellipse cx='100' cy='100' rx='50' ry='20' fill='none' stroke='%2300897b' stroke-width='0.6' stroke-opacity='0.07'/%3E%3Ccircle cx='100' cy='100' r='8' fill='none' stroke='%2300897b' stroke-width='1' stroke-opacity='0.08'/%3E%3C/svg%3E")`;

export default function HomePage() {
  return (
    <div data-ocid="home.page">
      {/* Hero — peacock feather pattern overlay */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary/30"
        data-ocid="home.hero_section"
      >
        {/* Base photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-soy-products.dim_1200x600.jpg)",
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"
          aria-hidden="true"
        />
        {/* Peacock feather pattern — very subtle */}
        <div
          className="absolute inset-0 pattern-peacock-feather opacity-70 pointer-events-none"
          aria-hidden="true"
        />
        {/* Decorative peacock eye motifs — large, positioned right side */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: PEACOCK_EYE_SVG,
            backgroundSize: "180px 180px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />
        {/* Gold top-border accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div {...fadeUp(0)}>
              <Badge
                variant="outline"
                className="mb-6 border-primary/30 text-primary font-body text-xs uppercase tracking-widest px-4 py-1.5"
              >
                100% Natural · Plant-Based · Made in India
              </Badge>
            </motion.div>
            <motion.h1
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.08] tracking-tight mb-6"
              {...fadeUp(0.1)}
            >
              Pure Plant Power
              <br />
              <span className="text-primary">for a Healthier</span>{" "}
              <span className="text-gold">Life</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground font-body leading-relaxed mb-10 max-w-lg"
              {...fadeUp(0.2)}
            >
              Discover our range of premium, natural soy-based products —
              crafted from the finest soybeans for your wellness journey.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              {...fadeUp(0.3)}
            >
              <Link to="/products" data-ocid="home.hero_shop_button">
                <Button
                  size="lg"
                  className="gap-2 font-display font-semibold text-base shadow-elevated hover:shadow-lg transition-smooth px-8"
                >
                  Shop Our Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about" data-ocid="home.hero_about_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-display font-medium text-base border-border hover:border-primary hover:text-primary transition-smooth px-8"
                >
                  Our Story
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-20 bg-background"
        data-ocid="home.products_section"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-3">
              Our Products
            </p>
            <h2 className="font-display font-bold text-4xl text-foreground tracking-tight mb-3">
              Featured Products
            </h2>
            {/* Gold ornamental divider */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                {...fadeUp(i * 0.12)}
                data-ocid={`home.product_card.${i + 1}`}
              >
                <Card className="ornament-corner overflow-hidden group hover:shadow-elevated transition-smooth border-border cursor-pointer h-full">
                  <div className="relative overflow-hidden aspect-[4/3] bg-secondary/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body">
                          ({product.variant}) {product.weight}
                        </p>
                      </div>
                      <span className="font-display font-bold text-foreground text-lg">
                        ₹{product.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5 line-clamp-2">
                      {product.description}
                    </p>
                    <Link
                      to="/products"
                      data-ocid={`home.product_view_button.${i + 1}`}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-display font-medium"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/20" data-ocid="home.why_section">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-3">
              The Power of Pure Soya
            </p>
            <h2 className="font-display font-bold text-4xl text-foreground tracking-tight mb-3">
              Why Keshav Agro Foods?
            </h2>
            {/* Gold ornamental divider */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.id}
                {...fadeUp(i * 0.1)}
                data-ocid={`home.benefit_card.${i + 1}`}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-subtle transition-smooth hover:border-peacock/20"
              >
                {/* Peacock teal icon accent */}
                <span
                  className="text-3xl p-2 rounded-lg bg-peacock/5 border border-peacock/10"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — peacock pattern background */}
      <section
        className="relative py-20 bg-background overflow-hidden"
        data-ocid="home.testimonials_section"
      >
        {/* Peacock feather background — very subtle */}
        <div
          className="absolute inset-0 pattern-peacock-feather opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        {/* Peacock eye repeat motif over testimonials */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: PEACOCK_EYE_SVG,
            backgroundSize: "160px 160px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />
        {/* Subtle gold border top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-3">
              Customer Love
            </p>
            <h2 className="font-display font-bold text-4xl text-foreground tracking-tight mb-3">
              What People Say
            </h2>
            {/* Gold ornamental divider */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                {...fadeUp(i * 0.1)}
                data-ocid={`home.testimonial_card.${i + 1}`}
              >
                <Card className="h-full border-border hover:shadow-subtle transition-smooth hover:border-gold/20 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div
                      className="flex gap-0.5 mb-4"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: testimonial.rating }, (_, j) => (
                        <Star
                          key={`star-${testimonial.id}-${j}`}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-foreground font-body leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-peacock/10 border border-peacock/20 flex items-center justify-center text-peacock font-display font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-body">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary" data-ocid="home.cta_section">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-display font-bold text-4xl text-primary-foreground tracking-tight mb-4">
              Ready to Go Plant-Based?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Join thousands of health-conscious families who've made the switch
              to Keshav Agro Foods.
            </p>
            <Link to="/products" data-ocid="home.cta_explore_button">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 font-display font-semibold text-base shadow-elevated hover:shadow-lg transition-smooth px-10"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
