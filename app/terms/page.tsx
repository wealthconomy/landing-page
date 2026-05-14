import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { FileText, UserCheck, ShieldAlert, Scale, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use — Wealthconomy",
  description: "Terms and conditions for using the Wealthconomy platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="May 14, 2026">
      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          1. Agreement
        </h2>
        <p>
          By accessing Wealthconomy, you agree to be bound by these Terms of Use. This is a legally 
          binding agreement between you and **Wealthconomy Technologies Limited**.
        </p>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserCheck className="h-5 w-5" />
          </div>
          2. Eligibility
        </h2>
        <p>
          To use our platform, you must be at least 18 years old and have the legal capacity to enter into 
          binding contracts. You are responsible for ensuring all data provided during registration is 
          accurate and current.
        </p>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ShieldAlert className="h-5 w-5" />
          </div>
          3. Prohibited Conduct
        </h2>
        <div className="grid gap-4 md:grid-cols-3 mt-8 not-prose">
          {[
            { title: "Fraud", desc: "No identity theft or misrepresentation." },
            { title: "Abuse", desc: "No reverse engineering or hacking." },
            { title: "Misuse", desc: "No money laundering or illegal acts." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
              <div className="text-[10px] font-black uppercase tracking-widest text-destructive mb-1">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Scale className="h-5 w-5" />
          </div>
          4. Liability
        </h2>
        <p>
          Wealthconomy is a technology platform. While we provide tools for structured savings, all 
          financial decisions remain yours. We are not liable for any market-driven fluctuations or 
          user-directed actions.
        </p>
      </section>

      <section>
        <h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Globe className="h-5 w-5" />
          </div>
          5. Jurisdiction
        </h2>
        <p>
          These terms are governed by the laws of the **Federal Republic of Nigeria**. Any disputes 
          will be resolved exclusively within the Nigerian court system.
        </p>
      </section>
    </LegalLayout>
  );
}
