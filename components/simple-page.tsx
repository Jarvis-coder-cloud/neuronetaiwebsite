import { SiteShell } from "./site-shell";
import { FadeUp } from "./ui";

export function SimplePage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="container-shell py-24 md:py-32">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-[#0A0A0A] md:text-7xl">{title}</h1>
            <p className="mt-6 text-lg text-[#6B7280]">{description}</p>
          </FadeUp>
        </section>
      </main>
    </SiteShell>
  );
}
