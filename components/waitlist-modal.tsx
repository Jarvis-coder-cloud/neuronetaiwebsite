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
  const [showFounderLetter, setShowFounderLetter] = useState(false);

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
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to submit");
      setSuccess("You're on the list! 🎉");
      setShowFounderLetter(true);
      setEmail("");
      setCompany("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 p-4 backdrop-blur-sm">
      {showFounderLetter ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.10)] md:p-10"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-3xl font-extrabold brand-gradient-text">You&apos;re on the list! 🎉</h3>
            <button
              onClick={() => {
                setShowFounderLetter(false);
                setSuccess("");
                onClose();
              }}
              className="text-sm text-[#6B7280] hover:text-[#0A0A0A]"
            >
              Close
            </button>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Letter from the founder</p>
            <p className="mt-4 text-base leading-relaxed text-[#0A0A0A]">
              Hey, I&apos;m <span className="font-semibold">Aashu Prajapati</span>. Thank you for joining NeuroNet AI this early.
              We are building the world&apos;s first truly agentic startup builder, and your trust means everything.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#0A0A0A]">
              You&apos;ll get early access, private product updates, and first invites before public launch. See you inside.
            </p>
            <p className="mt-5 text-base font-semibold soft-gradient-text">- Aashu Prajapati, Founder, NeuroNet AI</p>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                setShowFounderLetter(false);
                setSuccess("");
                onClose();
              }}
              className="h-11 rounded-full bg-[#0A1628] px-6 text-sm font-semibold text-white"
            >
              Continue
            </button>
          </div>
        </motion.div>
      ) : null}
      {!showFounderLetter ? (
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
      ) : null}
    </div>
  );
}
