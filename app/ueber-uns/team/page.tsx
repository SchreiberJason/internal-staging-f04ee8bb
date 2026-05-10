import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { CtaStrip, PersonCard, Section, SectionHeading } from "../../components/ui";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Geschäftsleitung und Ansprechpersonen von MENTOR — Region Mitte/West (Linz) und Region Ost/Süd (Wien).",
};

const leadership = [
  {
    name: "Ing. Mario Moser, MSc.",
    role: "Geschäftsführer",
    phone: "+43 1 605 17-0",
    email: "mario.moser@mentor.at",
  },
];

const ostSued = [
  {
    name: "Mag. Manfred Häusler",
    role: "Geschäftsbereichsleitung Ost / Süd",
    email: "manfred.haeusler@mentor.at",
  },
  {
    name: "Dr.in Erika Anderson-Niebauer",
    role: "Geschäftsbereichsleitung Ost / Süd",
    email: "erika.anderson-niebauer@mentor.at",
  },
  {
    name: "Aleksandra Djordjevic",
    role: "Rechnungswesen, Personalmanagement",
    email: "aleksandra.djordjevic@mentor.at",
  },
  {
    name: "Sophie Köpp",
    role: "Personal, Projekt­abrechnung & Controlling, Lager / Einkauf",
    email: "sophie.koepp@mentor.at",
  },
  {
    name: "Martina Graf",
    role: "Personalmanagement, Datenbanken",
    email: "martina.graf@mentor.at",
  },
  {
    name: "Sonja Pilch",
    role: "Sekretariat Region Süd",
    phone: "+43 664 811 79 30",
    email: "sonja.pilch@mentor.at",
  },
];

const mitteWest = [
  {
    name: "Mag. Andreas Ebner",
    role: "Geschäftsbereichsleitung Mitte / West",
    phone: "+43 732 370 152-0",
    email: "andreas.ebner@mentor.at",
  },
  {
    name: "Mag. Rudolf Gintenreiter, MBA, MPA",
    role: "Qualitätsmanagement, Datenschutz",
    email: "rudi.gintenreiter@mentor.at",
  },
  {
    name: "Karin Herbst",
    role: "Sekretariat",
    email: "karin.herbst@mentor.at",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Team" },
        ]}
        eyebrow="Team"
        title="Die Menschen hinter MENTOR."
        lead="Geschäftsleitung und Ansprech­personen in den Regionen Mitte/West und Ost/Süd. Schreib oder ruf direkt an — wir freuen uns."
        image="/images/slider/slide2.jpg"
        imageAlt="Trainerin mit Kursteilnehmenden"
      />

      <Section variant="paper">
        <SectionHeading eyebrow="Geschäftsführung" title="Leitung" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Region Mitte / West"
          title="Linz, Oberösterreich, Salzburg."
          intro="Hauptsitz in der Schererstraße 18 in Linz."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mitteWest.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Region Ost / Süd"
          title="Wien, Niederösterreich, Steiermark."
          intro="Standort Wien in der Cumberlandstraße 32-34."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ostSued.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Du bist unsicher, wer für dich zuständig ist?"
        body="Kein Problem — schreib uns ans allgemeine Postfach, wir leiten weiter."
        primary={{ label: "office@mentor.at", href: "mailto:office@mentor.at" }}
        secondary={{ label: "Alle Standorte", href: "/kontakt" }}
      />
    </>
  );
}
