"use client";

import { useState, Suspense } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect");
  const verified = searchParams.get("verified");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error === "EMAIL_NOT_VERIFIED") {
        setError("Your email is not verified. Please check your inbox.");
      } else if (res?.error) {
        setError("Invalid email or password.");
      } else {
        const session = await getSession();
        const role = session?.user?.role;

        if (redirectTo) router.push(redirectTo);
        else if (role === "admin") router.push("/admin");
        else router.push("/");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-gray-500 text-center mb-6">Login to your account</p>

      {verified && (
        <p className="text-green-600 text-sm text-center mb-4 bg-green-50 p-2 rounded">
          Email verified successfully! Please login.
        </p>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="text-right">
          <Link href="/forgot-password" className="text-sm text-blue-500">
            Forgot password?
          </Link>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button className="w-full bg-black text-white py-3 rounded-lg flex justify-center">
          {loading ? <Loader2 className="animate-spin" /> : "Login"}
        </button>
      </form>

      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <Link href="/registration" className="text-blue-500">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}