import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import {
  CheckList,
  CtaStrip,
  PersonCard,
  Section,
  SectionHeading,
} from "../../components/ui";

export const metadata: Metadata = {
  title: "Demokratiebildung",
  description:
    "„Das Parlament kommt zu Dir“ — interaktive Workshops gegen Antisemitismus für Schüler:innen der Sekundarstufe 2 und Lehrlinge.",
};

export default function DemokratiebildungPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Angebote", href: "/seminare-angebote" },
          { label: "Demokratiebildung" },
        ]}
        eyebrow="Demokratiebildung"
        title="Das Parlament kommt zu Dir."
        lead="Demokratie und Verantwortung — das Format gegen Antisemitismus. Ein zwei­stündiger Workshop für Schülerinnen und Schüler der Sekundarstufe 2 sowie Lehrlinge."
        variant="cream"
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Worum es geht"
              title="Hinschauen, verstehen, handeln."
              intro="Der Workshop setzt sich mit Ursachen, Erscheinungs­formen und Auswirkungen von Antisemitismus auseinander — basierend auf der Antisemitismus­studie 2024."
            />
            <blockquote className="font-display mt-8 rounded-2xl border-l-4 border-mentor-green bg-cream p-6 text-xl font-semibold leading-snug tracking-tight text-ink">
              „Demokratie lebt vom Hinschauen, Verstehen und Handeln."
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[1.5rem] border border-line bg-cream p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Ablauf & Ziel
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                Durch interaktive Übungen und konkrete Fall­beispiele lernen
                Teilnehmende, Vorurteile zu erkennen und Handlungs­möglichkeiten
                zu entwickeln. Ziel: Empathie und Zivilcourage stärken — als
                Basis für ein respektvolles, demokratisches Miteinander.
              </p>
              <div className="mt-7">
                <CheckList
                  items={[
                    "Ursachen und Erscheinungs­formen von Antisemitismus erkennen",
                    "Auswirkungen auf Betroffene und Gesellschaft verstehen",
                    "Vorurteile und Stereotype identifizieren",
                    "Konkrete Handlungs­möglichkeiten im Alltag entwickeln",
                    "Empathie & Zivilcourage als persönliche Haltung üben",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Zielgruppen"
          title="Für junge Menschen, die mitgestalten wollen."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            {
              t: "Schülerinnen & Schüler",
              b: "Sekundarstufe 2 — also AHS-Oberstufe, BHS und BMS. Klassen­workshop direkt in der Schule.",
            },
            {
              t: "Lehrlinge",
              b: "Berufsschul- oder Betriebs­workshops — passend zur Lehrlings­ausbildung in Österreich.",
            },
          ].map((g) => (
            <div
              key={g.t}
              className="card-lift rounded-[1.5rem] border border-line bg-paper p-7"
            >
              <div className="font-display text-2xl font-semibold tracking-tight text-ink">
                {g.t}
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {g.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Buchung & Kontakt"
          title="Workshop einfach anfragen."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Bernhard Reschreiter-Ladner, MBA"
            role="Workshop­leitung"
            phone="+43 664 882 93 295"
            email="workshop@mentor.at"
          />
          <div className="rounded-[1.5rem] border border-line bg-cream p-6 sm:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              Was du im ersten Mail mitschickst
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>• Schule / Lehrbetrieb / Berufsschule</li>
              <li>• Klassen­stufe oder Lehrjahr</li>
              <li>• Wunsch­termin (oder Zeitraum)</li>
              <li>• Anzahl Teilnehmender</li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Demokratie ist kein Selbstläufer."
        body="Wir bringen das Parlament direkt in deine Klasse oder deinen Lehr­betrieb — kostenlos für teilnehmende Schulen."
        primary={{ label: "Workshop anfragen", href: "mailto:workshop@mentor.at" }}
        secondary={{ label: "Über uns", href: "/ueber-uns/werte-und-prinzipien" }}
      />
    </>
  );
}
