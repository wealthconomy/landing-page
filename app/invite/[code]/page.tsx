import type { Metadata } from "next";
import { InviteClient } from "./invite-client";

interface PageProps {
  params: Promise<{ code: string }>;
}

const CODE_REGEX = /^[A-Z0-9]{4,16}$/;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const isValid = typeof code === "string" && CODE_REGEX.test(code);
  const cleanCode = isValid ? code : "";

  return {
    title: "Join Wealthconomy",
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: "Join me on Wealthconomy",
      description: isValid
        ? "Create your account with this referral code and start building wealth."
        : "Create your account and start building wealth with automated savings and disciplined investing.",
      url: isValid
        ? `https://wealthconomy.org/invite/${cleanCode}`
        : "https://wealthconomy.org/invite",
      siteName: "Wealthconomy",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Wealthconomy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Join me on Wealthconomy",
      description: isValid
        ? "Create your account with this referral code and start building wealth."
        : "Create your account and start building wealth with automated savings and disciplined investing.",
      images: ["/og-image.jpg"],
    },
  };
}

export default async function InvitePage({ params }: PageProps) {
  const { code } = await params;
  const isValid = typeof code === "string" && CODE_REGEX.test(code);
  const validCode = isValid ? code : null;

  return <InviteClient code={validCode} />;
}
