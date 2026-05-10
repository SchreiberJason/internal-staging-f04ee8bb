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
  title: "Projekte Oberösterreich",
  description:
    "Begleitung in den Arbeitsmarkt Rohrbach — gezielte Vorbereitung auf die Jobsuche, vom Kompetenzprofil bis zum Bewerbungstraining.",
};

export default function OoePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: "Oberösterreich" },
        ]}
        eyebrow="Projekte · Oberösterreich"
        title="Begleitung in den Arbeits­markt Rohrbach."
        lead="Gezielte Vorbereitung auf die Jobsuche für den nachhaltigen (Wieder-)Einstieg in den Arbeitsmarkt."
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Projekt­details"
              title="Was wir gemeinsam tun."
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
                    "Individuelles Leistungs­profil & Kompetenz­bilanz",
                    "EDV-Grundlagen und Mediennutzung",
                    "Erstellung der Bewerbungs­unterlagen",
                    "Workshops zu ausgewählten Themen",
                    "Bewerbungs­training",
                    "Schnuppertage und Betriebs­praktika",
                    "Unterstützung bei der aktiven Jobsuche",
                    "Einzelberatung",
                  ]}
                />
              </div>
            </div>
            <ProjectFacts
              facts={[
                { label: "Voraussetzung", value: "Einladung durch die Regionale Geschäftsstelle des AMS" },
                { label: "Zielgruppe", value: "Arbeitssuchende jeden Alters" },
                { label: "Zeitraum", value: "14.04.2025 – 10.04.2026" },
                { label: "Veranstaltungs­ort", value: "Stadtplatz 10, 4150 Rohrbach" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Ansprech­person"
          title="Persönlich bei Sabina Oberngruber melden."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Sabina Oberngruber"
            role="Projektleitung"
            phone="+43 664 889 89 530"
            email="rohrbach.bida@mentor.at"
          />
        </div>
      </Section>

      <CtaStrip
        title="Vom AMS eingeladen? Wir begleiten dich von Tag eins."
        primary={{ label: "Direkt anrufen", href: "tel:+436648898 9530" }}
        secondary={{ label: "AQUA Oberösterreich ansehen", href: "/fuer-unternehmen/aqua" }}
      />
    </>
  );
}
