import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";
import ClientLoader from "@/app/components/ClientLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  themeColor: "#0a0a0a",
  viewport: { width: "device-width", initialScale: 1, maximumScale: 5 },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLoader />
        {/* Global aceternity background lines (front) */}
        <BackgroundLines className="fixed inset-0 h-screen w-full bg-transparent pointer-events-none z-10" svgOptions={{ duration: 12 }} />
        {children}
      </body>
    </html>
  );
}
