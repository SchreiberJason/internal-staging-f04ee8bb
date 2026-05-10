import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { CtaStrip, Section, SectionHeading } from "../../components/ui";

export const metadata: Metadata = {
  title: "Geschichte",
  description:
    "Von den ersten Modellprojekten 1993 bis heute: über 30 Jahre MENTOR — die wichtigsten Stationen.",
};

const milestones = [
  {
    year: "1993",
    title: "Erste Modellprojekte",
    body: "MENTOR startet mit innovativen Bildungsprojekten in der Steiermark und in Oberösterreich.",
  },
  {
    year: "1995",
    title: "Expansion & Formalisierung",
    body: "Eröffnung weiterer Standorte in Wien und Niederösterreich. MENTOR formalisiert sich als Unternehmen.",
  },
  {
    year: "2000",
    title: "Über 150 Beschäftigte",
    body: "Wir wachsen — mit innovativen Bildungsangeboten wie Job-Mobil, Circus Internet und der Implacement-Stiftung.",
  },
  {
    year: "2004",
    title: "Spezifische Zielgruppen",
    body: "Verstärkte Modell­entwicklung für spezifische Zielgruppen in komplexen Organisations­formen.",
  },
  {
    year: "2008",
    title: "Reaktiv-Unternehmensgruppe",
    body: "Einbettung in eine größere Unternehmens­gruppe schafft neue Synergien und Stabilität.",
  },
  {
    year: "2014",
    title: "Salzburg",
    body: "Regionale Expansion in den Westen — Standorte in Salzburg gehen an den Start.",
  },
  {
    year: "2021",
    title: "300+ Beschäftigte",
    body: "MENTOR zählt zu den renommiertesten privaten Anbietern hochwertiger Bildungs- und Beratungs­leistungen.",
  },
  {
    year: "Heute",
    title: "Sechs Bundesländer",
    body: "Aktiv in Wien, Niederösterreich, Oberösterreich, Salzburg, Steiermark und Burgenland — mit Handschlag­qualität.",
  },
];

export default function GeschichtePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Geschichte" },
        ]}
        eyebrow="Geschichte"
        title="Über 30 Jahre. Ein roter Faden."
        lead="„Am Anfang war ein Gedanke — der Gedanke, dass sich die Anforderungen auf einem bis dahin statischen Arbeitsmarkt immer rascher verändern und damit neue Antworten erforderlich sind."
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Meilensteine"
          title="Wie aus einer Idee ein österreichweites Institut wurde."
        />

        <ol className="relative mt-14 space-y-6 before:absolute before:left-[1.4rem] before:top-2 before:bottom-2 before:w-px before:bg-line sm:before:left-[5.5rem]">
          {milestones.map((m, i) => (
            <li key={m.year} className="relative grid items-start gap-5 pl-12 sm:grid-cols-[7rem,1fr] sm:pl-0">
              <div className="absolute left-[0.85rem] top-2 grid h-6 w-6 place-items-center rounded-full border-4 border-paper bg-mentor-green sm:left-[4.95rem]">
                <span className="h-2 w-2 rounded-full bg-mentor-blue-deep" />
              </div>
              <div className="font-display text-xl font-semibold tracking-tight text-mentor-blue-deep sm:text-2xl">
                {m.year}
              </div>
              <div className={`card-lift rounded-[1.25rem] border border-line bg-white p-6 ${i % 2 === 0 ? "" : "sm:bg-cream"}`}>
                <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="blue">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-mentor-green">
            Heute
          </div>
          <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl">
            Über 300 Mitarbeitende. Sechs Bundesländer. Eine Haltung.
          </h2>
          <p className="text-pretty mt-5 text-lg leading-relaxed text-mentor-blue-soft">
            Aus den ersten Modellprojekten ist eines der größten privaten
            Bildungs- und Beratungs­unternehmen Österreichs geworden — und doch
            arbeiten wir heute mit derselben Haltung wie 1993: nah an den
            Menschen, ehrlich in der Sache, mit Handschlagqualität.
          </p>
        </div>
      </Section>

      <CtaStrip
        title="Du willst Teil unserer Geschichte werden?"
        body="Wir freuen uns über Bewerbungen — quer durch alle Regionen und Funktionen."
        primary={{ label: "Jobs ansehen", href: "/jobs" }}
        secondary={{ label: "Team kennenlernen", href: "/ueber-uns/team" }}
      />
    </>
  );
}
