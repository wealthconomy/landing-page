"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  Clock,
  Loader2,
  AlertCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const SUBJECT_OPTIONS = [
  "Partnership Query",
  "Investment & Savings Support",
  "Financial Education & Academy",
  "Account & Technical Support",
  "Press & Media Inquiries",
  "General Inquiry",
];

const INITIAL_FORM: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "Partnership Query",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage("Please fill in all required fields.");
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmittedData(formData);
      setIsSuccess(true);
      toast.success("Message sent successfully! Our team will get back to you shortly.");
    } catch (err: any) {
      const msg = err.message || "An unexpected error occurred. Please try again.";
      setErrorMessage(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setIsSuccess(false);
    setErrorMessage(null);
    setSubmittedData(null);
  };

  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[700px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-10 right-10 h-[350px] w-[350px] rounded-full bg-gold/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Contact Wealthconomy
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            We'd love to{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              hear from you
            </span>
          </h1>
          <p className="mt-3.5 text-base md:text-lg text-muted-foreground">
            Whether you have questions about smart wealth creation, partnerships, or need support,
            send us a message and our team will get back to you directly.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.45fr] items-start">
          {/* Contact Details Column */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-border/80 bg-surface-soft/80 p-6 backdrop-blur-xl space-y-5 shadow-sm">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Get in touch directly
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:hello@wealthconomy.org"
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.02] group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-semibold text-foreground">Email us</div>
                    <div className="mt-0.5 text-sm text-primary font-medium truncate">
                      hello@wealthconomy.org
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Direct inquiries to our admin & support team
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+2348116491114"
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.02] group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-semibold text-foreground">Phone support</div>
                    <div className="mt-0.5 text-sm text-foreground/90 font-medium">
                      +234 811 649 1114
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Mon – Fri, 9:00 AM – 5:00 PM WAT
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-semibold text-foreground">Live chat</div>
                    <div className="mt-0.5 text-sm text-foreground/90 font-medium">
                      24/7 Human support
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Available inside the Wealthconomy app
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-semibold text-foreground">Our offices</div>
                    <div className="mt-0.5 text-sm text-foreground/90 font-medium leading-relaxed">
                      Wuye, Abuja · The Growth Hub, Alagbaka, Akure, Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge Card */}
            <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-foreground/80">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>
                <strong className="text-foreground font-semibold">Fast response:</strong> Inquiries are
                routed directly to our admin team and answered within 24 hours.
              </span>
            </div>
          </div>

          {/* Form / Success Card */}
          <div className="rounded-3xl border border-border/80 bg-surface-soft/80 p-7 md:p-9 shadow-lg backdrop-blur-xl relative">
            {isSuccess ? (
              <div className="flex flex-col items-center py-8 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5 mb-4">
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Inquiry Sent Successfully!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  Thank you, <span className="font-medium text-foreground">{submittedData?.firstName}</span>.
                  Your message has been delivered directly to the Wealthconomy admin team. We will review
                  your inquiry and reply to <span className="font-medium text-foreground">{submittedData?.email}</span> within 24 hours.
                </p>

                {/* Submission summary snippet */}
                {submittedData && (
                  <div className="mt-6 w-full rounded-2xl border border-border/60 bg-background/70 p-4 text-left text-xs space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subject:</span>
                      <span className="font-medium text-foreground">{submittedData.subject}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Recipient:</span>
                      <span className="font-medium text-primary">Wealthconomy Admin Desk</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="mt-8 rounded-full border-border/80 hover:bg-background inline-flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    All fields marked with an asterisk (<span className="text-primary">*</span>) are required.
                  </p>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      First name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="e.g. Adebayo"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-1.5 w-full rounded-xl border border-border bg-background/90 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Last name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="e.g. Ogunlesi"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-1.5 w-full rounded-xl border border-border bg-background/90 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Email address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. adebayo@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1.5 w-full rounded-xl border border-border bg-background/90 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Subject <span className="text-primary">*</span>
                  </label>
                  <div className="mt-1.5 relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-border bg-background/90 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Message <span className="text-primary">*</span>
                    </label>
                    <span className="text-[11px] text-muted-foreground">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you'd like to explore, inquire about, or discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background/90 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full py-3 h-12 text-sm font-semibold shadow-md transition-all duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending to Admin...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
