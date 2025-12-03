import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build for Sri Lanka - Open Source Initiative",
  description:
    "Developing open source software for Sri Lanka community. Join us in building innovative solutions.",
  keywords: "Open Source, Sri Lanka, Community, Software Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
