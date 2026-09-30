import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "./components/Shared/LayoutShell";
import AuthProvider from "../Providers/AuthProvider";
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
        <AuthProvider>
          <LayoutShell>{children}</LayoutShell>
        </AuthProvider>
      </body>
    </html>
  );
}
