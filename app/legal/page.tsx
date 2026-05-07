import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";

export default function LegalPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp className="mx-auto max-w-4xl text-center">
            <h1 className="brand-gradient-text text-5xl font-extrabold md:text-7xl">Legal & Trust</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6B7280]">
              Transparent policies, data safeguards, and enterprise-grade controls for AI-native business operations.
            </p>
          </FadeUp>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4">
            {[
              ["Privacy Policy", "How we collect, store, process, and protect your information."],
              ["Terms of Service", "Platform usage terms, billing policies, and service commitments."],
              ["Data Processing", "GDPR-ready processing standards and customer data handling agreements."],
              ["Security", "Encryption at rest and in transit, access controls, and audit logs."],
            ].map(([title, desc]) => (
              <FadeUp key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                <h3 className="text-xl font-bold text-[#0A0A0A]">{title}</h3>
                <p className="mt-2 text-[#6B7280]">{desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
