"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Registration successful! A verification email has been sent. Please check your inbox.");
        setForm({ name: "", email: "", password: "" });
      } else {
        setMessage(data.error || "Registration failed.");
      }
    } catch {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-black text-white py-3 rounded-lg">
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}