import Link from "next/link";
import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { PageCTA, SectionTitle } from "../../components/page-primitives";
import { BookOpen } from "lucide-react";

export default function DocsPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<BookOpen size={16} />}
              eyebrow="Documentation"
              title="Build fast with clarity."
              subtitle="Setup guides, API references, and operating playbooks to launch with NeuroNet AI in production."
            />
          </FadeUp>
        </section>

        <section className="bg-[#F9FAFB] py-20">
          <div className="container-shell grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quickstart",
                desc: "Connect your workspace, set your build prompt, and generate your first business in minutes.",
              },
              {
                title: "Agent Controls",
                desc: "Tune autonomy levels, require approvals, and configure output quality thresholds.",
              },
              {
                title: "Deployment",
                desc: "Ship generated assets and code to your preferred stack with automated checklists.",
              },
            ].map((item) => (
              <FadeUp key={item.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <h3 className="text-2xl font-bold text-[#0A0A0A]">{item.title}</h3>
                <p className="mt-3 text-[#6B7280]">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <FadeUp className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-[#0A0A0A] md:text-4xl">Core doc paths</h2>
            <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <p className="font-semibold text-[#0A0A0A]">/docs/quickstart</p>
                <p className="mt-1 text-[#6B7280]">From account setup to first shipped build.</p>
              </div>
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <p className="font-semibold text-[#0A0A0A]">/docs/agents</p>
                <p className="mt-1 text-[#6B7280]">Capabilities, permissions, and handoff model.</p>
              </div>
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <p className="font-semibold text-[#0A0A0A]">/docs/api</p>
                <p className="mt-1 text-[#6B7280]">REST endpoints, auth, and example payloads.</p>
              </div>
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <p className="font-semibold text-[#0A0A0A]">/docs/security</p>
                <p className="mt-1 text-[#6B7280]">Data retention, RLS, and environment hardening.</p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#0A1628] px-6 text-sm font-semibold text-white"
            >
              View pricing
            </Link>
          </FadeUp>
        </section>
        <PageCTA title="Build with confidence." subtitle="Follow docs, deploy faster, and turn prompts into production-ready startup systems." />
      </main>
    </SiteShell>
  );
}
