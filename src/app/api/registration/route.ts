import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/mailer";

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const db = await connectDB();
    if (!db) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }

    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      role: "user",
      isVerified: false,
      verificationToken,
      verificationTokenExpiry,
      createdAt: new Date(),
    });

    // ✅ Send verification email
    try {
      await sendVerificationEmail(email, verificationToken);
    } catch (err) {
      console.error("Verification email failed:", err);
      return NextResponse.json(
        { error: "Account created but failed to send verification email. Check EMAIL_USER and EMAIL_PASS." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Registration successful! Please check your email to verify your account." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};