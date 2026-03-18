import { Inter, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLoader from "@/app/components/ClientLoader";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-three-gamma-51.vercel.app"),
  applicationName: "Sankalp's Portfolio",
  title: {
    default: "Sankalp's Portfolio",
    template: "%s | Sankalp's Portfolio",
  },
  description:
    "Portfolio of Sankalp Saini, a Full Stack Developer specializing in React, Next.js, Node.js, and modern UI/UX with Tailwind CSS and Framer Motion.",
  keywords: [
    "Sankalp",
    "Sankalp Saini",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
  ],
  authors: [{ name: "Sankalp Saini" }],
  creator: "Sankalp Saini",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sankalp's Portfolio",
    title: "Sankalp's Portfolio",
    description:
      "Portfolio of Sankalp Saini, a Full Stack Developer specializing in React, Next.js, Node.js, and modern UI/UX with Tailwind CSS and Framer Motion.",
    images: [
      {
        url: "/assets/Sankalp.png",
        width: 800,
        height: 800,
        alt: "Sankalp Saini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp's Portfolio",
    description:
      "Portfolio of Sankalp Saini, a Full Stack Developer specializing in React, Next.js, Node.js, and modern UI/UX with Tailwind CSS and Framer Motion.",
    images: ["/assets/Sankalp.png"],
    creator: "@Arikalp_",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} antialiased`}
      >
        <ClientLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
