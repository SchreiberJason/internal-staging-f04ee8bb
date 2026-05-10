import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { CtaStrip, Section, SectionHeading } from "../../components/ui";
import { Briefcase, Compass, GraduationCap, Hands } from "../../components/icons";

export const metadata: Metadata = {
  title: "Leitlinien",
  description:
    "Anspruch, Motivation und Selbstverständnis von MENTOR — als Bildungs- und Beratungsinstitut an der Schnittstelle zwischen Bildung, Beschäftigung und Gesellschaft.",
};

const motivation = [
  {
    icon: Briefcase,
    label: "Auftraggeber",
    text: "Maßnahmen­designs, die Probleme lösen und Ziele erreichen — fachlich präzise, organisatorisch verlässlich.",
  },
  {
    icon: GraduationCap,
    label: "Teilnehmer:innen",
    text: "Instrumente, Kenntnisse und Fähigkeiten, mit denen sie ihre persönlichen Ziele realisieren können.",
  },
  {
    icon: Hands,
    label: "Mitarbeitende",
    text: "Wertschätzung, Entscheidungs­transparenz und Gleich­berechtigung im Arbeitsalltag.",
  },
];

const anspruch = [
  {
    title: "Konzeption & Projektdesign",
    body: "Wir entwickeln optimale Lösungs­potenziale — passgenau, evidenz­basiert und mit Blick für das große Ganze.",
  },
  {
    title: "Projektorganisation",
    body: "Methodische Transparenz und kontinuierliche Reflexion. Wir wissen, was wir tun — und warum.",
  },
  {
    title: "Projekt­durchführung",
    body: "Wir unterstützen Teilnehmende mit Verlässlichkeit, Struktur und der Bereitschaft, neue Wege zu gehen.",
  },
  {
    title: "Interne Zusammenarbeit",
    body: "Wertschätzende, vertrauensvolle Kultur — weil gute Bildung nur in einem guten Arbeitsklima entsteht.",
  },
];

export default function LeitlinienPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Leitlinien" },
        ]}
        eyebrow="Leitlinien"
        title="An der Schnittstelle von Bildung, Beschäftigung und Gesellschaft."
        lead="MENTOR ist seit 1993 Anbieter hochwertiger Bildungs- und Beratungs­leistungen für öffentliche Auftraggeber, private Einrichtungen, Unternehmen und Einzelpersonen."
      />

      <Section variant="paper">
        <SectionHeading
          eyebrow="Leitmotiv"
          title="Wir aktivieren Potenziale."
          intro="Unter diesem Motto unterstützt MENTOR Menschen und Organisationen bei der Entwicklung persönlicher, beruflicher und unternehmerischer Ziele."
        />
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Motivation"
          title="Drei Interessenslagen, ein gemeinsames Ziel."
          intro="Wir nehmen alle drei Perspektiven gleichzeitig ernst — und sehen darin keinen Widerspruch, sondern unsere eigentliche Aufgabe."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {motivation.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="card-lift rounded-[1.5rem] border border-line bg-paper p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mentor-blue-soft text-mentor-blue-deep">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-display mt-6 text-2xl font-semibold tracking-tight text-ink">
                {label}
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Anspruch"
          title="Vier Bereiche, in denen wir Maßstäbe setzen."
          intro="Was wir uns selbst abverlangen — und woran man uns messen darf."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {anspruch.map((a, i) => (
            <div
              key={a.title}
              className="card-lift rounded-[1.5rem] border border-line bg-cream p-8"
            >
              <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-mentor-blue-deep">
                0{i + 1}
              </div>
              <div className="font-display mt-3 text-2xl font-semibold tracking-tight text-ink">
                {a.title}
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Werte sind das eine. Praxis das andere."
        body="Lies, wie sich unsere Leitlinien in acht konkreten Prinzipien niederschlagen."
        primary={{ label: "Werte & Prinzipien", href: "/ueber-uns/werte-und-prinzipien" }}
        secondary={{ label: "Geschichte ansehen", href: "/ueber-uns/geschichte" }}
      />
    </>
  );
}
