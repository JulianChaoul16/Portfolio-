import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Julian Chaoul | Learn. Build. Reflect.", description: "The digital notebook of Julian Chaoul: systems, mathematics, and useful things." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}