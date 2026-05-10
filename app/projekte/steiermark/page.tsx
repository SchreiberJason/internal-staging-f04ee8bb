import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import {
  CheckList,
  CtaStrip,
  PersonCard,
  ProjectFacts,
  Section,
  SectionHeading,
} from "../../components/ui";

export const metadata: Metadata = {
  title: "Projekte Steiermark",
  description:
    "AQUA Steiermark — Arbeitsplatznahe Qualifizierung mit über 20 Jahren Erfahrung. Passgenaue Fachkräfte für Unternehmen, finanzielle Absicherung für Auszubildende.",
};

export default function SteiermarkPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: "Steiermark" },
        ]}
        eyebrow="Projekte · Steiermark"
        title="AQUA Steiermark — Arbeitsplatznahe Qualifizierung."
        lead="Die Suche, Auswahl und Einarbeitung neuer Mitarbeitender kostet Zeit und Geld. AQUA kombiniert diese Prozesse effizient — Unternehmen gewinnen passgenaue Fachkräfte, Arbeitssuchende erhalten praxisnahe Ausbildung mit Perspektive."
        variant="dark"
        image="/images/slider/slide5.jpg"
        imageAlt="AQUA-Schulung in der Steiermark"
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Für Unternehmen"
              title="Vorteile auf einen Blick."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Kein Dienstverhältnis — keine Lohn-/Gehaltskosten während der Ausbildung",
                  "Maßgeschneiderte Fachkräfte nach Betriebs­anforderungen",
                  "Schnelle Integration durch praxisnahe Schulung",
                  "Organisatorische Entlastung durch AMS-Koordination",
                  "50 % Kurskosten­übernahme durch das AMS (max. 2.000 €)",
                  "Monatlicher Unternehmens­beitrag: 350 € netto (Stand 2025)",
                ]}
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Für Auszubildende"
              title="Voraussetzungen."
            />
            <div className="mt-8">
              <ProjectFacts
                facts={[
                  { label: "Alter", value: "ab 18 Jahren" },
                  { label: "Status", value: "Beim AMS Steiermark arbeitslos gemeldet" },
                  { label: "Hauptwohnsitz", value: "in der Steiermark" },
                  { label: "Deutsch", value: "mind. A2 — Lehrausbildungen B1" },
                  { label: "Dauer", value: "13 Wochen bis 24 Monate" },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Ausbildungs­modelle"
          title="Drei Wege durch das Programm."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { t: "Verkürzte Lehre", b: "Anrechnung bestehender Vorqualifikationen, abgestimmte Lehrabschluss­prüfung." },
            { t: "Kurse & Schulungen", b: "EDV, Buchhaltung, technische und kaufmännische Spezialisierungen." },
            { t: "Fach- & Diplom­abschlüsse", b: "Vom Pflegeberuf bis zum technischen Diplom — anerkannt und förderfähig." },
          ].map((m) => (
            <div
              key={m.t}
              className="card-lift rounded-[1.5rem] border border-line bg-white p-7"
            >
              <div className="font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                {m.t}
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{m.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="blue">
        <SectionHeading
          eyebrow="Finanzierung"
          title="Während der Ausbildung abgesichert."
          intro="Die finanzielle Existenzsicherung übernimmt das AMS — inklusive Schulungs­zuschlag und Sozial­versicherung."
          invert
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "31,56 €", v: "AMS-Leistungs­bezug pro Tag (mind.)" },
            { k: "13 €", v: "Schulungs­zuschlag pro Tag (max.)" },
            { k: "110 €", v: "Qualifizierungs­bonus pro Monat (DLU)" },
            { k: "100 %", v: "Sozial­versicherung über AMS" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 text-paper"
            >
              <div className="font-display text-3xl font-semibold tracking-tight">
                {s.k}
              </div>
              <div className="mt-2 text-sm leading-snug text-mentor-blue-soft">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading eyebrow="Ansprech­person" title="Direkt mit Nicole Schreiber sprechen." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Nicole Schreiber"
            role="Projektleitung AQUA Steiermark"
            phone="+43 664 961 29 91"
            email="nicole.schreiber@mentor.at"
          />
          <div className="rounded-[1.5rem] border border-line bg-cream p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              Standort Graz
            </div>
            <div className="mt-3 text-base text-ink">
              MENTOR GmbH & Co OG
              <br />
              Brauquartier 7 · 3. OG / Top 21
              <br />
              8055 Graz
            </div>
            <div className="mt-3 text-sm text-ink-soft">
              <a href="tel:+436648117930" className="hover:text-mentor-blue-deep">
                +43 664 811 79 30
              </a>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-line bg-cream p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              Zeitraum
            </div>
            <div className="mt-3 text-base text-ink">laufend</div>
            <div className="mt-3 text-sm text-ink-soft">
              Anmeldungen sind jederzeit möglich. Voraussetzung ist die
              AMS-Vormerkung in der Steiermark.
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Du brauchst Personal — oder einen Ausbildungs­platz in der Steiermark?"
        primary={{ label: "Direkt mit Nicole sprechen", href: "mailto:nicole.schreiber@mentor.at" }}
        secondary={{ label: "AQUA-Programm im Detail", href: "/fuer-unternehmen/aqua" }}
      />
    </>
  );
}
