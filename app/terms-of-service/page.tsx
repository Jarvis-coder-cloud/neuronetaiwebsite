import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { FileText } from "lucide-react";
import { PageCTA, SectionTitle } from "../../components/page-primitives";

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<FileText size={16} />}
              eyebrow="Terms of Service"
              title="Clear terms, confident usage."
              subtitle="Effective date: May 2026. These terms govern your use of NeuroNet AI products and services."
            />
          </FadeUp>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4">
            {[
              ["Service Access", "You must provide accurate registration data and keep your account credentials secure. You are responsible for all activity under your account."],
              ["Acceptable Use", "You agree not to misuse the service for unlawful, harmful, deceptive, or abusive activity, including unauthorized scraping or model abuse."],
              ["Customer Content", "You retain ownership of your content. By using the service, you grant us permission to process content solely to operate and improve the platform."],
              ["Billing and Plans", "Paid plans are billed according to your selected subscription. Fees are non-refundable unless required by law or explicitly agreed otherwise."],
              ["Availability", "We aim for high reliability but cannot guarantee uninterrupted uptime. Planned maintenance and incidents may cause temporary disruptions."],
              ["Limitation of Liability", "To the maximum extent permitted by law, NeuroNet AI is not liable for indirect, incidental, or consequential damages."],
              ["Termination", "We may suspend or terminate access for violations of these terms. You may stop using the service at any time."],
            ].map(([title, desc]) => (
              <FadeUp key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                <h2 className="text-xl font-bold text-[#0A0A0A]">{title}</h2>
                <p className="mt-2 text-[#6B7280]">{desc}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <p className="text-[#6B7280]">
              Legal contact: <span className="font-semibold text-[#0A0A0A]">neuronetai1@gmail.com</span>
            </p>
          </FadeUp>
        </section>
        <PageCTA title="Need contract support?" subtitle="We support legal review workflows for teams evaluating NeuroNet AI at scale." />
      </main>
    </SiteShell>
  );
}
