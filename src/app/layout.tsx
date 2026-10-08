import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Glasgow University Tech Society | GUTS", description: "Hackathons, workshops, socials and a place to find your people in tech at the University of Glasgow." };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
