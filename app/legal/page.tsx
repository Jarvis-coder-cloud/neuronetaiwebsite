import { SiteShell } from "../../components/site-shell";
import { FadeUp } from "../../components/ui";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PageCTA, SectionTitle } from "../../components/page-primitives";

export default function LegalPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-20 md:py-28">
          <FadeUp>
            <SectionTitle
              icon={<ShieldCheck size={16} />}
              eyebrow="Legal & Trust"
              title="Policies built for scale."
              subtitle="Transparent safeguards, legal clarity, and enterprise-grade trust controls for AI-native business operations."
            />
          </FadeUp>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {[
              ["Privacy Policy", "How we collect, store, process, and protect your information.", "/privacy-policy"],
              ["Terms of Service", "Platform usage terms, billing policies, and service commitments.", "/terms-of-service"],
              ["Data Processing", "GDPR-ready processing standards and customer data handling agreements."],
              ["Security", "Encryption at rest and in transit, access controls, and audit logs."],
            ].map(([title, desc, href]) => (
              <FadeUp key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                <h3 className="text-xl font-bold text-[#0A0A0A]">{title}</h3>
                <p className="mt-2 text-[#6B7280]">{desc}</p>
                {href ? (
                  <Link href={href} className="mt-3 inline-block text-sm font-semibold text-[#0A1628]">
                    Read full page →
                  </Link>
                ) : null}
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mx-auto mt-10 max-w-5xl rounded-2xl border border-[#E5E7EB] bg-white p-7">
            <h2 className="text-2xl font-bold text-[#0A0A0A]">Contact for legal requests</h2>
            <p className="mt-3 text-[#6B7280]">
              For compliance reviews, DPA requests, deletion requests, or enterprise legal reviews, email us at
              {" "}
              <span className="font-semibold text-[#0A0A0A]">neuronetai1@gmail.com</span>.
            </p>
          </FadeUp>
        </section>
        <PageCTA title="Want enterprise-ready compliance?" subtitle="Talk to us for legal reviews, security questionnaires, and procurement support." />
      </main>
    </SiteShell>
  );
}
