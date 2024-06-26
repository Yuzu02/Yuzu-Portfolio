import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Analytics
import { SpeedInsights } from "@vercel/speed-insights/next";

// Components
import Header from "@/components/Header/Header";
import PageTransition from "@/components/util/PageTransition";
import StairTransition from "@/components/util/StairTransition";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Yuzu - Portfolio",
  description: "Full-Stack Developer Portfolio",
  applicationName: "Yuzu Portfolio",
  generator: "Next.js",
  keywords: [
    "Full-Stack",
    "Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio",
  ],
  authors: [{ name: "Yuzu", url: "https://github.com/Yuzu02" }],
  creator: "Yuzu",
  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
