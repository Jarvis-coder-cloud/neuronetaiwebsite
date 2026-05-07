"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

const typingSteps = [
  "Build me a fintech startup...",
  "Build me a legal AI startup in India...",
  "Build me an AI HR SaaS for SMBs...",
];

function TypingInput() {
  return (
    <motion.div
      className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#6B7280]"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <motion.span
        key={typingSteps.join("-")}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        {typingSteps[1]}
      </motion.span>
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
    <div className="relative mx-auto h-[420px] w-full max-w-4xl overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_60px_rgba(37,99,235,0.10)] md:h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,234,254,0.45),rgba(255,255,255,0.96)_60%)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DBEAFE]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node) => (
          <line key={node.name} x1="50" y1="50" x2={node.x.replace("%", "")} y2={node.y.replace("%", "")} stroke="#DBEAFE" strokeWidth="0.35" />
        ))}
      </svg>

      <motion.div
        className="absolute inset-0 z-10 m-auto flex h-40 w-40 items-center justify-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-center shadow-[0_10px_30px_rgba(59,130,246,0.22)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
          className="absolute z-20 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#0A0A0A] shadow-[0_8px_24px_rgba(30,64,175,0.13)]"
          style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
        >
          <span className="soft-gradient-text">{node.name}</span>
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
      <main className="bg-white">
        <section className="container-shell pb-16 pt-16 md:pb-24 md:pt-24">
          <FadeUp className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-8 inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#0A1628]">
              Introducing NeuroNet AI ✦
            </div>
            <h1 className="mx-auto brand-gradient-text text-5xl font-extrabold tracking-tight md:text-[88px] md:leading-[0.98]">
              Your Business.
              <br />
              Built by AI.
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-lg soft-gradient-text md:text-xl">
              Type one sentence. NeuroNet deploys 5 specialized AI agents - brand, dev, marketing, sales, ops. Your complete business, built overnight.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={openWaitlist} className="h-12 min-w-48 rounded-full bg-[#0A1628] px-6 text-sm font-semibold text-white">
                Get Early Access →
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="h-12 min-w-48 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-6 text-sm font-semibold text-[#0A0A0A]"
              >
                See How It Works
              </button>
            </div>
            <div className="mt-7 flex items-center justify-center gap-3 text-sm text-[#6B7280]">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((avatar) => (
                  <div
                    key={avatar}
                    className="h-7 w-7 rounded-full border border-white bg-gradient-to-br from-[#DDE7FF] to-[#F3F7FF]"
                  />
                ))}
              </div>
              <span>500+ founders on waitlist</span>
            </div>
          </FadeUp>

          <FadeUp className="mx-auto mt-12 max-w-5xl">
            <motion.div
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.07)] md:p-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm soft-gradient-text">
                Build me a legal AI startup in India...
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
                {agents.map((agent) => (
                  <div key={agent.name} className="rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm">
                    <div className="flex items-center gap-2 font-medium text-[#0A0A0A]">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      {agent.name}
                    </div>
                    <div className="mt-1 text-xs text-[#6B7280]">Active</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeUp>
        </section>

        <section className="border-y border-[#F3F4F6] bg-white py-10">
          <FadeUp className="container-shell text-center">
            <p className="text-sm text-[#9CA3AF]">Businesses being built with NeuroNet AI</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-medium text-[#9CA3AF] md:grid-cols-6">
              {["Northstar Labs", "Vela Growth", "Synthex", "Arcly", "Mintflow", "Prism Ops"].map((name) => (
                <div key={name}>{name}</div>
              ))}
            </div>
          </FadeUp>
        </section>

        <section id="product" className="scroll-mt-28 bg-[#F9FAFB] py-24">
          <div className="container-shell">
            <FadeUp>
              <h2 className="brand-gradient-text text-4xl font-extrabold md:text-6xl">How it works</h2>
            </FadeUp>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <FadeUp className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <div className="text-3xl font-bold text-[#0A1628]">01</div>
                <h3 className="mt-4 text-2xl font-bold">Type your idea</h3>
                <div className="mt-4">
                  <TypingInput />
                </div>
              </FadeUp>
              <FadeUp className="rounded-2xl border border-[#E5E7EB] bg-white p-6" delay={0.08}>
                <div className="text-3xl font-bold text-[#0A1628]">02</div>
                <h3 className="mt-4 text-2xl font-bold">Agents get to work</h3>
                <div className="mt-5 space-y-3">
                  {agents.map((a, i) => (
                    <motion.div key={a.name} className="rounded-xl border border-[#E5E7EB] p-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                      <div className="flex justify-between text-sm">
                        <span>{a.name}</span>
                        <span className="text-[#6B7280]">Running</span>
                      </div>
                      <motion.div className="mt-2 h-2 rounded-full bg-[#E5E7EB]">
                        <motion.div
                          className="h-2 rounded-full bg-[#0066FF]"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${70 + i * 5}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
              <FadeUp className="rounded-2xl border border-[#E5E7EB] bg-white p-6" delay={0.12}>
                <div className="text-3xl font-bold text-[#0A1628]">03</div>
                <h3 className="mt-4 text-2xl font-bold">Your business is ready</h3>
                <div className="mt-5 space-y-3 text-sm">
                  {["Brand kit", "Website live", "47 leads", "$2,400 pipeline"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2">
                      <Check size={16} className="text-[#0066FF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <section id="agents" className="scroll-mt-28 bg-[#F9FAFB] py-24">
          <div className="container-shell">
          <FadeUp className="text-center">
            <h2 className="brand-gradient-text text-4xl font-extrabold md:text-6xl">Meet your AI team.</h2>
            <p className="mt-4 text-lg soft-gradient-text">5 specialized agents, one shared mission.</p>
          </FadeUp>
          <div className="mt-12 grid items-start gap-7 lg:grid-cols-2">
            <FadeUp>
              <AgentOrbit />
            </FadeUp>
            <FadeUp className="grid gap-4 sm:grid-cols-2">
              {agents.map((agent, i) => (
                <motion.article
                  key={agent.name}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_rgba(30,64,175,0.08)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  whileHover={{ y: -5, borderColor: "#93C5FD" }}
                >
                  <h3 className="text-lg font-bold brand-gradient-text">{agent.name}</h3>
                  <p className="mt-2 text-sm text-[#4B5563]">{agent.desc}</p>
                </motion.article>
              ))}
              <motion.div
                className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] p-5 sm:col-span-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">Live orchestration</p>
                <p className="mt-2 text-sm text-[#1F2937]">
                  All five agents sync through one shared mission graph. Tasks, context, and decisions flow back to your company core in real time.
                </p>
              </motion.div>
            </FadeUp>
          </div>
          </div>
        </section>

        <section className="container-shell pb-24">
          <FadeUp className="text-center">
            <h2 className="brand-gradient-text text-4xl font-extrabold md:text-6xl">You&apos;re always in control.</h2>
          </FadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FadeUp className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8">
              <div className="text-5xl text-[#0066FF]">🤖</div>
              <h3 className="mt-4 text-2xl font-bold">Autopilot Mode</h3>
              <p className="mt-3 text-[#6B7280]">Agents handle everything. Wake up to a built business.</p>
            </FadeUp>
            <FadeUp className="rounded-2xl border-2 border-[#0066FF] bg-white p-8">
              <div className="text-5xl text-[#0066FF]">👤</div>
              <h3 className="mt-4 text-2xl font-bold">Human in Loop</h3>
              <p className="mt-3 text-[#6B7280]">Approve every step. AI works, you decide.</p>
            </FadeUp>
          </div>
          <FadeUp className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-8">
            <h3 className="text-2xl font-bold">🎙️ Voice Agent included</h3>
            <p className="mt-2 text-[#6B7280]">
              Real-time audio updates on every agent&apos;s progress. Ask anything, anytime.
            </p>
            <motion.div className="mt-5 h-10 rounded-full bg-[#F3F7FF] p-2">
              <motion.div
                className="h-6 rounded-full bg-[#0066FF]"
                initial={{ width: "15%" }}
                whileInView={{ width: ["20%", "85%", "35%", "70%"] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </FadeUp>
        </section>

        <section className="bg-[#F9FAFB] py-24">
          <div className="container-shell grid gap-10 text-center md:grid-cols-3">
            <FadeUp>
              <CountNumber target={500} suffix="+" className="brand-gradient-text" />
              <p className="mt-3 text-[#6B7280]">founders waiting</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <CountNumber target={5} className="brand-gradient-text" />
              <p className="mt-3 text-[#6B7280]">AI agents per build</p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="brand-gradient-text text-5xl font-extrabold md:text-6xl">&lt;24hrs</div>
              <p className="mt-3 text-[#6B7280]">to complete business</p>
            </FadeUp>
          </div>
        </section>

        <section id="pricing" className="container-shell scroll-mt-28 py-24">
          <FadeUp className="text-center">
            <h2 className="brand-gradient-text text-4xl font-extrabold md:text-6xl">Simple, transparent pricing.</h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-8">
              <p className="text-sm font-semibold text-[#6B7280]">STARTER</p>
              <h3 className="mt-3 text-4xl font-extrabold">$29/build</h3>
              <p className="mt-2 text-[#6B7280]">One complete business build</p>
              <ul className="mt-5 space-y-2 text-sm text-[#6B7280]">
                <li>✓ 5 specialized AI agents</li>
                <li>✓ Brand + MVP output</li>
                <li>✓ Launch checklist</li>
              </ul>
              <button className="mt-6 h-12 w-full rounded-full border border-[#E5E7EB] bg-[#F9FAFB] font-semibold">
                Start Building
              </button>
            </article>
            <article className="relative rounded-2xl border-2 border-[#0066FF] bg-white p-8 shadow-[0_22px_50px_rgba(0,102,255,0.12)]">
              <div className="absolute -top-3 left-6 rounded-full bg-[#0066FF] px-3 py-1 text-xs font-semibold text-white">MOST POPULAR</div>
              <p className="text-sm font-semibold text-[#6B7280]">GROWTH</p>
              <h3 className="mt-3 text-4xl font-extrabold">$99/month</h3>
              <p className="mt-2 text-[#6B7280]">5 builds per month</p>
              <ul className="mt-5 space-y-2 text-sm text-[#6B7280]">
                <li>✓ Priority agent execution</li>
                <li>✓ Team collaboration mode</li>
                <li>✓ Weekly growth reports</li>
              </ul>
              <button className="mt-6 h-12 w-full rounded-full bg-[#0A1628] font-semibold text-white">Get Growth</button>
            </article>
            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-8">
              <p className="text-sm font-semibold text-[#6B7280]">ENTERPRISE</p>
              <h3 className="mt-3 text-4xl font-extrabold">Custom</h3>
              <p className="mt-2 text-[#6B7280]">Unlimited builds</p>
              <ul className="mt-5 space-y-2 text-sm text-[#6B7280]">
                <li>✓ Dedicated success manager</li>
                <li>✓ API + custom workflows</li>
                <li>✓ Enterprise security</li>
              </ul>
              <button className="mt-6 h-12 w-full rounded-full border border-[#E5E7EB] bg-[#F9FAFB] font-semibold">Talk to Us</button>
            </article>
          </div>
        </section>

        <section className="bg-[#F9FAFB] py-24">
          <FadeUp className="container-shell text-center">
            <h2 className="brand-gradient-text text-5xl font-extrabold tracking-tight md:text-7xl">Start building today.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg soft-gradient-text">Your AI team is ready and waiting.</p>
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
