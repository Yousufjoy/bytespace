import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const db = await connectDB();
        if (!db) return null;

        const user = await db.collection("users").findOne({
          email: credentials.email,
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        // ✅ Block unverified users
        if (!user.isVerified) {
          throw new Error("EMAIL_NOT_VERIFIED");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user",
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const db = await connectDB();
        if (!db) return false;
        const existingUser = await db.collection("users").findOne({
          email: user.email,
        });

        if (!existingUser) {
          await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            role: "employee",
            isVerified: true,
            createdAt: new Date(),
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
  },

  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };