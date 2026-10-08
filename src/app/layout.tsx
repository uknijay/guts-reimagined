import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = { title: "Glasgow University Tech Society | GUTS", description: site.description };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
