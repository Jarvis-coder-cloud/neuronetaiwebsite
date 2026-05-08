import Link from "next/link";

export function SectionTitle({
  icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#0A1628]">
        {icon}
        {eyebrow}
      </div>
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-[#0A0A0A] md:text-7xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6B7280]">{subtitle}</p>
    </div>
  );
}

export function PageCTA({
  title = "Ready to build your company with AI?",
  subtitle = "Join the early access list and let NeuroNet spin up your full startup execution stack.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="container-shell text-center">
        <h2 className="text-4xl font-extrabold text-[#0A0A0A] md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">{subtitle}</p>
        <Link
          href="/#pricing"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#0A1628] px-7 text-sm font-semibold text-white"
        >
          View Plans
        </Link>
      </div>
    </section>
  );
}
