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
  title: "Projekte Wien",
  description:
    "MENTOR-Projekte in Wien — Deutschkurse, Jugendcollege, FiT, Dynamic Force und Startpaket Deutsch. Standort Cumberlandstraße 32-34, 1140 Wien.",
};

const otherProjects = [
  "Dynamic Force",
  "FiT — Frauen in Handwerk und Technik (Wien)",
  "Jugendcollege — AMS Wien # basic West",
  "Jugendcollege — AMS Wien # advanced süd",
  "Startpaket Deutsch & Integration",
  "Tore für meine Zukunft",
];

export default function WienPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: "Wien" },
        ]}
        eyebrow="Projekte · Wien"
        title="Deutsch für Personen mit max. Pflichtschul­abschluss Süd."
        lead="„Der Fokus des Kursangebots liegt auf dem Erwerb von Deutsch­kenntnissen bzw. dem Erwerb ausreichender Kenntnisse der deutschen Schriftsprache."
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Projekt­details"
              title="Inhalte & Eckdaten."
            />
          </div>
          <div className="space-y-8 lg:col-span-7">
            <ProjectFacts
              facts={[
                { label: "Inhalte", value: "Deutschkurse A1, A2, B1, B2 sowie Alphabetisierungs­kurse." },
                { label: "Zielgruppe", value: "Personen mit max. Pflichtschul­abschluss bzw. asyl- oder subsidiär schutzberechtigte Personen." },
                { label: "Voraussetzung", value: "AMS-Vormerkung als arbeitssuchend." },
                { label: "Zeitraum", value: "01.09.2025 – 18.12.2026" },
                { label: "Veranstaltungs­ort", value: "Cumberlandstraße 32-34, 1140 Wien" },
              ]}
            />
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                Was du davon hast
              </h3>
              <div className="mt-5">
                <CheckList
                  items={[
                    "Strukturierter Sprachaufbau von der Alphabetisierung bis B2",
                    "Persönliche Lernbegleitung — niemand wird abgehängt",
                    "Schreib- und Lesetraining mit Bezug auf Alltag und Beruf",
                    "Vorbereitung auf weitere ÖIF- oder ÖSD-Prüfungen",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Weitere Wiener Projekte"
          title="Sechs zusätzliche Programme am Standort Wien."
          intro="Wir kombinieren Sprache, Berufs­orientierung und individuelle Begleitung — von Jugendcolleges bis FiT."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {otherProjects.map((p) => (
            <li
              key={p}
              className="card-lift rounded-[1.25rem] border border-line bg-white p-5 text-base font-medium text-ink"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Ansprech­personen Wien"
          title="Direkt mit dem Wiener Team sprechen."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Manuela Fleischl"
            role="Projektleitung"
            phone="+43 1 605 17-4102"
            email="manuela.fleischl@mentor.at"
          />
          <PersonCard
            name="Christine Zimmermann"
            role="Sekretariat"
            phone="+43 1 605 17-4142"
            email="christine.zimmermann@mentor.at"
          />
          <div className="rounded-[1.5rem] border border-line bg-cream p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              Standort
            </div>
            <div className="mt-3 text-base text-ink">
              MENTOR GmbH & Co OG
              <br />
              Cumberlandstraße 32-34
              <br />
              1140 Wien
            </div>
            <div className="mt-3 text-sm text-ink-soft">
              <a href="tel:+431605171100" className="hover:text-mentor-blue-deep">
                +43 1 605 17-1100
              </a>
              <br />
              <a
                href="mailto:wien.office@mentor.at"
                className="hover:text-mentor-blue-deep"
              >
                wien.office@mentor.at
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Du wohnst in Wien und suchst Deutsch- oder Berufs­begleitung?"
        primary={{ label: "Beim AMS Wien anmelden", href: "/kontakt" }}
        secondary={{ label: "Andere Bundesländer", href: "/projekte" }}
      />
    </>
  );
}
