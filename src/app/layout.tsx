import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RewardsHealth - Join the Longevity Movement",
  description: "Earn rewards for living longer, moving better, and unlocking your body's true healing potential. Access world-class stem cell therapy and become a certified longevity ambassador.",
  keywords: "longevity, health rewards, stem cell therapy, wellness, regenerative medicine, health ambassador",
  openGraph: {
    title: "RewardsHealth - Join the Longevity Movement",
    description: "Earn rewards for living longer, moving better, and unlocking your body's true healing potential.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}