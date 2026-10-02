"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./social-icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/brand/markovforge-icon.svg" alt="" width={34} height={34} priority />
          <span className="font-display text-[15px] font-bold tracking-tight">
            MARKOV<span className="text-forge">FORGE</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-white">
            <GitHubIcon className="size-[18px]" />
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-white">
            <LinkedInIcon className="size-[18px]" />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-gold"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-slate-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              Start a project
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted">
              <GitHubIcon className="size-5" />
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted">
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
