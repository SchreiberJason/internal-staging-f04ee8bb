import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { ArrowRight, MapPin } from "../components/icons";
import { CtaStrip, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Aktuelle MENTOR-Projekte in Wien, Niederösterreich, Oberösterreich, Salzburg und der Steiermark — vom AQUA-Programm bis zur Bewerbungs­beratung.",
};

const states = [
  {
    href: "/projekte/wien",
    name: "Wien",
    headline: "Deutsch, Jugend­college, FiT & mehr",
    body: "Sieben aktive Projekte rund um Sprache, Berufseinstieg und Frauen­förderung — Standort Cumberlandstraße.",
    chips: ["Deutsch A1–B2", "Jugend­college", "Dynamic Force", "FiT"],
  },
  {
    href: "/projekte/niederoesterreich",
    name: "Niederösterreich",
    headline: "Aufstieg III BBE — Berufs­orientierung Mostviertel",
    body: "Berufliche Integration und gesellschaftliche Teilhabe für Personen mit gesundheitlichen Einschränkungen.",
    chips: ["Mostviertel", "Amstetten", "St. Pölten"],
  },
  {
    href: "/projekte/oberoesterreich",
    name: "Oberösterreich",
    headline: "Begleitung in den Arbeits­markt Rohrbach",
    body: "Gezielte Vorbereitung auf die Jobsuche — vom Kompetenz­profil bis zum Bewerbungs­training.",
    chips: ["Rohrbach", "AMS", "Bewerbungs­coaching"],
  },
  {
    href: "/projekte/salzburg",
    name: "Salzburg",
    headline: "Bewerbungs­beratung Salzburg",
    body: "Aussagekräftige Unterlagen, Foto­shooting und individuelle Bewerbungs­strategie.",
    chips: ["Bewerbung", "Lebenslauf", "Strategie"],
  },
  {
    href: "/projekte/steiermark",
    name: "Steiermark",
    headline: "AQUA Steiermark",
    body: "Arbeitsplatznahe Qualifizierung — finanziell abgesichert, betrieblich passgenau, mit über 20 Jahren Erfahrung.",
    chips: ["AQUA", "Graz", "Lehrabschluss"],
  },
];

export default function ProjekteOverviewPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Projekte" }]}
        eyebrow="Projekte"
        title="Aktiv in fünf Bundesländern."
        lead="Unsere Projekte sind unsere DNA. Hier ein Überblick darüber, was MENTOR aktuell in den einzelnen Regionen umsetzt — viele dieser Programme sind sowohl für Lehrlinge als auch für Unternehmen relevant."
        image="/images/slider/slide1.jpg"
        imageAlt="Projektarbeit im Klassenraum"
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Bundesländer"
          title="Wo wir gerade arbeiten."
          intro="Klick dich in die Region — auf jeder Seite siehst du das aktuelle Hauptprojekt mit Inhalten, Zielgruppe, Zeitraum und Ansprech­personen."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <li key={s.name}>
              <Link
                href={s.href}
                className="card-lift group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-mentor-blue-soft text-mentor-blue-deep">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="font-display text-xl font-semibold tracking-tight text-ink">
                    {s.name}
                  </div>
                </div>
                <h3 className="font-display mt-6 text-lg font-semibold leading-tight tracking-tight text-mentor-blue-deep">
                  {s.headline}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-pill border border-line bg-cream px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-mentor-blue-deep"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-mentor-blue">
                  Region öffnen
                  <ArrowRight className="h-4 w-4 nudge-x" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="cream">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Wie unsere Projekte aufgebaut sind"
              title="Klare Struktur. Persönliche Begleitung."
              intro="Jedes MENTOR-Projekt folgt demselben Schema — damit du dich schnell zurechtfindest, ob als Teilnehmer:in, Unternehmen oder AMS-Berater:in."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { t: "Inhalte", b: "Was konkret gemacht wird — Module, Workshops, Beratungs­einheiten." },
                { t: "Voraussetzungen", b: "Wer aufgenommen werden kann — meist über AMS-Vormerkung." },
                { t: "Zielgruppe", b: "Für wen das Projekt gedacht ist — alters-, branchen- oder lebenslagen­spezifisch." },
                { t: "Zeitraum", b: "Aktueller Förderzeitraum — die meisten Projekte laufen mehrjährig." },
                { t: "Veranstaltungs­ort", b: "Konkrete Adresse — meist in der jeweiligen Bezirks­hauptstadt." },
                { t: "Kontakt", b: "Direkte Ansprech­person mit Telefonnummer und E-Mail." },
              ].map((f) => (
                <div
                  key={f.t}
                  className="rounded-2xl border border-line bg-white p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-mentor-blue-deep">
                    {f.t}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {f.b}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Du suchst ein Projekt in deiner Region?"
        body="Schreib oder ruf uns an — oft können wir dich auch vermitteln, wenn das Projekt gerade voll ist."
        primary={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
        secondary={{ label: "AQUA für Unternehmen", href: "/fuer-unternehmen/aqua" }}
      />
    </>
  );
}
