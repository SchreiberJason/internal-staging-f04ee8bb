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
  title: "Projekte Niederösterreich",
  description:
    "Aufstieg III BBE — Berufsorientierung Mostviertel. Berufliche Integration und gesellschaftliche Teilhabe von Personen mit gesundheitlichen Einschränkungen.",
};

export default function NoePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: "Niederösterreich" },
        ]}
        eyebrow="Projekte · Niederösterreich"
        title="Aufstieg III BBE — Berufs­orientierung Mostviertel."
        lead="Förderung beruflicher Integration und gesellschaftlicher Teilhabe von Personen mit gesundheitlichen Einschränkungen."
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Projekt­details" title="Inhalte & Eckdaten." />
          </div>
          <div className="space-y-8 lg:col-span-7">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                Was im Programm enthalten ist
              </h3>
              <div className="mt-5">
                <CheckList
                  items={[
                    "Ausführliche Abklärung der beruflichen Leistungs­fähigkeit",
                    "Kompetenz­erhebung & Beratung zu Integrations­möglichkeiten",
                    "Berufliche Perspektiven­planung",
                    "Workshops zu Arbeitsuche, Gesundheit und Persönlichkeits­entwicklung",
                    "Qualifizierungs­beratung, Jobsuche, Bewerbungs­training",
                  ]}
                />
              </div>
            </div>

            <ProjectFacts
              facts={[
                { label: "Voraussetzung", value: "Einladung durch die Regionale Geschäftsstelle des AMS" },
                {
                  label: "Zielgruppe",
                  value:
                    "Ungelernte und angelernte Arbeitskräfte mit dokumentierten gesundheitlichen Einschränkungen",
                },
                { label: "Zeitraum", value: "01.01.2026 – 30.09.2026" },
                {
                  label: "Veranstaltungs­orte",
                  value: (
                    <span>
                      3300 Amstetten, Franz-Kollmann-Straße 4 / Halle 2 (riz up
                      Gründerzentrum)
                      <br />
                      3100 St. Pölten, Julius-Raab-Promenade 27 / II / DG / Top
                      29
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Ansprech­person"
          title="Anna Huber freut sich auf deine Nachricht."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Anna Huber"
            role="Projektleitung"
            phone="+43 664 465 01 57"
            email="anna.huber@mentor.at"
          />
        </div>
      </Section>

      <CtaStrip
        title="Du wohnst im Mostviertel und das AMS hat dich eingeladen?"
        primary={{ label: "Direkt Kontakt aufnehmen", href: "mailto:anna.huber@mentor.at" }}
        secondary={{ label: "Andere Bundesländer", href: "/projekte" }}
      />
    </>
  );
}
