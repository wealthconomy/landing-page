import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy — Wealthconomy",
  description: "Information about how we use cookies on Wealthconomy.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 14, 2026">
      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">01.</span>
          What are Cookies?
        </h2>
        <p>
          Cookies are small text files that enhance your experience. They help us remember your 
          preferences and ensure our wealth engine runs smoothly on your device.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">02.</span>
          How We Use Them
        </h2>
        <p>
          We use cookies to maintain your session security, analyze platform performance, and 
          personalize your dashboard. We categorize them into three core types:
        </p>
        <div className="grid gap-4 mt-8 not-prose">
          {[
            { type: "Essential", desc: "Required for login and core security." },
            { type: "Functional", desc: "Remembering your theme and preferences." },
            { type: "Analytics", desc: "Helping us optimize the user experience." },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-6 rounded-2xl border border-border bg-surface-soft/40 p-6 transition-all hover:bg-surface-soft">
              <div className="text-sm font-black uppercase tracking-widest text-primary w-24 shrink-0">{item.type}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">03.</span>
          Control
        </h2>
        <p>
          You have full control. You can manage or block cookies through your browser settings, 
          though some parts of the Wealthconomy engine may require them to function correctly.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">04.</span>
          Privacy First
        </h2>
        <p>
          Our cookies do not store sensitive financial data. Your security is our primary 
          architecture, and we use cookies only to facilitate a seamless, structured experience.
        </p>
      </section>
    </LegalLayout>
  );
}
