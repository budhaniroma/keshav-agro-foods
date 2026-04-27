import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Package, Recycle, Sprout } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    delay,
  },
});

const commitments = [
  {
    icon: Sprout,
    title: "Ethical Sourcing",
    description:
      "We partner exclusively with certified organic farmers who follow responsible agricultural practices. Every soybean in our products is traceable to its source — a farm we've personally visited and verified.",
    stats: "50+ partner farms across India",
  },
  {
    icon: Package,
    title: "Eco-Conscious Packaging",
    description:
      "Our packaging is made from recyclable and biodegradable materials. We've eliminated single-use plastics from our production line and are working toward fully compostable packaging by 2026.",
    stats: "80% reduction in plastic waste",
  },
  {
    icon: Recycle,
    title: "Low Carbon Production",
    description:
      "Our facilities run on renewable energy and we've optimised our production processes to minimise water consumption by 40% compared to conventional dairy operations. Soy requires 90% less land than cattle.",
    stats: "40% less water than dairy production",
  },
  {
    icon: Handshake,
    title: "Community Empowerment",
    description:
      "We pay our farming partners above market rates, provide agricultural training, and invest in local schools and healthcare in the communities that grow our soybeans. Sustainability is social too.",
    stats: "200+ rural livelihoods supported",
  },
];

const impactStats = [
  { value: "90%", label: "Less land use vs. dairy" },
  { value: "40%", label: "Less water consumed" },
  { value: "75%", label: "Lower greenhouse gas emissions" },
  { value: "100%", label: "Renewable energy in production" },
];

export default function SustainabilityPage() {
  return (
    <div data-ocid="sustainability.page">
      {/* Hero */}
      <section
        className="relative py-28 flex items-center overflow-hidden bg-primary/10"
        data-ocid="sustainability.hero_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(/assets/generated/sustainability-farm.dim_1200x500.jpg)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
          <motion.div {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-4">
              Our Commitment to the Planet
            </p>
            <h1 className="font-display font-bold text-5xl text-foreground tracking-tight leading-tight mb-6">
              Feeding Families,
              <br />
              <span className="text-primary">Protecting the Earth</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              At Keshav Agro Foods, sustainability isn't a marketing term. It's
              embedded in every decision — from the seed to the shelf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why soy is sustainable */}
      <section
        className="py-20 bg-background"
        data-ocid="sustainability.why_section"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-3">
              Why Soy is the Sustainable Choice
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              The environmental impact of soy-based food is dramatically lower
              than animal agriculture. Choosing Keshav Agro Foods is choosing a
              smaller footprint.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.1)}
                data-ocid={`sustainability.impact_stat.${i + 1}`}
                className="text-center p-6 rounded-xl bg-secondary/30 border border-border"
              >
                <p className="font-display font-bold text-3xl text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-body leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section
        className="py-20 bg-secondary/20"
        data-ocid="sustainability.commitments_section"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-3">
              Our Pledges
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Our Sustainability Commitments
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp(i * 0.1)}
                data-ocid={`sustainability.commitment_card.${i + 1}`}
              >
                <Card className="h-full border-border hover:shadow-elevated transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-lg">
                          {c.title}
                        </h3>
                        <p className="text-primary font-body text-sm font-medium">
                          {c.stats}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed text-sm">
                      {c.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm image section */}
      <section
        className="py-20 bg-background"
        data-ocid="sustainability.farm_section"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()}>
              <div className="rounded-2xl overflow-hidden shadow-elevated aspect-video">
                <img
                  src="/assets/generated/sustainability-farm.dim_1200x500.jpg"
                  alt="Keshav Agro Foods sustainable soybean farm"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-4">
                From Our Farms
              </p>
              <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-5">
                Fields That Feed the Future
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Our partner farms in Maharashtra and Madhya Pradesh use
                traditional and modern sustainable techniques — crop rotation,
                natural composting, and minimal-till farming — to grow the
                finest soybeans India has to offer.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                By investing in Indian farmers, we're not just building a supply
                chain — we're nurturing a movement towards regenerative
                agriculture and rural prosperity.
              </p>
              <Link to="/contact" data-ocid="sustainability.contact_button">
                <Button
                  variant="outline"
                  className="gap-2 font-display font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
