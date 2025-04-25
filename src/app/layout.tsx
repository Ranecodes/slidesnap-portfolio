import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlideSnap Portfolio",
  description: "A porftfolio showcasing the slide presentations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} __variable_4d318d __variable_ea5f4b antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem={true}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

