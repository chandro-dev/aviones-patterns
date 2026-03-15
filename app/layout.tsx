import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import { AirportShell } from "@/components/layout/AirportShell";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AeroPattern Terminal",
  description:
    "Demo academica para explicar POO, Factory Method y Abstract Factory con aviones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AirportShell>{children}</AirportShell>
      </body>
    </html>
  );
}
