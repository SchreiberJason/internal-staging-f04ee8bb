import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { LinkCard, Section, SectionHeading } from "../components/ui";
import { CtaStrip } from "../components/ui";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "MENTOR ist seit 1993 ein unabhängiges Bildungs- und Beratungsinstitut in Österreich. Wir aktivieren Potenziale — bei Lehrlingen, Lernenden und Unternehmen.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
        eyebrow="Über MENTOR"
        title="Wir aktivieren"
        highlight="Potenziale."
        lead="Seit 1993 entwickeln und realisieren wir Bildungs- und Beratungs­programme für öffentliche Auftraggeber, private Einrichtungen, Unternehmen und einzelne Menschen — überall in Österreich."
        image="/images/slider/slide3.jpg"
        imageAlt="Beratungs­gespräch bei MENTOR"
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <SectionHeading
                eyebrow="Die kurze Version"
                title="Bildung an der Schnittstelle zwischen Mensch und Markt."
              />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
            <p>
              MENTOR ist seit 1993 Anbieter hochwertiger Bildungs- und
              Beratungs­leistungen. Heute zählen wir zu den{" "}
              <strong className="text-ink">
                renommiertesten privaten Bildungs- und Beratungs­anbietern
              </strong>{" "}
              Österreichs — mit über 300 Mitarbeitenden in sechs
              Bundesländern.
            </p>
            <p>
              Unter dem Motto „Wir aktivieren Potenziale!" begleiten wir
              Menschen und Organisationen bei der Entwicklung persönlicher,
              beruflicher und unternehmerischer Ziele. Wir verstehen uns als
              verlässlicher Partner — fachlich kompetent, menschlich nahbar,
              mit Handschlagqualität.
            </p>
            <p>
              Unsere Arbeit ist <strong className="text-ink">ÖCERT</strong>-
              und <strong className="text-ink">EFQM</strong>-zertifiziert. Wir
              kooperieren mit AMS, ÖIF und Ländern und sind in Wien,
              Niederösterreich, Oberösterreich, Salzburg, Steiermark und
              Burgenland aktiv.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Mehr lesen"
          title="Wer wir sind. Was uns trägt."
          intro="Vier vertiefende Seiten — vom Team über unsere Geschichte bis zu den Werten, die unser Handeln bestimmen."
          align="center"
        />

        <div className="mx-auto mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <LinkCard
            href="/ueber-uns/team"
            eyebrow="Team"
            title="Geschäftsleitung & Ansprech­personen"
            body="Die Menschen hinter MENTOR — mit direkten Kontakten in allen Regionen."
          />
          <LinkCard
            href="/ueber-uns/leitlinien"
            eyebrow="Leitlinien"
            title="Anspruch & Motivation"
            body="Was Auftraggeber, Teilnehmende und Mitarbeitende von uns erwarten dürfen."
            variant="cream"
          />
          <LinkCard
            href="/ueber-uns/werte-und-prinzipien"
            eyebrow="Werte"
            title="Acht Prinzipien unseres Handelns"
            body="Von Kundinnenorientierung bis Gleichstellung — die Grundlage unserer Arbeit."
          />
          <LinkCard
            href="/ueber-uns/geschichte"
            eyebrow="Geschichte"
            title="Vom Modellprojekt 1993 zum Bundesland-Anbieter."
            body="Über 30 Jahre MENTOR — die wichtigsten Stationen auf einen Blick."
            variant="blue"
          />
        </div>
      </Section>

      <CtaStrip
        title="Reden wir über deine Frage."
        body="Kein Sales-Pingpong, kein Formular-Dschungel. Sag uns, was du brauchst — wir antworten innerhalb eines Werktags."
        primary={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
        secondary={{ label: "Jobs bei MENTOR", href: "/jobs" }}
      />
    </>
  );
}
