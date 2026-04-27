import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

const healthTopics = [
  {
    icon: "💪",
    title: "Plant-Based Protein Advantage",
    subtitle: "Complete Amino Acids from Soy",
    points: [
      "Soy is one of the few plant foods containing all nine essential amino acids.",
      "Ideal for muscle building, recovery, and daily maintenance.",
      "Bioavailability of soy protein rivals that of animal-sourced proteins.",
      "Supports healthy ageing and cellular repair without saturated fat.",
    ],
  },
  {
    icon: "🏃",
    title: "Fitness & Weight Management",
    subtitle: "Fuel Performance Naturally",
    points: [
      "High-protein content keeps you satiated, reducing unnecessary snacking.",
      "Low glycaemic index helps maintain stable energy levels throughout the day.",
      "Soya Milk supports pre- and post-workout nutrition without heavy calories.",
      "Tofu provides lean protein for strength training and endurance athletes.",
    ],
  },
  {
    icon: "🥛",
    title: "Lactose-Free & Vegan",
    subtitle: "Inclusive Nutrition for All",
    points: [
      "Ideal for the 60%+ of Indians with lactose intolerance.",
      "All products are 100% vegan — no animal by-products whatsoever.",
      "No hormones, no antibiotics — none of the dairy industry's complications.",
      "Safe for infants, elderly, and those with dairy allergies.",
    ],
  },
  {
    icon: "🧬",
    title: "Isoflavones & Heart Health",
    subtitle: "Nature's Protective Compounds",
    points: [
      "Soy isoflavones support cardiovascular health by reducing LDL cholesterol.",
      "Antioxidant properties help combat oxidative stress and inflammation.",
      "Regular soy consumption is linked to lower risk of certain chronic diseases.",
      "Supports hormonal balance in women, especially during menopause.",
    ],
  },
  {
    icon: "🦴",
    title: "Bone Density & Calcium",
    subtitle: "Strong Bones Without Dairy",
    points: [
      "Fortified Soya Milk provides calcium equivalent to cow's milk.",
      "Isoflavones help preserve bone mineral density.",
      "Vitamin D in our products aids calcium absorption.",
      "Great for growing children and adults managing osteoporosis risk.",
    ],
  },
  {
    icon: "🌿",
    title: "Gut Health & Digestion",
    subtitle: "Probiotic-Rich Nutrition",
    points: [
      "Soya Shrikhand contains live probiotic cultures for gut microbiome support.",
      "High fibre content from soybeans aids regular digestion.",
      "Easier to digest than many animal dairy products.",
      "Supports a balanced gut flora for improved immunity.",
    ],
  },
];

export default function HealthBenefitsPage() {
  return (
    <div data-ocid="health_benefits.page">
      {/* Hero */}
      <section
        className="py-20 bg-secondary/20"
        data-ocid="health_benefits.hero_section"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-4">
              Science-Backed Wellness
            </p>
            <h1 className="font-display font-bold text-5xl text-foreground tracking-tight leading-tight mb-6">
              The Health Power of
              <br />
              <span className="text-primary">Pure Soy Nutrition</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Backed by decades of nutritional science, soy is one of nature's
              most complete foods. Here's why Keshav Agro products are your best
              ally for a healthier life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Health topics */}
      <section
        className="py-20 bg-background"
        data-ocid="health_benefits.topics_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {healthTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                {...fadeUp(i * 0.08)}
                data-ocid={`health_benefits.topic_card.${i + 1}`}
              >
                <Card className="h-full border-border hover:shadow-elevated transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <span className="text-4xl" aria-hidden="true">
                        {topic.icon}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                          {topic.title}
                        </h3>
                        <p className="text-primary font-body text-sm mt-0.5">
                          {topic.subtitle}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {topic.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground font-body leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition comparison */}
      <section
        className="py-20 bg-secondary/20"
        data-ocid="health_benefits.comparison_section"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div className="text-center mb-12" {...fadeUp()}>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-3">
              Soy Milk vs. Cow's Milk
            </h2>
            <p className="text-muted-foreground font-body">
              Per 250ml serving comparison
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Card className="border-border shadow-subtle overflow-hidden">
              <div className="grid grid-cols-3 bg-primary/8 border-b border-border">
                <div className="p-4 font-display font-semibold text-foreground text-sm">
                  Nutrient
                </div>
                <div className="p-4 font-display font-semibold text-primary text-sm text-center border-l border-border">
                  Keshav Soya Milk
                </div>
                <div className="p-4 font-display font-semibold text-muted-foreground text-sm text-center border-l border-border">
                  Cow's Milk
                </div>
              </div>
              {[
                { nutrient: "Protein", soy: "8g ✓", cow: "8g" },
                { nutrient: "Saturated Fat", soy: "0.5g ✓", cow: "4.5g" },
                { nutrient: "Cholesterol", soy: "0mg ✓", cow: "24mg" },
                { nutrient: "Lactose", soy: "0g ✓", cow: "12g" },
                { nutrient: "Isoflavones", soy: "25mg ✓", cow: "0mg" },
                { nutrient: "Calories", soy: "80 ✓", cow: "152" },
              ].map((row, i) => (
                <div
                  key={row.nutrient}
                  className={`grid grid-cols-3 border-b border-border last:border-0 ${i % 2 === 1 ? "bg-muted/20" : ""}`}
                >
                  <div className="p-4 text-sm text-foreground font-body">
                    {row.nutrient}
                  </div>
                  <div className="p-4 text-sm text-primary font-body text-center font-medium border-l border-border">
                    {row.soy}
                  </div>
                  <div className="p-4 text-sm text-muted-foreground font-body text-center border-l border-border">
                    {row.cow}
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 bg-background"
        data-ocid="health_benefits.cta_section"
      >
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div {...fadeUp()}>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-4">
              Start Your Wellness Journey
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Experience the health difference with Keshav Agro Foods. Nutrition
              made simple, pure, and delicious.
            </p>
            <Link to="/products" data-ocid="health_benefits.shop_button">
              <Button
                size="lg"
                className="gap-2 font-display font-semibold shadow-elevated hover:shadow-lg transition-smooth px-8"
              >
                Shop the Range
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
