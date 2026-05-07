"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function WaitlistModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("You're on the list! 🎉");
      setEmail("");
      setCompany("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-md rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-[#0A0A0A]">Join the waitlist</h3>
            <p className="mt-1 text-sm text-[#6B7280]">Be first to build with NeuroNet AI</p>
          </div>
          <button onClick={onClose} className="text-sm text-[#6B7280] hover:text-[#0A0A0A]">
            Close
          </button>
        </div>
        <form className="space-y-3" onSubmit={onSubmit}>
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[#0A0A0A] outline-none transition focus:border-[#0066FF]"
          />
          <input
            type="text"
            placeholder="Company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[#0A0A0A] outline-none transition focus:border-[#0066FF]"
          />
          <button
            disabled={loading}
            className="h-12 w-full rounded-full bg-[#0A1628] text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
          <p className="text-center text-xs text-[#6B7280]">We&apos;ll never spam you</p>
          {success ? <p className="text-sm text-[#0066FF]">{success}</p> : null}
          {error ? <p className="text-sm text-red-500">{error}</p> : null}
        </form>
      </motion.div>
    </div>
  );
}
