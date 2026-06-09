import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { ShieldCheck, Lock, Server, Users, UserCheck, Eye, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Policy — Wealthconomy",
  description: "Our security policy, data protection architecture, and commitment to safeguarding your funds and transactions.",
};

export default function SecurityPage() {
  return (
    <LegalLayout title="Security Policy" lastUpdated="June 1, 2026">
      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">01.</span>
          Our Commitment to Security
        </h2>
        <p>
          At Wealthconomy, the security of our users' information, funds, and transactions is a top priority. We are committed to maintaining robust security measures designed to protect against unauthorized access, misuse, loss, disclosure, alteration, and destruction of data.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">02.</span>
          How We Protect Your Information
        </h2>
        <p>
          We employ multiple defensive layers and strict architectural patterns to secure our platform:
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8 not-prose">
          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Lock className="w-4 h-4" /> 1. Data Encryption
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We utilize industry-standard encryption technologies to protect sensitive information during transmission and storage. Information exchanged between users and our platform is secured using encrypted communication protocols.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Server className="w-4 h-4" /> 2. Secure Infrastructure
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our systems are hosted within secure environments that implement multiple layers of protection, including firewalls, intrusion detection/prevention systems, network monitoring, access controls, and continuous security updates.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4" /> 3. Access Management
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Access to customer information is strictly restricted to authorized personnel who require such access for legitimate business purposes. Access rights are reviewed periodically and governed by internal security procedures.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" /> 4. Identity & KYC
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To protect our users and comply with regulatory requirements, Wealthconomy conducts Know Your Customer (KYC) verification processes and may request additional information where necessary.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> 5. Fraud Monitoring
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We maintain systems and processes designed to identify, monitor, investigate, and prevent suspicious or fraudulent activities. Transactions may be reviewed and flagged where unusual activity is detected.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-soft/40 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 6. Third-Party Standards
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We work with licensed financial institutions, payment processors, and technology partners that maintain appropriate security, compliance, and regulatory standards.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface-soft/40 p-5 mt-6 not-prose">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
            <Activity className="w-4 h-4" /> 7. Continuous Monitoring
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Our systems are monitored to identify potential vulnerabilities, threats, and unauthorized activities. Security assessments and reviews are conducted periodically to strengthen our defenses.
          </p>
        </div>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">03.</span>
          User Security Responsibilities
        </h2>
        <p>
          Security is a joint responsibility. We encourage our users to maintain strong personal security hygiene:
        </p>
        <ul className="mt-4 space-y-2">
          <li>Create strong and unique passwords for your account.</li>
          <li>Enable multi-factor authentication (2FA) where available.</li>
          <li>Protect login credentials, security PINs, and OTP codes.</li>
          <li>Avoid sharing account information or devices with third parties.</li>
          <li>Notify Wealthconomy immediately of any suspected unauthorized access.</li>
          <li>Verify the authenticity of all communications before responding to requests for personal information.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">04.</span>
          Security Disclaimer
        </h2>
        <p>
          While Wealthconomy employs reasonable and industry-accepted security measures, no electronic transmission, storage system, or internet-based service can be guaranteed to be completely secure. Users acknowledge and accept the inherent risks associated with digital communications and online transactions.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">05.</span>
          Reporting Security Concerns
        </h2>
        <p>
          If you believe your account has been compromised or you discover a potential security vulnerability, please contact us immediately through our official support channels:
        </p>
        <div className="mt-4 p-4 rounded-2xl border border-border bg-surface-soft/40 max-w-sm">
          <p className="text-sm font-semibold text-foreground">Security Response Team</p>
          <a href="mailto:security@wealthconomy.org" className="text-sm text-primary hover:underline font-medium mt-1 block">
            security@wealthconomy.org
          </a>
        </div>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">06.</span>
          Updates to this Security Policy
        </h2>
        <p>
          We may update this Security Policy periodically to reflect changes in technology, regulatory requirements, or business operations. Updated versions will be published on our website and platform.
        </p>
      </section>
    </LegalLayout>
  );
}
