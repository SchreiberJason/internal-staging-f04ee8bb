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
  title: "Projekte Salzburg",
  description:
    "Bewerbungsberatung Salzburg — Erstellung ansprechender Bewerbungsunterlagen, Fotoshooting, individuelle Strategie und Bewerbungs­gespräch.",
};

export default function SalzburgPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: "Salzburg" },
        ]}
        eyebrow="Projekte · Salzburg"
        title="Bewerbungs­beratung Salzburg."
        lead="Erstellung von ansprechenden und aussage­kräftigen Bewerbungs­unterlagen für die Jobsuche — inklusive Fotoshooting und individueller Strategie."
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Projekt­details"
              title="Was du in der Beratung bekommst."
            />
          </div>
          <div className="space-y-8 lg:col-span-7">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                Inhalte
              </h3>
              <div className="mt-5">
                <CheckList
                  items={[
                    "Erstellung Lebenslauf & Bewerbungs­schreiben",
                    "Fotoshooting für ein ansprechendes Bewerbungs­foto",
                    "Zusammenstellung einer kompletten Bewerbungs­mappe",
                    "Individuelle Bewerbungs­strategie",
                    "Hilfe bei der Auswahl von Bewerbungs­portalen",
                    "Do's und Don'ts im Bewerbungs­gespräch",
                  ]}
                />
              </div>
            </div>
            <ProjectFacts
              facts={[
                { label: "Voraussetzung", value: "Termin durch die Regionale Geschäftsstelle des AMS" },
                {
                  label: "Zielgruppe",
                  value: "Personen aller Altersgruppen, die ihre Unterlagen optimieren möchten",
                },
                { label: "Zeitraum", value: "01.01.2026 – 31.12.2026" },
                {
                  label: "Veranstaltungs­ort",
                  value: "Glockengasse 4d / TOP 13a, 5020 Salzburg",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Ansprech­person"
          title="Beratung bei Renate Wölflingseder-Hechenblaickner."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Renate Wölflingseder-Hechenblaickner"
            role="Projektleitung Salzburg"
            phone="+43 664 882 93 252"
            email="renate.woelflingseder@mentor.at"
          />
        </div>
      </Section>

      <CtaStrip
        title="Bewerbungs­unterlagen, die wirklich landen."
        body="Vom Foto bis zum Anschreiben — wir arbeiten an deinen Unterlagen, bis sie sitzen."
        primary={{ label: "Termin anfragen", href: "mailto:renate.woelflingseder@mentor.at" }}
        secondary={{ label: "Andere Regionen", href: "/projekte" }}
      />
    </>
  );
}
