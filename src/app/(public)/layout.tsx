import type { Metadata } from "next";
import AuthProvider from "./../../Providers/AuthProvider";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

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
    <div className="min-h-screen w-full bg-[#0b56fd] text-white selection:bg-[#c6f800] selection:text-black">
      <AuthProvider>
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </div>
  );
}
