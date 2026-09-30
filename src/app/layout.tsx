import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "./components/Shared/LayoutShell";

export const metadata: Metadata = {
  title: "Nextjs App",
  description: "Nextjs App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}