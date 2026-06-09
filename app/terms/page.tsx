import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms and Conditions — Wealthconomy",
  description: "Terms and conditions governing the use of the Wealthconomy platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="June 1, 2026">
      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">01.</span>
          Acceptance of Terms
        </h2>
        <p>
          By accessing or using Wealthconomy, you agree to be bound by these Terms and Conditions. These terms form a legally binding agreement between you and Wealthconomy. If you do not agree, please discontinue use of the platform.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">02.</span>
          Eligibility
        </h2>
        <p>
          To access our services, you must satisfy the following criteria:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>Be at least 18 years old or possess lawful parental/guardian authorization.</li>
          <li>Provide accurate, current, and truthful information during account registration.</li>
          <li>Comply with all local and international laws and financial regulations.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">03.</span>
          Account Registration
        </h2>
        <p>
          When you create an account with us, you acknowledge and agree that you are solely responsible for:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>Maintaining the absolute confidentiality of your login credentials and security PINs.</li>
          <li>Ensuring all information provided is accurate and promptly updated.</li>
          <li>Notifying Wealthconomy support immediately of any suspected unauthorized access.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">04.</span>
          Wealthconomy Services
        </h2>
        <p>
          Wealthconomy provides technological tools for financial growth, including savings products, investment opportunities, financial literacy resources, and social impact initiatives.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-amber-700 font-semibold leading-relaxed">
          WARNING: Wealthconomy is a financial technology platform, not a licensed commercial bank. We custody user funds through licensed and regulated partner banks. We do not guarantee investment performance unless explicitly stated.
        </div>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">05.</span>
          Investments and Risk Disclosure
        </h2>
        <p>
          All investments carry risk. By using our services, you acknowledge that:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>Investments carry inherent market and liquidity risks.</li>
          <li>Past performance is not a reliable indicator or guarantee of future returns.</li>
          <li>Market conditions can affect asset prices and yield outcomes.</li>
          <li>Wealthconomy does not guarantee investment profits or yield rates.</li>
        </ul>
        <p className="mt-4">
          We strongly encourage users to seek independent financial advice where appropriate before allocating funds.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">06.</span>
          User Responsibilities
        </h2>
        <p>
          You agree not to engage in prohibited platform activities, including:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>Providing false, misleading, or fraudulent information during verification.</li>
          <li>Engaging in fraudulent activities, money laundering, or coordinate platform manipulation.</li>
          <li>Attempting unauthorized access to system databases or executing security exploits.</li>
          <li>Using the platform for any illegal purpose or violating financial sanctions.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">07.</span>
          KYC and Compliance
        </h2>
        <p>
          To maintain security and comply with anti-money laundering regulations, Wealthconomy reserves the right to:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>Verify user identities utilizing official governmental databases.</li>
          <li>Request additional identification documents, utility bills, or proof of income source.</li>
          <li>Suspend or restrict access to accounts undergoing regulatory and compliance reviews.</li>
          <li>Report suspicious transactions to relevant law enforcement and financial authorities.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">08.</span>
          Fees and Charges
        </h2>
        <p>
          Applicable transactional and management fees will be disclosed to you prior to the execution of any transaction. Wealthconomy reserves the right to modify fees at any time, subject to reasonable advance notice as required by law.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">09.</span>
          Intel Property
        </h2>
        <p>
          All platform content, codebases, software designs, user interfaces, branding, logos, trademarks, and educational resources are the exclusive property of Wealthconomy and its licensors, protected by intellectual property laws.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">10.</span>
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable law, Wealthconomy shall not be held liable for:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>Indirect, incidental, punitive, or consequential damages.</li>
          <li>Loss of profits, revenue, or investment capital resulting from market fluctuations.</li>
          <li>Platform service interruptions beyond our reasonable control (network failures, force majeure).</li>
          <li>Losses resulting from user negligence in securing account credentials.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">11.</span>
          Suspension and Termination
        </h2>
        <p>
          We reserve the right to suspend, freeze, or terminate your account and platform access if:
        </p>
        <ul className="mt-4 space-y-2.5">
          <li>You violate these Terms and Conditions or our security policies.</li>
          <li>We suspect fraudulent, unauthorized, or illegal activities on your account.</li>
          <li>We are required to do so by court order or regulatory directive.</li>
        </ul>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">12.</span>
          Force Majeure
        </h2>
        <p>
          Wealthconomy shall not be liable for any delays, performance failures, or service interruptions resulting from acts of God, civil unrest, grid blackouts, telecommunication failures, government restrictions, or other occurrences beyond our reasonable control.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">13.</span>
          Dispute Resolution
        </h2>
        <p>
          Parties shall first attempt to resolve all disputes amicably through consultation and mediation. Where an amicable settlement cannot be reached, the dispute shall be referred to and resolved by arbitration in accordance with applicable arbitration laws.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">14.</span>
          Governing Law
        </h2>
        <p>
          These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the Federal Republic of Nigeria.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">15.</span>
          Amendments
        </h2>
        <p>
          We reserve the right to amend these Terms and Conditions at any time. Continued use of our platform and website following any updates constitutes your explicit acceptance of the revised Terms and Conditions.
        </p>
      </section>

      <section>
        <h2>
          <span className="text-primary mr-3 font-mono text-xl font-bold">16.</span>
          Contact Information
        </h2>
        <p>
          For any questions, legal queries, or technical support regarding these Terms and Conditions, please contact us:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 not-prose">
          <div className="p-4 rounded-xl border border-border bg-surface-soft/40">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Email Support</span>
            <a href="mailto:support@wealthconomy.org" className="text-sm font-semibold text-primary hover:underline">
              support@wealthconomy.org
            </a>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface-soft/40">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Official Website</span>
            <a href="https://www.wealthconomy.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
              www.wealthconomy.org
            </a>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
