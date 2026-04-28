import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Heart, Leaf, Target, Users } from "lucide-react";
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

const values = [
  {
    icon: Heart,
    title: "Passion for Wellness",
    description:
      "Every product we craft stems from a deep commitment to improving health outcomes through plant-based nutrition.",
  },
  {
    icon: Leaf,
    title: "Natural Integrity",
    description:
      "We never compromise on purity. Our ingredients are sourced directly from trusted farmers across India.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "From farmers to families — we believe in building a healthier India together, one plate at a time.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every batch undergoes rigorous quality checks to ensure the nutrition and taste you expect, every time.",
  },
];

/* Ornamental section divider reused across the page */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
      <span className="text-gold/60 text-xs">✦</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero — gold border-top accent */}
      <section
        className="relative py-24 bg-secondary/20 overflow-hidden"
        data-ocid="about.hero_section"
      >
        {/* Gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Subtle peacock feather pattern */}
        <div
          className="absolute inset-0 pattern-peacock-feather opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <motion.div {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-4">
              Our Story
            </p>
            <h1 className="font-display font-bold text-5xl text-foreground tracking-tight leading-tight mb-6">
              Rooted in Nature,
              <br />
              <span className="text-primary">Driven by Purpose</span>
            </h1>
            {/* Gold ornamental divider below headline */}
            <GoldDivider />
            <p className="text-muted-foreground font-body text-lg leading-relaxed mt-6">
              Keshav Agro Foods was born from a simple belief: that nature
              provides everything our bodies need. We set out to make premium
              plant-based nutrition accessible to every Indian household.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background" data-ocid="about.story_section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp()}>
              <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-2">
                How It All Began
              </h2>
              {/* Gold accent underline */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-gold/60 to-transparent mb-5" />
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Founded in Maharashtra, Keshav Agro Foods started as a small
                family enterprise with a vision: to bring the incredible
                nutritional power of soy to health-conscious Indians who were
                struggling to find high-quality, affordable plant-based
                alternatives.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Our founder, inspired by the ancient wisdom of soy cultivation
                in India, partnered with local farmers to build a transparent,
                ethical supply chain from field to table. Today, we work with
                over 50 farming families across Maharashtra and Madhya Pradesh.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                What began as a local initiative has grown into a beloved brand
                trusted by thousands of families — but our values remain
                unchanged: purity, nutrition, and sustainability in every
                product we make.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/generated/sustainability-farm.dim_1200x500.jpg"
                  alt="Keshav Agro Foods soybean farm"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-gold/20 rounded-xl p-5 shadow-elevated">
                <p className="font-display font-bold text-3xl text-primary">
                  50+
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Farming families
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20 bg-secondary/20"
        data-ocid="about.mission_section"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="text-center mb-12" {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-3">
              Purpose &amp; Direction
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-1">
              Mission &amp; Vision
            </h2>
            <GoldDivider />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp()} data-ocid="about.mission_card">
              <Card className="ornament-corner h-full border-border shadow-subtle hover:shadow-elevated transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    To promote healthy, plant-based living by making premium,
                    natural soy-based nutrition affordable and accessible to
                    every Indian family — without compromising on quality,
                    taste, or sustainability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeUp(0.1)} data-ocid="about.vision_card">
              <Card className="ornament-corner h-full border-border shadow-subtle hover:shadow-elevated transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-peacock/10 border border-peacock/20 flex items-center justify-center mb-5">
                    <Eye className="w-6 h-6 text-peacock" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    A future where every Indian has access to sustainable,
                    nutritious plant-based foods — and where our farming
                    communities thrive because of ethical, transparent sourcing
                    practices that honour both people and planet.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background" data-ocid="about.values_section">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-3">
              What Drives Us
            </p>
            <h2 className="font-display font-bold text-4xl text-foreground tracking-tight mb-1">
              Our Core Values
            </h2>
            <GoldDivider />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeUp(i * 0.1)}
                data-ocid={`about.value_card.${i + 1}`}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-subtle hover:border-peacock/20 transition-smooth"
              >
                <div className="w-12 h-12 rounded-full bg-peacock/8 border border-peacock/15 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-peacock" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary" data-ocid="about.stats_section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Farming Partners" },
              { value: "10K+", label: "Happy Customers" },
              { value: "3", label: "Premium Products" },
              { value: "100%", label: "Natural Ingredients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.1)}
                data-ocid={`about.stat.${i + 1}`}
                className="text-center"
              >
                <p className="font-display font-bold text-4xl text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/75 font-body text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
