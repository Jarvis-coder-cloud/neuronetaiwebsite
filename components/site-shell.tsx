"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { WaitlistModal } from "./waitlist-modal";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/agents", label: "Agents" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
];
const footerLinks = [
  { href: "/product", label: "Product" },
  { href: "/agents", label: "Agents" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
  { href: "/docs", label: "Docs" },
  { href: "/legal", label: "Legal" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onOpenWaitlist = () => setOpenModal(true);
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("open-waitlist", onOpenWaitlist as EventListener);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("open-waitlist", onOpenWaitlist as EventListener);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 smooth-transition ${
          scrolled ? "border-b border-[#E5E7EB]/60 glass-blur shadow-lg" : "bg-white"
        }`}
      >
        <div className="container-shell flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="NeuroNet AI logo" width={34} height={34} className="h-[34px] w-[34px] object-contain" />
            <span className="text-base font-semibold text-[#0A1628]">NeuroNet AI</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const href =
                pathname === "/" && ["Product", "Agents", "Pricing"].includes(link.label)
                  ? `/#${link.label.toLowerCase()}`
                  : link.href;
              return (
                <Link key={link.href} href={href} className="text-sm text-[#6B7280] smooth-transition hover:text-[#0A0A0A] hover:font-medium">
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setOpenModal(true)}
              className="group h-12 rounded-full bg-[#0A1628] px-5 text-sm font-semibold text-white smooth-transition hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              Get Early Access
            </button>
          </div>

          <button className="md:hidden" onClick={() => setOpenMenu((p) => !p)} aria-label="Toggle menu">
            {openMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {openMenu ? (
          <div className="animate-slide-up border-t border-[#E5E7EB]/60 glass-blur p-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const href =
                  pathname === "/" && ["Product", "Agents", "Pricing"].includes(link.label)
                    ? `/#${link.label.toLowerCase()}`
                    : link.href;
                return (
                  <Link key={link.href} href={href} className="text-base text-[#0A0A0A]" onClick={() => setOpenMenu(false)}>
                    {link.label}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setOpenMenu(false);
                  setOpenModal(true);
                }}
                className="mt-1 h-12 rounded-full bg-[#0A1628] text-sm font-semibold text-white smooth-transition hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
              >
                Get Early Access
              </button>
            </div>
          </div>
        ) : null}
      </header>
      {children}
      <footer className="border-t border-[#E5E7EB]/40 glass-blur bg-white/50 backdrop-blur-md">
        <div className="container-shell flex flex-col justify-between gap-8 py-12 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="NeuroNet AI logo" width={34} height={34} className="h-[34px] w-[34px] object-contain" />
              <span className="font-semibold text-[#0A1628]">NeuroNet AI</span>
            </div>
            <p className="mt-3 text-sm text-[#6B7280]">The AI that builds businesses.</p>
            <p className="mt-1 text-sm text-[#6B7280]">neuronetai1@gmail.com</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <a href="https://www.instagram.com/neuronetai.in" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="container-shell pb-8 text-sm text-[#6B7280]">© 2026 NeuroNet AI Inc.</div>
      </footer>
      <WaitlistModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
