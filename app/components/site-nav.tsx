"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Logo } from "./icons";
import { MentorWordmark } from "./brand";

type SubItem = {
  href: string;
  label: string;
  desc?: string;
};

type NavItem = {
  href: string;
  label: string;
  children?: SubItem[];
};

const NAV: NavItem[] = [
  {
    href: "/ueber-uns",
    label: "Über uns",
    children: [
      { href: "/ueber-uns", label: "Übersicht", desc: "Wer wir sind, was uns antreibt" },
      { href: "/ueber-uns/team", label: "Team", desc: "Geschäftsleitung & Ansprech­personen" },
      { href: "/ueber-uns/leitlinien", label: "Leitlinien", desc: "Anspruch & Motivation" },
      { href: "/ueber-uns/werte-und-prinzipien", label: "Werte & Prinzipien", desc: "Acht Grundsätze unseres Handelns" },
      { href: "/ueber-uns/geschichte", label: "Geschichte", desc: "Seit 1993 in Österreich" },
      { href: "/ueber-uns/agb", label: "AGB", desc: "Geschäfts­bedingungen" },
    ],
  },
  {
    href: "/fuer-unternehmen",
    label: "Für Unternehmen",
    children: [
      { href: "/fuer-unternehmen", label: "Übersicht", desc: "So unterstützen wir Betriebe" },
      { href: "/fuer-unternehmen/aqua", label: "AQUA", desc: "Arbeitsplatznahe Qualifizierung" },
    ],
  },
  {
    href: "/projekte",
    label: "Projekte",
    children: [
      { href: "/projekte", label: "Übersicht", desc: "Aktuelle Projekte österreichweit" },
      { href: "/projekte/wien", label: "Wien", desc: "Projekte in der Bundeshauptstadt" },
      { href: "/projekte/niederoesterreich", label: "Niederösterreich", desc: "Mostviertel & St. Pölten" },
      { href: "/projekte/oberoesterreich", label: "Oberösterreich", desc: "Linz, Rohrbach & Region" },
      { href: "/projekte/salzburg", label: "Salzburg", desc: "Stadt & Land" },
      { href: "/projekte/steiermark", label: "Steiermark", desc: "Graz & AQUA Steiermark" },
    ],
  },
  {
    href: "/seminare-angebote",
    label: "Angebote",
    children: [
      { href: "/seminare-angebote", label: "Übersicht", desc: "Seminare und Bildungs­programme" },
      { href: "/seminare-angebote/deutsch-als-fremdsprache", label: "Deutsch als Fremdsprache", desc: "A1 bis C1, ÖSD-Vorbereitung" },
      { href: "/seminare-angebote/oeif-pruefung", label: "ÖIF-Prüfung", desc: "Zertifiziertes Prüfungs­zentrum" },
      { href: "/seminare-angebote/demokratiebildung", label: "Demokratiebildung", desc: "Workshops für Schulen & Lehrlinge" },
    ],
  },
  { href: "/jobs", label: "Jobs" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 transition",
        scrolled
          ? "border-b border-line/60 bg-paper/90 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-paper/70 backdrop-blur",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="MENTOR — Startseite"
        >
          <MentorWordmark height={40} />
          <span className="hidden border-l border-line pl-3 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft sm:inline">
            Bildung · Beratung
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            if (!item.children) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "rounded-pill px-3.5 py-2 text-sm font-medium transition",
                      active
                        ? "bg-mentor-blue-soft/60 text-mentor-blue-deep"
                        : "text-ink-soft hover:bg-cream hover:text-ink",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={[
                    "inline-flex items-center gap-1 rounded-pill px-3.5 py-2 text-sm font-medium transition",
                    active
                      ? "bg-mentor-blue-soft/60 text-mentor-blue-deep"
                      : "text-ink-soft hover:bg-cream hover:text-ink",
                  ].join(" ")}
                >
                  {item.label}
                  <Caret className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="w-[28rem] rounded-[1.25rem] border border-line bg-white p-3 shadow-lift">
                    <ul className="space-y-1">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={[
                              "block rounded-2xl px-4 py-3 transition",
                              pathname === c.href
                                ? "bg-cream"
                                : "hover:bg-cream/70",
                            ].join(" ")}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <div className="text-sm font-semibold text-ink">
                                  {c.label}
                                </div>
                                {c.desc && (
                                  <div className="mt-0.5 text-xs text-ink-soft">
                                    {c.desc}
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="h-4 w-4 shrink-0 text-mentor-blue opacity-0 transition group-hover:opacity-100" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/kontakt"
            className="hidden items-center gap-2 rounded-pill bg-mentor-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-mentor-blue-deep lg:inline-flex"
          >
            Beratung anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white text-ink lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Burger className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="border-t border-line bg-paper">
            <div className="mx-auto max-h-[calc(100vh-4rem)] max-w-7xl overflow-y-auto px-4 py-4">
              <ul className="space-y-1">
                {NAV.map((item) => (
                  <MobileItem key={item.href} item={item} pathname={pathname} />
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-mentor-blue px-5 py-3.5 text-sm font-semibold text-white"
              >
                Beratung anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [exp, setExp] = useState(pathname.startsWith(item.href));
  const active = pathname === item.href || pathname.startsWith(item.href + "/");

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className={[
            "block rounded-2xl px-4 py-3 text-sm font-semibold",
            active ? "bg-mentor-blue-soft/60 text-mentor-blue-deep" : "text-ink",
          ].join(" ")}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="rounded-2xl bg-white">
      <button
        type="button"
        onClick={() => setExp((v) => !v)}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-ink"
      >
        {item.label}
        <Caret
          className={[
            "h-4 w-4 transition",
            exp ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>
      {exp && (
        <ul className="border-t border-line/70 px-2 py-2">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className={[
                  "block rounded-xl px-3 py-2.5 text-sm",
                  pathname === c.href
                    ? "bg-cream font-semibold text-mentor-blue-deep"
                    : "text-ink-soft hover:bg-cream/70",
                ].join(" ")}
              >
                {c.label}
                {c.desc && (
                  <span className="mt-0.5 block text-xs text-ink-soft/80">
                    {c.desc}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Caret(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Burger(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      {...p}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function Close(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      {...p}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
