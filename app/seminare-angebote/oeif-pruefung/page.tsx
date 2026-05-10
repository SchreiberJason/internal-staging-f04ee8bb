import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import {
  CtaStrip,
  PersonCard,
  Section,
  SectionHeading,
} from "../../components/ui";

export const metadata: Metadata = {
  title: "ÖIF-Prüfung",
  description:
    "MENTOR ist zertifiziertes Prüfungszentrum des ÖIF — von Fit für Österreich (A1) über A2/B1 Deutsch-Test bis B2 ÖIF-Test und Integrations­prüfungen mit Werte­modul.",
};

const pruefungen = [
  { name: "Fit für Österreich", level: "A1", typ: "ÖIF-Test" },
  { name: "ÖIF-Test", level: "A2", typ: "Sprachtest" },
  { name: "Deutsch-Test für Österreich", level: "A2 / B1", typ: "Sprachtest" },
  { name: "B2 ÖIF-Test", level: "B2", typ: "Sprachtest" },
  { name: "Integrations­prüfung", level: "A1", typ: "Sprache + Werte" },
  { name: "Integrations­prüfung", level: "A2", typ: "Sprache + Werte" },
  { name: "Integrations­prüfung", level: "B1", typ: "Sprache + Werte" },
];

export default function OifPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Angebote", href: "/seminare-angebote" },
          { label: "ÖIF-Prüfung" },
        ]}
        eyebrow="Prüfung"
        title="ÖIF-Prüfungen am MENTOR-Standort."
        lead="MENTOR fungiert als zertifiziertes Prüfungs­zentrum des ÖIF. Unser Angebot umfasst Integrations­prüfungen mit Sprach­kompetenz sowie Werte- und Orientierungs­wissen entsprechend dem aktuellen Integrations­gesetz."
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Verfügbare Prüfungen"
          title="Sieben Prüfungs­formate — von A1 bis B2."
          intro="Welche Prüfung für dich relevant ist, hängt von deinem Aufenthalts­status und deinem persönlichen Ziel ab. Bei der Auswahl helfen wir gerne weiter."
        />
        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-line">
          <table className="w-full text-left">
            <thead className="bg-cream text-xs font-semibold uppercase tracking-[0.16em] text-mentor-blue-deep">
              <tr>
                <th className="px-6 py-4">Prüfung</th>
                <th className="px-6 py-4">Niveau</th>
                <th className="px-6 py-4">Typ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white text-sm">
              {pruefungen.map((p) => (
                <tr key={`${p.name}-${p.level}`} className="hover:bg-cream/50">
                  <td className="px-6 py-4 font-medium text-ink">{p.name}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-pill bg-mentor-blue-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-mentor-blue-deep">
                      {p.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{p.typ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="cream">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Zur Integrations­prüfung"
              title="Mehr als nur ein Sprachtest."
              intro="„Geprüft werden neben Aufgaben zur Überprüfung sprachlicher Kenntnisse auch Fragen zu zentralen Prinzipien des Lebens in Österreich, zu Rechten und Pflichten sowie gesellschaftlichen Werten und Regeln."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {[
                { t: "Sprachkompetenz", b: "Hörverstehen, Leseverstehen, Sprechen, Schreiben — auf dem jeweiligen Niveau." },
                { t: "Werte- und Orientierungs­wissen", b: "Grundprinzipien des österreichischen Zusammenlebens, Rechtssystem, Geschichte, Werte." },
                { t: "Praktische Aufgaben", b: "Realistische Alltags­szenarien — von der Arbeitssuche bis zum Arzt­besuch." },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-2xl border border-line bg-paper p-5"
                >
                  <div className="font-display text-lg font-semibold text-ink">
                    {b.t}
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">
                    {b.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Anmeldung & Kontakt"
          title="Anmeldung über das Wiener Büro."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="Manuela Fleischl"
            role="Ansprech­person Prüfungen"
            phone="+43 1 605 17-4102"
            email="manuela.fleischl@mentor.at"
          />
          <PersonCard
            name="Ivana Dokic-Kovac, MA"
            role="Ansprech­person Prüfungen"
            email="manuela.fleischl@mentor.at"
          />
          <div className="rounded-[1.5rem] border border-line bg-cream p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              Bürozeiten
            </div>
            <div className="mt-3 text-base text-ink">
              Mo–Do
              <br />
              08:00–11:30 / 12:00–16:00
              <br />
              <br />
              Freitag
              <br />
              08:00–13:00
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Du brauchst einen Prüfungs­termin oder Vorbereitung?"
        body="Wir kombinieren Prüfungs­anmeldung und passenden Vorbereitungs­kurs aus einer Hand."
        primary={{ label: "Termin anfragen", href: "mailto:manuela.fleischl@mentor.at" }}
        secondary={{ label: "Sprachkurse ansehen", href: "/seminare-angebote/deutsch-als-fremdsprache" }}
      />
    </>
  );
}
