import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import {
  CtaStrip,
  LinkCard,
  Section,
  SectionHeading,
} from "../components/ui";
import { Briefcase, Compass, GraduationCap } from "../components/icons";

export const metadata: Metadata = {
  title: "Seminare & Angebote",
  description:
    "Drei Kernbereiche: AMS-Begleitung, Aus- und Weiterbildung, Unternehmens­beratung. Sprachkurse, ÖIF-Prüfungen, Demokratiebildung — alles aus einer Hand.",
};

const fields = [
  {
    icon: Compass,
    title: "Arbeitsmarkt­service-Begleitung",
    body: "Wiedereinstieg in den Arbeitsmarkt — durch Seminare, Kurse, Beratung, Qualifizierung, Vermittlungs­unterstützung und alternative Integrations­formen.",
  },
  {
    icon: GraduationCap,
    title: "Aus- und Weiterbildung",
    body: "Breites Themen­angebot zur persönlichen und beruflichen Entwicklung — von Sprache über Soft Skills bis zu Fach­ausbildungen.",
  },
  {
    icon: Briefcase,
    title: "Unternehmens­beratung",
    body: "Qualifizierung, Personal­entwicklung und Gesundheits­förderung für Betriebe und ihre Beschäftigten.",
  },
];

export default function AngeboteOverviewPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Angebote" }]}
        eyebrow="Seminare & Angebote"
        title="Bildung an der Schnitt­stelle zwischen Mensch und Unternehmen."
        lead="MENTOR bietet eine breite Palette an Dienstleistungen, deren gemeinsames Ziel die Entwicklung und Umsetzung von persönlichen, beruflichen und unternehmens­bezogenen Zielen ist."
        image="/images/slider/slide2.jpg"
        imageAlt="Kursteilnehmende im Seminar"
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Drei Kernbereiche"
          title="So sind unsere Angebote strukturiert."
          intro="Egal aus welcher Richtung du kommst — bei MENTOR findest du passende Programme."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {fields.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-lift rounded-[1.5rem] border border-line bg-cream p-8"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mentor-blue-deep text-mentor-green">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold leading-tight tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Detailseiten"
          title="Schau dir die Angebote im Detail an."
          align="center"
        />
        <div className="mx-auto mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            href="/seminare-angebote/deutsch-als-fremdsprache"
            eyebrow="Sprache"
            title="Deutsch als Fremdsprache"
            body="A1 bis C1 — Sprachkurse, ÖSD-Prüfungs­vorbereitung, Grammatik, Konversation, Pflege- und Wirtschafts­deutsch."
          />
          <LinkCard
            href="/seminare-angebote/oeif-pruefung"
            eyebrow="Prüfung"
            title="ÖIF-Prüfung"
            body="MENTOR ist zertifiziertes Prüfungs­zentrum des ÖIF — von Fit für Österreich (A1) bis B2 ÖIF-Test."
            variant="blue"
          />
          <LinkCard
            href="/seminare-angebote/demokratiebildung"
            eyebrow="Werte"
            title="Demokratiebildung"
            body={`„Das Parlament kommt zu Dir“ — interaktive Workshops gegen Antisemitismus für Schüler:innen und Lehrlinge.`}
          />
          <LinkCard
            href="/fuer-unternehmen/aqua"
            eyebrow="Unternehmen"
            title="AQUA — Arbeitsplatz­nahe Qualifizierung"
            body="Vor­qualifizierung künftiger Mitarbeitender direkt im Wunsch­betrieb. Mit AMS-Förderung."
            variant="cream"
          />
          <LinkCard
            href="/projekte"
            eyebrow="Projekte"
            title="Regionale AMS-Projekte"
            body="Bewerbungs­beratung, Berufs­orientierung, Jugend­college — in fünf Bundesländern."
          />
          <LinkCard
            href="/kontakt"
            eyebrow="Maßgeschneidert"
            title="Firmenspezifische Programme"
            body="Du suchst etwas, das hier nicht steht? Wir designen passgenau — schreib uns einfach an."
          />
        </div>
      </Section>

      <CtaStrip
        title="Du weißt nicht genau, welches Angebot zu dir passt?"
        body="Erzähl uns kurz von dir oder deinem Betrieb — wir empfehlen dir den nächsten sinnvollen Schritt."
        primary={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondary={{ label: "Über uns", href: "/ueber-uns" }}
      />
    </>
  );
}
