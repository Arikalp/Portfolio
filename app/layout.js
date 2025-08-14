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
  title: "Portfolio",
  // ...other metadata
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
