import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { CtaStrip, Section, SectionHeading } from "../../components/ui";

export const metadata: Metadata = {
  title: "Werte und Prinzipien",
  description:
    "Die acht Werte und Prinzipien, die das Handeln von MENTOR bestimmen — von Kund:innenorientierung bis Gleichstellung.",
};

const principles = [
  {
    n: "01",
    title: "Kund:innen­orientierung",
    body: "Innerhalb des vereinbarten Rahmens entwickeln wir Lösungs­potenziale, die wirklich tragen — nicht nur auf dem Papier.",
  },
  {
    n: "02",
    title: "Individualität & Ganzheitlichkeit",
    body: "Im Kern steht der Mensch. Wir achten die Vielfalt menschlicher Welten und denken Bildung vom Menschen aus, nicht vom Lehrplan.",
  },
  {
    n: "03",
    title: "Lernen als Prozess",
    body: "Lernen ist ein permanenter Prozess — kein Input-Output-Mechanismus. Wir geben Zeit, Raum und Begleitung, statt nur abzufragen.",
  },
  {
    n: "04",
    title: "Respekt & Wertschätzung",
    body: "Fairness, Toleranz, Akzeptanz. Führungskräfte tragen diese Haltung als Vorbild — auch dann, wenn es unbequem wird.",
  },
  {
    n: "05",
    title: "Nachhaltigkeit",
    body: "Verantwortungsbewusster Umgang mit ökologischen, sozialen und ökonomischen Ressourcen — als Voraussetzung, nicht als Marketing.",
  },
  {
    n: "06",
    title: "Gesellschaftsbezug",
    body: "Wir verstehen unsere Arbeit als Beitrag an der Gesellschaft. Klar gegen Benachteiligung und Diskriminierung.",
  },
  {
    n: "07",
    title: "Gleichstellungs­orientierung",
    body: "Chancen­gleichheit und familien­freundliche Unternehmenskultur — unter anderem durch individuelle Arbeitszeit­modelle.",
  },
  {
    n: "08",
    title: "Stete Weiter­entwicklung",
    body: "Prozess­evaluierung, Mitarbeiter:innen­potenziale, Einbindung relevanter Umwelten — weil Stillstand das Gegenteil von Bildung ist.",
  },
];

export default function WertePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Werte & Prinzipien" },
        ]}
        eyebrow="Werte & Prinzipien"
        title="Acht Grundsätze, die unser Handeln tragen."
        lead="Sie spiegeln unsere Haltung zu Mensch und Gesellschaft wider und durchdringen unser Handeln nach innen wie nach außen — als Ausgangspunkt für Entwicklung und Innovation."
      />

      <Section variant="paper">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-6">
          {principles.map((p) => (
            <article
              key={p.n}
              className="card-lift relative overflow-hidden rounded-[1.5rem] border border-line bg-white p-8"
            >
              <div className="absolute right-6 top-6 font-display text-6xl font-semibold leading-none text-cream-deep">
                {p.n}
              </div>
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
                  Prinzip {p.n}
                </div>
                <h3 className="font-display mt-3 text-2xl font-semibold leading-tight tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="cream">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-mentor-blue-deep">
            Selbstverständnis
          </div>
          <blockquote className="font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            „Werte sind keine Schlagworte, sondern die Grundlage von allem, was
            wir tun."
          </blockquote>
        </div>
      </Section>

      <CtaStrip
        title="Wie diese Werte konkret aussehen?"
        body="Schau dir unsere Programme an — vom AQUA-Projekt bis zur Demokratie-Werkstatt."
        primary={{ label: "Programme entdecken", href: "/seminare-angebote" }}
        secondary={{ label: "Geschichte ansehen", href: "/ueber-uns/geschichte" }}
      />
    </>
  );
}
