import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import { Lock } from "lucide-react";
import { PageCTA, SectionTitle } from "../../components/page-primitives";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<Lock size={16} />}
              eyebrow="Privacy Policy"
              title="Your data, handled responsibly."
              subtitle="Effective date: May 2026. This policy explains how NeuroNet AI collects, uses, and protects your data."
            />
          </FadeUp>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4">
            {[
              ["Information We Collect", "We collect account details, contact info, billing metadata, prompt inputs, outputs, and platform usage telemetry to operate and improve the service."],
              ["How We Use Data", "Your data is used to provide services, personalize agent workflows, improve reliability, prevent abuse, and communicate product updates."],
              ["Data Sharing", "We do not sell personal data. We share data only with infrastructure partners required to run the platform and with legal authorities when required by law."],
              ["Data Retention", "We retain data only for as long as needed for service delivery, security, compliance, and legitimate business needs. You can request deletion."],
              ["Your Rights", "You can request access, correction, export, or deletion of your personal data by contacting our support email."],
              ["Security Controls", "We use encryption in transit and at rest, least-privilege access, and continuous monitoring to protect customer data."],
            ].map(([title, desc]) => (
              <FadeUp key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                <h2 className="text-xl font-bold text-[#0A0A0A]">{title}</h2>
                <p className="mt-2 text-[#6B7280]">{desc}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <p className="text-[#6B7280]">
              Privacy questions or data requests: <span className="font-semibold text-[#0A0A0A]">neuronetai1@gmail.com</span>
            </p>
          </FadeUp>
        </section>
        <PageCTA title="Build securely with NeuroNet AI." subtitle="Need a privacy walkthrough for your team? We can help with implementation and policy mapping." />
      </main>
    </SiteShell>
  );
}
