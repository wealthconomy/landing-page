import type { Metadata } from "next";
import { InviteClient } from "./[code]/invite-client";

export const metadata: Metadata = {
  title: "Join Wealthconomy",
  description: "Create your account and start building wealth with automated savings and disciplined investing.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Join me on Wealthconomy",
    description: "Create your account and start building wealth with automated savings and disciplined investing.",
    url: "https://wealthconomy.org/invite",
    siteName: "Wealthconomy",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wealthconomy Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join me on Wealthconomy",
    description: "Create your account and start building wealth with automated savings and disciplined investing.",
    images: ["/og-image.jpg"],
  },
};

export default function GenericInvitePage() {
  return <InviteClient code={null} />;
}
