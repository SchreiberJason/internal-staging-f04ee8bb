import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import {
  CtaStrip,
  Section,
  SectionHeading,
} from "../components/ui";
import { ArrowRight, Mail, MapPin } from "../components/icons";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Jobs bei MENTOR — eines der größten privaten Bildungs- und Beratungsunternehmen Österreichs. Aktuell offene Stellen und regionale Bewerbungs­kontakte.",
};

const benefits = [
  {
    t: "Professionelles Klima",
    b: "Offene, wertschätzende Kultur. Klarer Umgangston, transparente Entscheidungen.",
  },
  {
    t: "Aus- & Weiterbildung",
    b: "Wir bilden weiter — fachlich wie persönlich. Vom Train-the-Trainer bis zum Master-Programm.",
  },
  {
    t: "Entwicklungs­perspektiven",
    b: "Vom Trainer:innen-Team in die Projektleitung, vom Sekretariat in die Bereichsleitung — Wege gibt es.",
  },
  {
    t: "Hochqualifizierte Kolleg:innen",
    b: "Du arbeitest mit Berater:innen und Trainer:innen, die ihr Handwerk verstehen.",
  },
];

const openings = [
  {
    title: "Trainer:innen / Prüfer:innen Startpaket Deutsch ÖIF",
    region: "Salzburg",
    workload: "Teil- oder Vollzeit",
    href: "mailto:bewerbung.mitte@mentor.at?subject=Bewerbung%20Trainer%20%C3%96IF%20Salzburg",
  },
];

const regions = [
  {
    label: "Region Ost",
    states: "Wien, Niederösterreich, Burgenland",
    email: "bewerbung.ost@mentor.at",
  },
  {
    label: "Region Süd",
    states: "Steiermark, Kärnten, Osttirol",
    email: "bewerbung.sued@mentor.at",
  },
  {
    label: "Region Mitte",
    states: "Oberösterreich, Salzburg",
    email: "bewerbung.mitte@mentor.at",
  },
];

export default function JobsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Jobs" }]}
        eyebrow="Jobs bei MENTOR"
        title="Bildung, die Menschen weiterbringt — auch dich."
        lead={`„Kompetente, engagierte und kreative Mitarbeitende bilden das Herzstück jedes Unternehmens.“ Als eines der größten privaten Bildungs- und Beratungs­unternehmen Österreichs bieten wir ein professionelles Arbeits­klima und echte Entwicklungs­perspektiven.`}
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Warum MENTOR"
          title="Was du von uns erwarten darfst."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.t}
              className="card-lift rounded-[1.5rem] border border-line bg-cream p-7"
            >
              <div className="font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                {b.t}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{b.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Aktuell offen"
          title="Offene Stellen."
        />
        <ul className="mt-12 space-y-4">
          {openings.map((j) => (
            <li key={j.title}>
              <Link
                href={j.href}
                className="card-lift group flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-line bg-paper p-7 sm:flex-row sm:items-center"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-mentor-green">
                    Aktuell · {j.workload}
                  </div>
                  <h3 className="font-display mt-2 text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
                    {j.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
                    <MapPin className="h-4 w-4" />
                    {j.region}
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-mentor-blue px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-mentor-blue-deep">
                  Jetzt bewerben
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-2xl border border-line bg-paper p-5 text-sm text-ink-soft">
          <strong className="text-ink">Initiativ­bewerbung:</strong> Auch wenn
          gerade keine passende Stelle ausgeschrieben ist — gute Mitarbeiter:innen
          finden wir immer einen Platz. Schreib uns einfach an die Region, in
          der du arbeiten möchtest.
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Bewerbungs­kontakte"
          title="Schreib direkt an deine Region."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {regions.map((r) => (
            <a
              key={r.email}
              href={`mailto:${r.email}`}
              className="card-lift group flex flex-col items-start rounded-[1.5rem] border border-line bg-cream p-7"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-mentor-blue-deep text-mentor-green">
                <Mail className="h-5 w-5" />
              </div>
              <div className="font-display mt-5 text-xl font-semibold leading-tight tracking-tight text-ink">
                {r.label}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{r.states}</div>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-mentor-blue-deep">
                <span className="link-underline">{r.email}</span>
                <ArrowRight className="h-4 w-4 nudge-x" />
              </div>
            </a>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Du hast eine Frage zur Bewerbung?"
        body="Schreib uns ans allgemeine Postfach — wir leiten an die richtige Region weiter."
        primary={{ label: "office@mentor.at", href: "mailto:office@mentor.at" }}
        secondary={{ label: "Über uns kennenlernen", href: "/ueber-uns" }}
      />
    </>
  );
}
