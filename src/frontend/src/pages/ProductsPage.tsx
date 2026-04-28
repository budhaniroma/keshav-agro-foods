import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PRODUCTS } from "@/lib/data";
import type { Product } from "@/lib/types";
import { Check, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

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

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price} · ${product.weight}`,
      duration: 3000,
    });
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        delay: index * 0.12,
      }}
      data-ocid={`products.product_card.${index + 1}`}
    >
      {/* ornament-corner adds gold/peacock decorative corner brackets */}
      <Card className="ornament-corner overflow-hidden group hover:shadow-elevated transition-smooth border-border h-full flex flex-col hover:border-gold/20">
        <div className="relative overflow-hidden aspect-square bg-secondary/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium">
              {product.badge}
            </Badge>
          )}
          {/* Protein highlight badge — gold accent */}
          <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm border border-gold/25 rounded-lg px-2.5 py-1.5 shadow-subtle">
            <span className="font-display font-bold text-xs text-gold leading-none">
              {product.nutrition?.[0]?.value ?? "—"}
            </span>
            <span className="block text-[10px] text-muted-foreground font-body leading-none mt-0.5">
              Protein
            </span>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display font-bold text-foreground text-xl leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                ({product.variant}) · {product.weight}
              </p>
            </div>
            <span className="font-display font-bold text-foreground text-xl">
              ₹{product.price}
            </span>
          </div>

          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
            {product.longDescription}
          </p>

          <div className="mb-5">
            <h4 className="font-display font-semibold text-foreground text-sm mb-3 uppercase tracking-wide">
              Key Benefits
            </h4>
            <ul className="grid grid-cols-2 gap-1.5">
              {product.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground font-body"
                >
                  <Check className="w-3.5 h-3.5 text-peacock shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="mb-5" />

          <div className="mb-6">
            <h4 className="font-display font-semibold text-foreground text-sm mb-3 uppercase tracking-wide">
              Nutrition per serving
            </h4>
            <div className="grid grid-cols-4 gap-2">
              {product.nutrition.map((n, ni) => (
                <div
                  key={n.label}
                  className={`text-center rounded-lg p-2 ${ni === 0 ? "bg-gold/8 border border-gold/15" : "bg-secondary/30"}`}
                >
                  <p
                    className={`font-display font-bold text-sm ${ni === 0 ? "text-gold" : "text-foreground"}`}
                  >
                    {n.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {n.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            data-ocid={`products.add_to_cart_button.${index + 1}`}
            className={`mt-auto w-full gap-2 font-display font-semibold transition-smooth ${
              added ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add to Cart — ₹{product.price}
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <div data-ocid="products.page">
      {/* Hero */}
      <section
        className="relative py-16 bg-secondary/20 overflow-hidden"
        data-ocid="products.hero_section"
      >
        {/* Gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/45 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pattern-peacock-feather opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <motion.div {...fadeUp()}>
            <p className="text-primary font-body text-sm uppercase tracking-widest font-medium mb-4">
              Pure Soy Nutrition
            </p>
            <h1 className="font-display font-bold text-5xl text-foreground tracking-tight leading-tight mb-4">
              Our Product Range
            </h1>
            {/* Gold ornamental divider */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Three premium products, one commitment — natural, honest,
              nutritious food for every lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section
        className="py-20 bg-background"
        data-ocid="products.grid_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality note */}
      <section
        className="py-16 bg-secondary/20"
        data-ocid="products.quality_section"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-2">
              Quality You Can Taste
            </h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Every product is made in small batches to ensure freshness, tested
              for nutritional integrity, and packed with love in eco-conscious
              packaging. No shortcuts, ever.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Non-GMO Certified",
                "Pesticide-Free",
                "No Artificial Preservatives",
                "Lab Tested",
                "Cold-Pressed",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-primary/30 text-primary font-body text-sm px-4 py-1.5"
                >
                  ✓ {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
