import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { PageCTA, SectionTitle } from "../../components/page-primitives";
import { Building2 } from "lucide-react";

export default function CompanyPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<Building2 size={16} />}
              eyebrow="Company"
              title="Built by founders, for founders."
              subtitle="NeuroNet AI exists to compress years of startup execution into days, without sacrificing quality or control."
            />
          </FadeUp>
        </section>
        <section className="bg-[#F9FAFB] py-20">
          <div className="container-shell grid gap-6 md:grid-cols-3">
            {[
              ["Mission", "Make world-class business building accessible from a single sentence of intent."],
              ["Vision", "A future where every founder has an autonomous AI operating team from day one."],
              ["Culture", "Move fast, obsess over craft, and stay relentlessly close to real customer outcomes."],
            ].map(([title, desc]) => (
              <FadeUp key={title} className="rounded-2xl border border-[#E5E7EB] bg-white p-7">
                <h3 className="text-2xl font-bold text-[#0A0A0A]">{title}</h3>
                <p className="mt-3 text-[#6B7280]">{desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>
        <PageCTA title="Let us build your first version." subtitle="Give your startup intent once and let NeuroNet execute the rest with you in control." />
      </main>
    </SiteShell>
  );
}
