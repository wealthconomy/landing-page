import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { Shield, Eye, Lock, Share2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Wealthconomy",
  description: "How we protect and manage your data at Wealthconomy.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 14, 2026">
      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Shield className="h-5 w-5" />
          </div>
          1. Overview
        </h2>
        <p>
          At Wealthconomy, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you visit our website and use our wealth management 
          platform. We've built our infrastructure on the principle of **radical transparency**.
        </p>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Eye className="h-5 w-5" />
          </div>
          2. Information Collection
        </h2>
        <p>
          We collect information that you provide directly to us. This data is the fuel that powers your 
          personalized wealth journey:
        </p>
        <div className="grid gap-4 md:grid-cols-2 mt-8 not-prose">
          {[
            { title: "Identity", desc: "Name, email, and verified credentials." },
            { title: "Financials", desc: "Portfolio preferences and goals." },
            { title: "Compliance", desc: "KYC/AML documents as required." },
            { title: "Usage", desc: "How you interact with our engine." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface-soft/40 p-5 transition-colors hover:border-primary/30">
              <div className="text-sm font-black uppercase tracking-widest text-primary mb-1">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Lock className="h-5 w-5" />
          </div>
          3. Data Security
        </h2>
        <p>
          We use **military-grade** administrative, technical, and physical security measures to protect 
          your personal information. Our systems are audited regularly to ensure your wealth stays 
          private and protected.
        </p>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Share2 className="h-5 w-5" />
          </div>
          4. Information Sharing
        </h2>
        <p>
          We do not sell your personal information. We only share data with licensed partner banks 
          and service providers strictly necessary to execute your financial rhythms.
        </p>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          5. Contact
        </h2>
        <p>
          Questions about your data? Our privacy team is ready to help. 
          Reach us at **privacy@wealthconomy.com**.
        </p>
      </section>
    </LegalLayout>
  );
}
