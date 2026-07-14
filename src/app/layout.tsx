import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = { title: "GU Tech Society — A better signal for future tech.", description: "The University of Glasgow's student technology community." };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={`${body.variable} ${display.variable}`}><body>{children}</body></html>;
}
