import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { PageCTA, SectionTitle } from "../../components/page-primitives";
import { BadgeDollarSign } from "lucide-react";

export default function PricingPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<BadgeDollarSign size={16} />}
              eyebrow="Pricing"
              title="Pricing Built for Speed"
              subtitle="Start with one build, scale to monthly execution, or unlock enterprise orchestration with dedicated support."
            />
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "$29/build", desc: "One full business build with 5 agents." },
              { name: "Growth", price: "$99/month", desc: "Up to 5 builds monthly with priority execution." },
              { name: "Enterprise", price: "Custom", desc: "Unlimited builds, custom workflows, and SOC support." },
            ].map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.08} className={`rounded-2xl border p-7 ${plan.name === "Growth" ? "border-[#60A5FA] shadow-[0_16px_40px_rgba(37,99,235,0.13)]" : "border-[#E5E7EB]"}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6B7280]">{plan.name}</p>
                <p className="mt-3 text-4xl font-extrabold text-[#0A0A0A]">{plan.price}</p>
                <p className="mt-3 text-[#6B7280]">{plan.desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>
        <PageCTA title="Pick a plan and start shipping." subtitle="From first build to scale mode, choose the plan that matches your launch velocity." />
      </main>
    </SiteShell>
  );
}
