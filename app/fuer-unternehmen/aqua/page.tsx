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
  title: "AQUA — Arbeitsplatznahe Qualifizierung",
  description:
    "AQUA verbindet Personalbedarf und Qualifizierungs­wunsch: Unternehmen finden passgenaue Fachkräfte, Arbeit­suchende erhalten praxisnahe Ausbildung im Wunschberuf.",
};

export default function AquaPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Für Unternehmen", href: "/fuer-unternehmen" },
          { label: "AQUA" },
        ]}
        eyebrow="AQUA"
        title="Arbeitsplatznahe Qualifizierung."
        lead="Unternehmen haben Schwierigkeiten, ihren Personalbedarf zu decken — Arbeit­suchende wollen sich für neue Berufsfelder qualifizieren. AQUA führt beide zusammen, mit maßgeschneiderter, betriebs­naher Ausbildung."
        variant="dark"
        image="/images/slider/slide5.jpg"
        imageAlt="AQUA-Schulung im Betrieb"
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="So funktioniert AQUA"
              title="Drei Schritte. Ein klarer Plan."
            />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Über 20 Jahre AQUA-Erfahrung in Oberösterreich und in der
              Steiermark. Wir kennen die Förderlandschaft, die Stolpersteine —
              und die Wege drumherum.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-5">
              {[
                {
                  n: "01",
                  title: "Parallele Aus- und Weiter­bildung",
                  body: "Theoretische Inhalte werden in Kursform vermittelt — abgestimmt auf den jeweiligen Beruf und Ihren Betrieb.",
                },
                {
                  n: "02",
                  title: "Praktische Einarbeitung im Unternehmen",
                  body: "Vom ersten Tag an Praxis. Die Auszubildenden lernen direkt am künftigen Arbeitsplatz und in Ihrem Team.",
                },
                {
                  n: "03",
                  title: "Übernahme in ein Dienstverhältnis",
                  body: "Nach Ausbildungsende erfolgt die Übernahme — der Lehrling kennt Ihren Betrieb bereits und kann sofort produktiv arbeiten.",
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="card-lift flex gap-5 rounded-[1.25rem] border border-line bg-cream p-6"
                >
                  <div className="font-display shrink-0 text-3xl font-semibold text-mentor-blue-deep">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                      {s.title}
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Für Unternehmen"
              title="Vorteile auf einen Blick."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Kein Dienstverhältnis während der Ausbildung — keine Lohn- und Gehaltskosten.",
                  "Maßgeschneiderte Fachkräfte nach Anforderungen Ihres Betriebs.",
                  "Schnelle Integration durch praxisnahe Schulung im Betrieb.",
                  "Organisatorische Entlastung durch Koordination mit dem AMS.",
                  "50 % Kurskosten­übernahme durch das AMS (max. 2.000 €).",
                  "Monatlicher Unternehmens­beitrag: 350 € netto (Stand 2025).",
                ]}
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Für Auszubildende"
              title="Voraussetzungen & Konditionen."
            />
            <div className="mt-8 space-y-4">
              <ProjectFacts
                facts={[
                  { label: "Alter", value: "ab 18 Jahren" },
                  {
                    label: "Status",
                    value:
                      "Beim AMS Steiermark bzw. Oberösterreich arbeitslos gemeldet",
                  },
                  {
                    label: "Hauptwohnsitz",
                    value: "im jeweiligen Bundesland",
                  },
                  {
                    label: "Deutsch",
                    value: "mind. A2 — bei Lehrausbildungen B1",
                  },
                  {
                    label: "Dauer",
                    value: "13 Wochen bis 24 Monate, je nach Programm",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Ausbildungs­modelle"
          title="Was im Rahmen von AQUA möglich ist."
          intro="Vom verkürzten Lehrabschluss bis zum spezialisierten Berufs­abschluss — wir designen passgenau."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Verkürzte Lehre",
              b: "Anrechnung von Vorqualifikationen, abgestimmte Lehrabschluss­prüfung.",
            },
            {
              t: "Kurse & Schulungen",
              b: "EDV, Buchhaltung, technische und kaufmännische Spezialisierungen.",
            },
            {
              t: "Fach- & Diplom­abschlüsse",
              b: "Vom Pflegeberuf bis zum technischen Diplom — anerkannt und förderfähig.",
            },
          ].map((m) => (
            <div
              key={m.t}
              className="card-lift rounded-[1.5rem] border border-line bg-cream p-7"
            >
              <div className="font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                {m.t}
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {m.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="blue">
        <SectionHeading
          eyebrow="Finanzierung & Förderung"
          title="Was während der Ausbildung gezahlt wird."
          intro="Auszubildende sind während AQUA finanziell abgesichert — mit AMS-Leistungen, Schulungs­zuschlägen und Versicherungs­schutz."
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
              <div className="mt-2 text-sm leading-snug text-mentor-blue-soft">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Ansprech­person Steiermark"
          title="Direkt mit der Projekt­leiterin sprechen."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Nicole Schreiber"
            role="Projekt­leitung AQUA Steiermark"
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
              <a
                href="tel:+436648117930"
                className="hover:text-mentor-blue-deep"
              >
                +43 664 811 79 30
              </a>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-line bg-cream p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              AQUA Oberösterreich
            </div>
            <div className="mt-3 text-base text-ink">
              MENTOR GmbH & Co OG
              <br />
              Schererstraße 18
              <br />
              4020 Linz
            </div>
            <div className="mt-3 text-sm text-ink-soft">
              <a
                href="tel:+437323701520"
                className="hover:text-mentor-blue-deep"
              >
                +43 732 370 152-0
              </a>
              <br />
              <a
                href="mailto:linz.office@mentor.at"
                className="hover:text-mentor-blue-deep"
              >
                linz.office@mentor.at
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Brauchen Sie Personal — oder einen Ausbildungs­platz?"
        body="Wir prüfen kostenlos, ob AQUA in Ihrem Fall sinnvoll ist und welche Förderung möglich ist."
        primary={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondary={{ label: "Alle Projekte", href: "/projekte" }}
      />
    </>
  );
}
