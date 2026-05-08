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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-md transition-all duration-300">
      {showFounderLetter ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel w-full max-w-2xl rounded-3xl p-8 shadow-2xl md:p-10"
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-3xl font-extrabold brand-gradient-text">You&apos;re on the list! 🎉</h3>
            <button
              onClick={() => {
                setShowFounderLetter(false);
                setSuccess("");
                onClose();
              }}
              className="smooth-transition text-sm text-[#6B7280] hover:text-[#0A0A0A]"
            >
              Close
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#E5E7EB]/60 glass-blur bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Letter from the founder</p>
            <p className="mt-4 text-base leading-relaxed text-[#0A0A0A]">
              Hey, I&apos;m <span className="font-semibold">Aashu Prajapati</span>. Thank you for joining NeuroNet AI this early.
              We are building the world&apos;s first truly agentic startup builder, and your trust means everything.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#0A0A0A]">
              You&apos;ll get early access, private product updates, and first invites before public launch. See you inside.
            </p>
            <p className="mt-5 text-base font-semibold soft-gradient-text">- Aashu Prajapati, Founder, NeuroNet AI</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 flex justify-end"
          >
            <button
              onClick={() => {
                setShowFounderLetter(false);
                setSuccess("");
                onClose();
              }}
              className="group h-11 rounded-full bg-[#0A1628] px-7 text-sm font-semibold text-white smooth-transition hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      ) : null}
      {!showFounderLetter ? (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full max-w-md rounded-3xl p-8 shadow-2xl"
      >
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-[#0A0A0A]">Join the waitlist</h3>
            <p className="mt-1 text-sm text-[#6B7280]">Be first to build with NeuroNet AI</p>
          </div>
          <button onClick={onClose} className="smooth-transition text-sm text-[#6B7280] hover:text-[#0A0A0A]">
            Close
          </button>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <motion.input
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            required
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-blur h-12 w-full rounded-xl px-4 text-[#0A0A0A] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30"
          />
          <motion.input
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            type="text"
            placeholder="Company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="glass-blur h-12 w-full rounded-xl px-4 text-[#0A0A0A] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/30"
          />
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group h-12 w-full rounded-full bg-[#0A1628] text-sm font-semibold text-white smooth-transition hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-center text-xs text-[#6B7280]"
          >
            We&apos;ll never spam you
          </motion.p>
          {success ? <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-[#0066FF]">{success}</motion.p> : null}
          {error ? <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">{error}</motion.p> : null}
        </form>
      </motion.div>
      ) : null}
    </div>
  );
}
