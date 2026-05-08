import { CheckCircle2, Cpu } from "lucide-react";
import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { PageCTA, SectionTitle } from "../../components/page-primitives";

export default function ProductPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<Cpu size={16} />}
              eyebrow="NeuroNet Platform"
              title="One sentence in. Full business out."
              subtitle="NeuroNet AI orchestrates five specialist agents into one execution engine so your business idea ships as a real operating company."
            />
          </FadeUp>
        </section>

        <section className="bg-[#F9FAFB] py-20">
          <div className="container-shell grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Intent Parsing",
                desc: "Converts your prompt into a market, positioning, and roadmap brief.",
              },
              {
                title: "Parallel Agent Execution",
                desc: "Brand, Dev, Marketing, Sales, and Ops agents run coordinated tasks in parallel.",
              },
              {
                title: "Shipped Outputs",
                desc: "Brand assets, deployed product, GTM content, lead flows, and KPI dashboard.",
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
          <FadeUp className="mb-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A0A0A] md:text-5xl">What you get each build</h2>
          </FadeUp>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Business naming directions and category fit analysis",
              "Landing website copy and conversion-first structure",
              "MVP architecture and implementation plan",
              "Go-to-market content and first 30-day campaign",
              "Lead list templates and outreach sequence",
              "Metrics stack with KPI definitions and reporting cadence",
            ].map((item) => (
              <FadeUp key={item} className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <CheckCircle2 className="mt-0.5 text-[#0066FF]" size={18} />
                <p className="text-[#6B7280]">{item}</p>
              </FadeUp>
            ))}
          </div>
        </section>
        <PageCTA />
      </main>
    </SiteShell>
  );
}
