import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { Lock, FileText, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Wealthconomy",
  description: "How we collect, use, process, and safeguard your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 1, 2026">
      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">01.</span>
          Introduction
        </h2>
        <p>
          Welcome to Wealthconomy ("Wealthconomy," "we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, process, and safeguard your information when you access our website, mobile applications, products, and services.
        </p>
        <p className="mt-4">
          By accessing or using Wealthconomy, you consent to the practices described in this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">02.</span>
          Information We Collect
        </h2>
        <p>
          To power your personalized wealth journey and ensure compliance with regulatory standards, we collect several categories of information:
        </p>
        
        <div className="grid gap-6 md:grid-cols-3 mt-8 not-prose">
          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" /> Personal Info
            </div>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>Full name & gender</li>
              <li>Date of birth</li>
              <li>Residential address</li>
              <li>Email & phone number</li>
              <li>Govt-issued ID</li>
              <li>BVN & NIN verification</li>
              <li>Employment & income</li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Financial Info
            </div>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>Savings transactions</li>
              <li>Investment transactions</li>
              <li>Wallet balances</li>
              <li>Payment history</li>
              <li>Bank account details</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Lock className="w-4 h-4" /> Technical Info
            </div>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
              <li>Device information</li>
              <li>IP address</li>
              <li>Browser type & OS</li>
              <li>Login logs</li>
              <li>Website usage data</li>
              <li>Cookies & analytics</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">03.</span>
          How We Use Your Information
        </h2>
        <p>
          We process your personal information only for legitimate business purposes, including:
        </p>
        <ul className="grid gap-3 md:grid-cols-2 mt-6 not-prose text-sm text-muted-foreground">
          {[
            "Create and manage your account",
            "Verify your identity and conduct KYC checks",
            "Process transactions and investments",
            "Provide dedicated customer support",
            "Improve platform functionality & performance",
            "Prevent fraud and unauthorized activities",
            "Comply with legal and regulatory requirements",
            "Send important updates and service communications",
            "Provide financial education and recommendations"
          ].map((use, idx) => (
            <li key={idx} className="flex items-center gap-2 bg-background border border-border/60 rounded-xl p-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[10px]">{idx + 1}</span>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">04.</span>
          Legal Basis for Processing
        </h2>
        <p>
          We process personal data based on the following legal foundations:
        </p>
        <div className="grid gap-4 md:grid-cols-2 mt-6 not-prose">
          {[
            { title: "Consent", desc: "Your explicit authorization for specific processing tasks." },
            { title: "Contractual", desc: "Required to deliver our platform services and enforce our terms." },
            { title: "Compliance", desc: "Compliance with strict legal and financial regulatory obligations." },
            { title: "Legitimate Interests", desc: "To improve services, prevent fraud, and secure our network infrastructure." }
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border p-4 bg-background/50">
              <span className="text-xs font-bold text-primary block uppercase tracking-wider mb-1">{item.title}</span>
              <span className="text-xs text-muted-foreground leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">05.</span>
          Information Sharing
        </h2>
        <p>
          We do not sell, rent, or lease your personal information to third parties. To execute transactions and comply with financial regulations, we may share relevant information with:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li><strong>Licensed Financial Partners:</strong> Custodial banks and regulatory clearinghouses where your funds reside.</li>
          <li><strong>Asset Management Companies:</strong> Partners assisting with sustainable growth yields.</li>
          <li><strong>Payment Processors:</strong> Licensed gateways managing secure deposits and transfers.</li>
          <li><strong>Identity Verification Providers:</strong> Services performing KYC, AML, BVN, and NIN checks.</li>
          <li><strong>Regulatory Authorities:</strong> Governing bodies and law enforcement when legally required.</li>
          <li><strong>Auditors & Professional Advisers:</strong> Certified entities validating security and legal compliance.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">06.</span>
          Data Security
        </h2>
        <p>
          We implement rigorous administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes bank-grade encryption protocols (AES-256 at rest, TLS 1.3 in transit) and strict access controls.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">07.</span>
          Data Retention
        </h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, satisfy regulatory retention requirements for financial institutions, resolve disputes, and enforce our legal agreements.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">08.</span>
          Your Rights
        </h2>
        <p>
          Subject to applicable laws, you possess the right to:
        </p>
        <ul className="mt-4 space-y-2">
          <li>Access the personal information we hold about you.</li>
          <li>Request the correction of inaccurate or incomplete details.</li>
          <li>Request deletion of your data (subject to regulatory holding requirements).</li>
          <li>Object to or request restrictions on specific processing activities.</li>
          <li>Withdraw your consent at any time where processing is consent-based.</li>
          <li>Request the transfer of your data to another provider (data portability).</li>
        </ul>
        <p className="mt-4">
          All formal requests should be directed to our Data Protection Officer.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">09.</span>
          Cookies
        </h2>
        <p>
          We use cookies and similar tracking technologies to analyze website traffic, remember your user preferences, monitor dashboard performance, and enhance platform security. You can manage cookie preferences via your web browser configuration.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">10.</span>
          Third-Party Links
        </h2>
        <p>
          Our platform may contain links to third-party sites or services (such as community groups or calculators). We are not responsible for the privacy practices, policies, or content of those external websites.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">11.</span>
          Children's Privacy
        </h2>
        <p>
          Our services are not intended for individuals under the age of 18 without appropriate parental or legal guardian consent. We do not knowingly collect personal data from minors without strict authorization.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">12.</span>
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically to reflect shifts in technology, compliance requirements, or operational updates. The most current version will always be published on our platform with the updated effective date.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">13.</span>
          Contact Information
        </h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us:
        </p>
        <div className="mt-4 p-4 rounded-2xl border border-border bg-surface-soft/40 max-w-sm">
          <p className="text-sm font-semibold text-foreground">Data Protection Officer</p>
          <a href="mailto:privacy@wealthconomy.com" className="text-sm text-primary hover:underline font-medium mt-1 block">
            privacy@wealthconomy.com
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
