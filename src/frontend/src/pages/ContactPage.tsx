import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
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

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleBlur = (field: keyof FormState) => () => {
    const e = validate();
    if (e[field]) setErrors((prev) => ({ ...prev, [field]: e[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section
        className="relative py-20 bg-secondary/20 overflow-hidden"
        data-ocid="contact.hero_section"
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
              We'd Love to Hear From You
            </p>
            <h1 className="font-display font-bold text-5xl text-foreground tracking-tight leading-tight mb-4">
              Get in Touch
            </h1>
            {/* Gold ornamental divider */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-xs">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Whether you have a question about our products, want to place a
              bulk order, or simply want to say hello — we're here for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 bg-background" data-ocid="contact.main_section">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div className="lg:col-span-2 space-y-6" {...fadeUp()}>
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground tracking-tight mb-6">
                  Contact Information
                </h2>
              </div>

              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210",
                  ocid: "contact.phone_link",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@keshavagrofoods.in",
                  href: "mailto:hello@keshavagrofoods.in",
                  ocid: "contact.email_link",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Pune, Maharashtra, India — 411001",
                  href: undefined,
                  ocid: "contact.location",
                },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="border-border shadow-subtle hover:shadow-elevated transition-smooth"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          data-ocid={item.ocid}
                          className="text-sm text-muted-foreground hover:text-primary transition-smooth font-body"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          data-ocid={item.ocid}
                          className="text-sm text-muted-foreground font-body"
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-border bg-secondary/20">
                <CardContent className="p-5">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-sm font-body">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Monday – Saturday</span>
                      <span>9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact form */}
            <motion.div className="lg:col-span-3" {...fadeUp(0.1)}>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                  data-ocid="contact.form_success_state"
                >
                  <CheckCircle className="w-16 h-16 text-primary mb-5" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground font-body max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will respond within 24
                    business hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 font-display"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Card className="border-border shadow-subtle">
                  <CardContent className="p-8">
                    <h2 className="font-display font-bold text-xl text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                      data-ocid="contact.form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-name"
                            className="font-display font-medium text-sm"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="contact-name"
                            placeholder="Priya Sharma"
                            value={form.name}
                            onChange={handleChange("name")}
                            onBlur={handleBlur("name")}
                            data-ocid="contact.name_input"
                            className={
                              errors.name
                                ? "border-destructive focus-visible:ring-destructive"
                                : ""
                            }
                            aria-describedby={
                              errors.name ? "contact-name-error" : undefined
                            }
                          />
                          {errors.name && (
                            <p
                              id="contact-name-error"
                              className="text-xs text-destructive font-body"
                              data-ocid="contact.name_field_error"
                            >
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-email"
                            className="font-display font-medium text-sm"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="contact-email"
                            type="email"
                            placeholder="priya@example.com"
                            value={form.email}
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            data-ocid="contact.email_input"
                            className={
                              errors.email
                                ? "border-destructive focus-visible:ring-destructive"
                                : ""
                            }
                            aria-describedby={
                              errors.email ? "contact-email-error" : undefined
                            }
                          />
                          {errors.email && (
                            <p
                              id="contact-email-error"
                              className="text-xs text-destructive font-body"
                              data-ocid="contact.email_field_error"
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-subject"
                          className="font-display font-medium text-sm"
                        >
                          Subject
                        </Label>
                        <Input
                          id="contact-subject"
                          placeholder="Product inquiry, bulk order, feedback..."
                          value={form.subject}
                          onChange={handleChange("subject")}
                          data-ocid="contact.subject_input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-message"
                          className="font-display font-medium text-sm"
                        >
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          value={form.message}
                          onChange={handleChange("message")}
                          onBlur={handleBlur("message")}
                          data-ocid="contact.message_textarea"
                          className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          aria-describedby={
                            errors.message ? "contact-message-error" : undefined
                          }
                        />
                        {errors.message && (
                          <p
                            id="contact-message-error"
                            className="text-xs text-destructive font-body"
                            data-ocid="contact.message_field_error"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        data-ocid="contact.submit_button"
                        className="w-full gap-2 font-display font-semibold shadow-subtle hover:shadow-elevated transition-smooth"
                      >
                        {loading ? (
                          <span data-ocid="contact.loading_state">
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
