"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [done, setDone] = useState(false);
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Contact
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            We'd love to <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">hear from you</span>.
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Questions, partnerships, or press: pick a channel and we'll be in touch within 24 hours.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {[
              { icon: Mail, title: "Email", body: "hello@wealthconomy.com" },
              { icon: MessageCircle, title: "Live chat", body: "In-app, 24/7 with humans" },
              { icon: MapPin, title: "Office", body: "Lekki, Lagos · Nigeria" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-surface-soft/60 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.body}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="rounded-3xl border border-border bg-surface-soft/60 p-8"
          >
            {done ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                <h3 className="mt-4 font-display text-xl font-semibold">Message sent.</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" />
                  <Field label="Last name" />
                </div>
                <Field label="Email" type="email" />
                <Field label="Subject" />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea required rows={5} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Send message <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input required type={type} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}

