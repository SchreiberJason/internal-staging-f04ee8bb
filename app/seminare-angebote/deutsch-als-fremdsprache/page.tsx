import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { CtaStrip, Section, SectionHeading } from "../../components/ui";
import { ArrowRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Deutsch als Fremdsprache",
  description:
    "Sprachkurse von A1 bis C1, ÖSD-Prüfungsvorbereitung, Grammatik- und Konversationskurse, Deutsch für Pflegeberufe, Wirtschaftsdeutsch und firmenspezifische Programme.",
};

const sprachkurse = [
  { level: "B1", note: "Leicht Fortgeschrittene", price: "€ 435", units: "48 EH" },
  { level: "B2", note: "Fortgeschrittene", price: "€ 435", units: "48 EH" },
  { level: "C1", note: "Weit Fortgeschrittene", price: "€ 435", units: "48 EH" },
];

const spezialkurse = [
  {
    title: "ÖSD-Prüfungs­vorbereitung",
    body: "B1, B2, C1 — gezielte Vorbereitung auf das österreichische Sprachdiplom.",
    price: "230 – 475 €",
    note: "ohne / mit Prüfung",
  },
  {
    title: "Grammatik­kurs",
    body: "Vertiefung der Strukturen, gezieltes Schließen von Lücken.",
    price: "230 €",
    note: "24 EH",
  },
  {
    title: "Konversations­kurs",
    body: "Sprechfertigkeit, Aussprache und freies Formulieren im Alltag.",
    price: "230 €",
    note: "24 EH",
  },
  {
    title: "Deutsch für Pflege­berufe",
    body: "Berufs­spezifischer Wortschatz, Kommunikation mit Patient:innen und im Team.",
    price: "995 €",
    note: "10 Wochen",
  },
  {
    title: "Wirtschafts­deutsch",
    body: "Sprache für Büro, Verkauf und Verhandlung — praxisnah aufgebaut.",
    price: "540 €",
    note: "5 Wochen",
  },
  {
    title: "Firmen­spezifische Kurse",
    body: "Inhouse-Programme nach Branche, Beruf und Niveau Ihrer Belegschaft.",
    price: "auf Anfrage",
    note: "individuell",
  },
];

export default function DeutschPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Angebote", href: "/seminare-angebote" },
          { label: "Deutsch als Fremdsprache" },
        ]}
        eyebrow="Sprache"
        title="Deutsch als Fremdsprache."
        lead="Mentor bietet eine Vielzahl an Sprachkursen, Prüfungs­vorbereitungs­kursen, Grammatik­kursen, Konversations­kursen, Berufskursen und firmen­spezifischen Kursen — alle aus einer Hand."
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Standard-Sprachkurse"
          title="48 Einheiten — intensiv oder berufsbegleitend."
          intro="Wahlweise als 4-wöchiger Intensivkurs oder über 8 Wochen am Abend. Einstieg jederzeit möglich nach Einstufungs­gespräch."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sprachkurse.map((s) => (
            <div
              key={s.level}
              className="card-lift relative overflow-hidden rounded-[1.5rem] border border-line bg-cream p-7"
            >
              <div className="font-display text-7xl font-semibold leading-none tracking-tight text-mentor-blue-deep">
                {s.level}
              </div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {s.note}
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                <div className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {s.price}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {s.units}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Spezialisierte Angebote"
          title="Vom Pflegeberuf bis zur ÖSD-Prüfung."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spezialkurse.map((k) => (
            <article
              key={k.title}
              className="card-lift flex flex-col rounded-[1.5rem] border border-line bg-paper p-7"
            >
              <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                {k.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {k.body}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                <div className="font-display text-base font-semibold text-mentor-blue-deep">
                  {k.price}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {k.note}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-line bg-cream p-9">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
              Beratung
            </div>
            <h3 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink">
              Welcher Kurs passt zu dir?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Schreib uns kurz, wo du sprachlich stehst und welches Ziel du
              hast — wir empfehlen dir den passenden Kurs (und sagen dir auch,
              wann nichts besonderes nötig ist).
            </p>
            <a
              href="mailto:wien.office@mentor.at"
              className="mt-6 inline-flex items-center gap-2 rounded-pill bg-mentor-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-mentor-blue-deep"
            >
              wien.office@mentor.at
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-[1.75rem] border border-line bg-mentor-blue-deep p-9 text-paper">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-green">
              Hauptbüro Linz
            </div>
            <h3 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight">
              Du erreichst uns auch direkt.
            </h3>
            <div className="mt-4 text-base leading-relaxed text-mentor-blue-soft">
              MENTOR GmbH
              <br />
              Schererstraße 18
              <br />
              4020 Linz
            </div>
            <div className="mt-5 flex flex-col gap-1">
              <a href="tel:+437323701520" className="text-base font-semibold hover:text-mentor-green">
                +43 732 370 152-0
              </a>
              <a href="mailto:office@mentor.at" className="text-base font-semibold hover:text-mentor-green">
                office@mentor.at
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Sprache, die in der Lehre und im Beruf trägt."
        body="Wir bauen den Sprachkurs so, dass du am Arbeitsplatz oder in der Berufsschule bestehst — nicht nur im Übungs­buch."
        primary={{ label: "Kurs anfragen", href: "/kontakt" }}
        secondary={{ label: "ÖIF-Prüfung ansehen", href: "/seminare-angebote/oeif-pruefung" }}
      />
    </>
  );
}
