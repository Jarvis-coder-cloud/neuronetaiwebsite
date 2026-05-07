import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";

export default function CompanyPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp className="mx-auto max-w-4xl text-center">
            <h1 className="brand-gradient-text text-5xl font-extrabold md:text-7xl">Built by Founders, for Founders</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6B7280]">
              NeuroNet AI exists to compress years of startup execution into days, without sacrificing quality or control.
            </p>
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
                <h3 className="text-2xl font-bold soft-gradient-text">{title}</h3>
                <p className="mt-3 text-[#6B7280]">{desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
