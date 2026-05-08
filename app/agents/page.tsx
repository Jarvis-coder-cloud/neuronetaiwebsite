import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { PageCTA, SectionTitle } from "../../components/page-primitives";
import { Bot } from "lucide-react";

export default function AgentsPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<Bot size={16} />}
              eyebrow="Agent System"
              title="Agents That Build Companies"
              subtitle="Each NeuroNet agent owns a clear domain, shares memory across the stack, and collaborates to ship your business end-to-end."
            />
          </FadeUp>
        </section>
        <section className="bg-[#F9FAFB] py-20">
          <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Brand Agent", "Identity, positioning, voice, website messaging and brand systems."],
              ["Dev Agent", "Architecture, full-stack build, deployment pipeline, and launch readiness."],
              ["Marketing Agent", "Growth strategy, content loops, SEO foundations, and paid messaging."],
              ["Sales Agent", "Lead sourcing, outreach sequences, CRM structure, and conversion flow."],
              ["Ops Agent", "KPI dashboards, process playbooks, team rituals, and weekly reporting."],
              ["Voice Agent", "Real-time verbal updates so you can direct the team hands-free."],
            ].map(([title, desc]) => (
              <FadeUp key={title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <h3 className="text-2xl font-bold text-[#0A0A0A]">{title}</h3>
                <p className="mt-3 text-[#6B7280]">{desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>
        <PageCTA title="Deploy your AI team this week." subtitle="Start with one build and see each agent execute your startup roadmap in parallel." />
      </main>
    </SiteShell>
  );
}
