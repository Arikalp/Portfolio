import { GeistSans, GeistMono } from 'geist/font'
import "./globals.css";

export const metadata = {
  title: "Sankalp's Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
