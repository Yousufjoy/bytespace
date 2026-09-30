import type { Metadata } from "next";
import AuthProvider from "./../../Providers/AuthProvider";

export const metadata: Metadata = {
  title: "ByteSpace - Online Learning Platform",
  description: "Get access to hundreds of courses available",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      
      {children}
     
    </AuthProvider>
  );
}
