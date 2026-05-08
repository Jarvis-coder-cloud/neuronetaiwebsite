"use client";

import { motion } from "framer-motion";
import { Check, Instagram } from "lucide-react";
import { SiteShell } from "../components/site-shell";
import { CountNumber, FadeUp } from "../components/ui";

const agents = [
  {
    name: "Brand Agent",
    desc: "Logo direction, naming, colors, brand voice, website copy",
  },
  {
    name: "Dev Agent",
    desc: "Full-stack MVP, tech stack, deployment, GitHub repo",
  },
  {
    name: "Marketing Agent",
    desc: "Content strategy, social posts, SEO, ad copy",
  },
  {
    name: "Sales Agent",
    desc: "Lead research, outreach, LinkedIn automation, CRM",
  },
  {
    name: "Ops Agent",
    desc: "Analytics, task management, KPI tracking, reports",
  },
];

const heroSocialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/neuronetai.in",
    Icon: Instagram,
  },
];

function TypingInput() {
  return (
    <motion.div
      className="glass-panel rounded-xl px-4 py-3 text-sm text-[#6B7280]"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
    >
      Build me a fintech startup for India...
    </motion.div>
  );
}

function AgentOrbit() {
  const nodes = [
    { name: "Brand Agent", x: "50%", y: "12%" },
    { name: "Dev Agent", x: "82%", y: "30%" },
    { name: "Marketing Agent", x: "82%", y: "70%" },
    { name: "Sales Agent", x: "18%", y: "70%" },
    { name: "Ops Agent", x: "18%", y: "30%" },
  ];

  return (
    <div className="glass-panel relative mx-auto h-[420px] w-full max-w-4xl overflow-hidden rounded-3xl p-6 md:h-[520px] border border-[#E5E7EB]/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,234,254,0.5),rgba(255,255,255,0.98)_60%)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DBEAFE]/70 bg-white/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#BAE6FD]/60"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node) => (
          <line key={node.name} x1="50" y1="50" x2={node.x.replace("%", "")} y2={node.y.replace("%", "")} stroke="#DBEAFE" strokeWidth="0.4" opacity="0.6" />
        ))}
      </svg>

      <motion.div
        className="absolute inset-0 z-10 m-auto flex h-40 w-40 items-center justify-center rounded-full border border-[#BFDBFE] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-center shadow-[0 20px 50px rgba(59, 130, 246, 0.25)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="px-4 text-base font-bold text-[#1D4ED8]">
          Your
          <br />
          Company
        </p>
      </motion.div>

      {nodes.map((node, i) => (
        <motion.div
          key={node.name}
          className="glass-panel smooth-transition absolute z-20 rounded-2xl border border-[#E5E7EB]/70 px-4 py-3 text-sm font-semibold text-[#0A0A0A] hover:border-[#3B82F6]/50 hover:shadow-lg"
          style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
          whileHover={{ scale: 1.08 }}
        >
          <span className="text-[#0A0A0A]">{node.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const openWaitlist = () => window.dispatchEvent(new Event("open-waitlist"));
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_42%,#FFFFFF_100%)]">
        <section className="container-shell py-10 md:py-16">
          <div className="glass-panel dotted-grid relative overflow-hidden rounded-[32px] border border-[#E5E7EB]/60 p-6 md:p-10">
            <motion.div className="gradient-blur pointer-events-none absolute -left-20 top-10 h-56 w-56 bg-[#DBEAFE]/70" animate={{ x: [0, 20, 0], y: [0, -18, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="gradient-blur pointer-events-none absolute -right-20 bottom-4 h-64 w-64 bg-[#EDE9FE]/60" animate={{ x: [0, -24, 0], y: [0, 16, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />

            <FadeUp className="relative mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass-blur px-4 py-2.5 text-sm font-medium text-[#0A1628]"
              >
                <span className="relative flex h-2 w-2 rounded-full bg-[#0066FF]">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#0066FF] opacity-75"></span>
                </span>
                Introducing NeuroNet AI ✦
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl font-extrabold tracking-tight text-[#0A0A0A] md:text-7xl"
              >
                World&apos;s First AI-Powered
                <br />
                <span className="brand-gradient-text">Startup Co-Pilot</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-lg text-[#6B7280]"
              >
                Type one sentence. NeuroNet deploys 5 specialist agents to build your brand, product, growth engine, and operations stack.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <motion.button
                  onClick={openWaitlist}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group h-12 min-w-52 rounded-full bg-[#0A1628] px-7 text-sm font-semibold text-white smooth-transition hover:shadow-lg hover:shadow-blue-500/40"
                >
                  Get Started for Free
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("product")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-panel group h-12 min-w-52 rounded-full px-7 text-sm font-semibold text-[#0A0A0A] smooth-transition hover:shadow-lg"
                >
                  See How It Works
                </motion.button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-4 text-sm text-[#9CA3AF]"
              >
                No credit card required
              </motion.p>
            </FadeUp>

            <motion.div className="relative mt-14 hidden items-center justify-center gap-3 md:flex">
              {heroSocialLinks.map(({ href, label, Icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="glass-panel flex h-12 w-12 items-center justify-center rounded-2xl text-[#0A1628] smooth-transition hover:text-[#0066FF]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="glass-panel absolute left-6 top-24 hidden w-44 rounded-2xl p-4 md:block"
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Agent Status</p>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#0A0A0A]">
                <span className="relative flex h-2 w-2 rounded-full bg-[#10B981]">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#10B981] opacity-75"></span>
                </span>
                Brand + Dev active
              </p>
            </motion.div>
            <motion.div
              className="glass-panel absolute bottom-20 right-8 hidden w-48 rounded-2xl p-4 md:block"
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">This week</p>
              <p className="mt-3 text-lg font-bold text-[#0A0A0A]">+124 founders</p>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/40 glass-blur bg-gradient-to-r from-[#F8FBFF] via-white to-[#FFF7E6] py-12">
          <FadeUp className="container-shell text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-[#6B7280]"
            >
              Businesses being built with NeuroNet AI
            </motion.p>
            <motion.div className="mt-8 grid grid-cols-2 gap-3 text-sm font-medium text-[#6B7280] md:grid-cols-6">
              {["Northstar Labs", "Vela Growth", "Synthex", "Arcly", "Mintflow", "Prism Ops"].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-panel smooth-transition rounded-2xl px-4 py-3 hover:border-[#3B82F6]/50"
                >
                  {name}
                </motion.div>
              ))}
            </motion.div>
          </FadeUp>
        </section>

        <section id="product" className="scroll-mt-28 bg-gradient-to-br from-[#F3F7FF] via-white to-[#F9FAFB] py-24">
          <div className="container-shell">
            <FadeUp>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold text-[#0A0A0A] md:text-6xl"
              >
                How it works
              </motion.h2>
            </FadeUp>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-12 grid gap-6 md:grid-cols-3"
            >
              <motion.div className="glass-panel smooth-transition rounded-3xl p-7 hover:shadow-lg" whileHover={{ y: -4 }}>
                <motion.div
                  className="inline-block text-3xl font-bold text-[#0A1628]"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                >
                  01
                </motion.div>
                <h3 className="mt-5 text-2xl font-bold text-[#0A0A0A]">Type your idea</h3>
                <div className="mt-5">
                  <TypingInput />
                </div>
              </motion.div>
              <motion.div className="glass-panel smooth-transition rounded-3xl p-7 hover:shadow-lg" whileHover={{ y: -4 }} transition={{ delay: 0.08 }}>
                <div className="text-3xl font-bold text-[#0A1628]">02</div>
                <h3 className="mt-5 text-2xl font-bold text-[#0A0A0A]">Agents get to work</h3>
                <div className="mt-5 space-y-3">
                  {agents.map((a, i) => (
                    <motion.div key={a.name} className="glass-blur rounded-xl p-3" initial={{ opacity: 0, x: -4 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-[#0A0A0A]">{a.name}</span>
                        <span className="text-[#6B7280]">Running</span>
                      </div>
                      <motion.div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#3B82F6]"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${70 + i * 5}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="glass-panel smooth-transition rounded-3xl p-7 hover:shadow-lg" whileHover={{ y: -4 }} transition={{ delay: 0.12 }}>
                <div className="text-3xl font-bold text-[#0A1628]">03</div>
                <h3 className="mt-5 text-2xl font-bold text-[#0A0A0A]">Your business is ready</h3>
                <div className="mt-5 space-y-3 text-sm">
                  {["Brand kit", "Website live", "47 leads", "$2,400 pipeline"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="glass-blur flex items-center gap-3 rounded-xl px-3 py-2"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0066FF]/20">
                        <Check size={14} className="text-[#0066FF]" />
                      </span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="agents" className="scroll-mt-28 bg-gradient-to-br from-[#F9FAFB] via-[#F4F7FF] to-[#F0F4FF] py-24">
          <div className="container-shell">
          <FadeUp className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-extrabold text-[#0A0A0A] md:text-6xl"
            >
              Meet your AI team.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-[#6B7280]"
            >
              5 specialized agents, one shared mission.
            </motion.p>
          </FadeUp>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 grid items-start gap-8 lg:grid-cols-2"
          >
            <FadeUp>
              <AgentOrbit />
            </FadeUp>
            <FadeUp className="grid gap-4 sm:grid-cols-2">
              {agents.map((agent, i) => (
                <motion.article
                  key={agent.name}
                  className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-6 hover:border-[#3B82F6]/50"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.15)" }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#0A0A0A]">{agent.name}</h3>
                    <span className="flex h-2 w-2 rounded-full bg-[#10B981]"></span>
                  </div>
                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{agent.desc}</p>
                </motion.article>
              ))}
              <motion.div
                className="glass-panel smooth-transition rounded-3xl border border-[#3B82F6]/30 bg-gradient-to-br from-[#EFF6FF] to-white p-6 sm:col-span-2 hover:border-[#3B82F6]/60"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3 }}
              >
                <motion.p
                  className="text-sm font-bold uppercase tracking-[0.16em] text-[#2563EB]"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🔗 Live Orchestration
                </motion.p>
                <p className="mt-2 text-sm leading-relaxed text-[#1F2937]">
                  All five agents sync through one shared mission graph. Tasks, context, and decisions flow back to your company core in real time.
                </p>
              </motion.div>
            </FadeUp>
          </motion.div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#F3F7FF] py-24">
          <div className="container-shell">
          <FadeUp className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-[#0A0A0A] md:text-6xl"
            >
              You&apos;re always in control.
            </motion.h2>
          </FadeUp>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            <motion.div className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-8 hover:border-[#3B82F6]/40 hover:shadow-lg" whileHover={{ y: -4 }}>
              <div className="text-5xl">🤖</div>
              <h3 className="mt-5 text-2xl font-bold text-[#0A0A0A]">Autopilot Mode</h3>
              <p className="mt-3 text-[#6B7280] leading-relaxed">Agents handle everything. Wake up to a built business.</p>
            </motion.div>
            <motion.div
              className="glass-panel smooth-transition rounded-3xl border-2 border-[#3B82F6]/40 bg-gradient-to-br from-[#EFF6FF]/50 to-white p-8 hover:border-[#3B82F6]/60 hover:shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ delay: 0.08 }}
            >
              <div className="text-5xl">👤</div>
              <h3 className="mt-5 text-2xl font-bold text-[#0A0A0A]">Human in Loop</h3>
              <p className="mt-3 text-[#6B7280] leading-relaxed">Approve every step. AI works, you decide.</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel smooth-transition mt-8 rounded-3xl border border-[#E5E7EB]/60 bg-gradient-to-r from-white to-[#F9FAFB] p-8 hover:border-[#3B82F6]/40 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#0A0A0A]">🎙️ Voice Agent included</h3>
            <p className="mt-2 text-[#6B7280] leading-relaxed">
              Real-time audio updates on every agent&apos;s progress. Ask anything, anytime.
            </p>
            <motion.div className="mt-6 overflow-hidden rounded-full bg-[#F3F7FF] p-1">
              <motion.div
                className="h-7 rounded-full bg-gradient-to-r from-[#0066FF] to-[#3B82F6] shadow-lg"
                initial={{ width: "15%" }}
                whileInView={{ width: ["20%", "85%", "35%", "70%"] }}
                viewport={{ once: true }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-white via-[#F8FAFF] to-[#F3F7FF] py-24">
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 md:grid-cols-3"
            >
              <motion.div
                className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-8 text-center hover:border-[#3B82F6]/40 hover:shadow-lg"
                whileHover={{ y: -4 }}
              >
                <CountNumber target={500} suffix="+" />
                <p className="mt-4 text-[#6B7280] font-medium">founders waiting</p>
              </motion.div>
              <motion.div
                className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-8 text-center hover:border-[#3B82F6]/40 hover:shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ delay: 0.08 }}
              >
                <CountNumber target={5} />
                <p className="mt-4 text-[#6B7280] font-medium">AI agents per build</p>
              </motion.div>
              <motion.div
                className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-8 text-center hover:border-[#3B82F6]/40 hover:shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ delay: 0.12 }}
              >
                <motion.div
                  className="text-5xl font-extrabold text-[#0A0A0A] md:text-6xl"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  &lt;24hrs
                </motion.div>
                <p className="mt-4 text-[#6B7280] font-medium">to complete business</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="bg-gradient-to-b from-[#F3F7FF] to-white py-24">
          <div className="container-shell">
            <FadeUp className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-extrabold text-[#0A0A0A] md:text-6xl"
              >
                Simple, transparent pricing.
              </motion.h2>
            </FadeUp>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-14 grid gap-8 md:grid-cols-3"
            >
              <motion.article
                className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-8 hover:border-[#3B82F6]/40 hover:shadow-lg"
                whileHover={{ y: -6 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">Starter</p>
                <h3 className="mt-4 text-4xl font-extrabold text-[#0A0A0A]">$29<span className="text-xl text-[#6B7280]">/build</span></h3>
                <p className="mt-2 text-[#6B7280]">One complete business build</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    5 specialized AI agents
                  </li>
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Brand + MVP output
                  </li>
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Launch checklist
                  </li>
                </ul>
                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#9CA3AF]">Coming Soon</p>
              </motion.article>
              <motion.articlegradient-to-b from-white via-[#F8FAFF] to-[#F3F7FF] py-28">
          <div className="container-shell">
            <FadeUp className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl font-extrabold tracking-tight text-[#0A0A0A] md:text-7xl"
              >
                Start building today.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mx-auto mt-5 max-w-xl text-lg text-[#6B7280]"
              >
                Your AI team is ready and waiting.
              </motion.p>
              <motion.button
                onClick={openWaitlist}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group mt-10 h-14 rounded-full bg-[#0A1628] px-10 text-base font-semibold text-white smooth-transition hover:shadow-lg hover:shadow-blue-500/40"
              >
                Get Early Access →
              </motion.button>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-5 text-sm text-[#9CA3AF]"
              >
                No credit card required
              </motion.p>
            </FadeUp>
          </divtransition={{ duration: 2, repeat: Infinity }}
                >
                  ⭐ MOST POPULAR
                </motion.div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Growth</p>
                <h3 className="mt-4 text-4xl font-extrabold text-[#0A0A0A]">$99<span className="text-xl text-[#6B7280]">/month</span></h3>
                <p className="mt-2 text-[#6B7280]">5 builds per month</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Priority agent execution
                  </li>
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Team collaboration mode
                  </li>
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Weekly growth reports
                  </li>
                </ul>
                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#9CA3AF]">Coming Soon</p>
              </motion.article>
              <motion.article
                className="glass-panel smooth-transition rounded-3xl border border-[#E5E7EB]/60 p-8 hover:border-[#3B82F6]/40 hover:shadow-lg"
                whileHover={{ y: -6 }}
                transition={{ delay: 0.16 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">Enterprise</p>
                <h3 className="mt-4 text-4xl font-extrabold text-[#0A0A0A]">Custom</h3>
                <p className="mt-2 text-[#6B7280]">Unlimited builds</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Dedicated success manager
                  </li>
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    API + custom workflows
                  </li>
                  <li className="flex items-center gap-3 text-[#0A0A0A]">
                    <Check size={18} className="text-[#0066FF]" />
                    Enterprise security
                  </li>
                </ul>
                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#9CA3AF]">Coming Soon</p>
              </motion.article>
            </motion.div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#F3F7FF_0%,#FFFFFF_100%)] py-24">
          <FadeUp className="container-shell text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-[#0A0A0A] md:text-7xl">Start building today.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#6B7280]">Your AI team is ready and waiting.</p>
            <button onClick={openWaitlist} className="mt-8 h-14 rounded-full bg-[#0A1628] px-8 text-base font-semibold text-white">
              Get Early Access →
            </button>
            <p className="mt-4 text-sm text-[#9CA3AF]">No credit card required</p>
          </FadeUp>
        </section>
      </main>
    </SiteShell>
  );
}
