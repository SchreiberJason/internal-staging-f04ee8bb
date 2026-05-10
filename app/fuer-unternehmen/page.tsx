import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import {
  CheckList,
  CtaStrip,
  LinkCard,
  Section,
  SectionHeading,
} from "../components/ui";
import { ArrowRight, Briefcase, Hands, Spark } from "../components/icons";

export const metadata: Metadata = {
  title: "Für Unternehmen",
  description:
    "Lehrlinge finden, fördern, halten — MENTOR unterstützt Unternehmen beim Recruiting, bei Förderungen und bei der sprachlichen und fachlichen Vorbereitung.",
};

export default function FuerUnternehmenPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Für Unternehmen" },
        ]}
        eyebrow="Für Unternehmen"
        title="Lehrlinge finden, fördern, halten."
        lead="Wir vermitteln passgenaue Lehrlinge, übernehmen die fachliche und sprachliche Vorbereitung und entlasten Sie bei Förderungen und AMS-Anträgen — vom Erstgespräch bis zur Einarbeitung."
      />

      <Section variant="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Was wir leisten"
              title="Eine Anlaufstelle für Personal, Sprache und Förderung."
              intro="Statt drei Dienstleister:innen zu koordinieren, holen Sie sich MENTOR an Bord. Wir kennen den Markt, die Förderlogik und die Menschen — seit über 25 Jahren."
            />
          </div>
          <div className="lg:col-span-7">
            <CheckList
              items={[
                <span key="aqua">
                  <strong className="text-ink">AQUA</strong> — Arbeitsplatznahe
                  Qualifizierung im Wunschberuf, finanziell gestützt vom AMS.
                </span>,
                <span key="rec">
                  <strong className="text-ink">Recruiting & Matching</strong> —
                  motivierte Kandidat:innen, vorqualifiziert und passgenau
                  vorgestellt.
                </span>,
                <span key="foerd">
                  <strong className="text-ink">Förderberatung</strong> mit AMS,
                  ÖIF und Land — wir holen heraus, was geht.
                </span>,
                <span key="sprach">
                  <strong className="text-ink">Sprach- und
                  Integrations­begleitung</strong> direkt im Betrieb — passgenau
                  und berufsbezogen.
                </span>,
                <span key="weiter">
                  <strong className="text-ink">Personalentwicklung</strong> —
                  Aus- und Weiterbildung, Gesundheits­förderung,
                  Veränderungs­begleitung.
                </span>,
              ]}
            />
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <SectionHeading
          eyebrow="Drei Argumente"
          title="Warum sich AQUA für Ihren Betrieb auszahlt."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Argument
            icon={Briefcase}
            label="Zeitlich entlastet"
            body="Kein Dienstverhältnis während der Ausbildung — das AMS übernimmt die Existenzsicherung der Auszubildenden."
          />
          <Argument
            icon={Spark}
            label="Passgenau qualifiziert"
            body="Ausbildung am echten Arbeitsplatz, mit Lerninhalten, die auf Ihre betrieblichen Bedürfnisse abgestimmt sind."
          />
          <Argument
            icon={Hands}
            label="Förder­technisch geklärt"
            body="50 % der Kurskosten übernimmt das AMS (max. 2.000 €). Wir kümmern uns um den Antrag und die Abrechnung."
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/fuer-unternehmen/aqua"
            className="inline-flex items-center gap-2 rounded-pill bg-mentor-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue-deep"
          >
            AQUA im Detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section variant="paper">
        <SectionHeading
          eyebrow="Weitere Angebote"
          title="Über AQUA hinaus."
          intro="Wir unterstützen Unternehmen mit einem breiten Spektrum an Bildungs- und Beratungs­leistungen."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            href="/seminare-angebote/deutsch-als-fremdsprache"
            eyebrow="Sprache"
            title="Berufs­deutsch & firmenspezifische Sprachkurse"
            body="Maßgeschneiderte Sprach­förderung für Ihre Beschäftigten — vom Pflegeberuf bis zum Wirtschafts­deutsch."
          />
          <LinkCard
            href="/seminare-angebote/oeif-pruefung"
            eyebrow="Prüfung"
            title="ÖIF-Prüfungen direkt im Betrieb"
            body="MENTOR ist zertifiziertes ÖIF-Prüfungs­zentrum — gut für Mitarbeitende, die ihre Sprach­kompetenz nachweisen müssen."
            variant="cream"
          />
          <LinkCard
            href="/projekte"
            eyebrow="Projekte"
            title="Regionale Projekte mit AMS"
            body="Aktuelle MENTOR-Projekte in fünf Bundesländern — viele davon mit Andock­möglichkeit für Unternehmen."
          />
        </div>
      </Section>

      <CtaStrip
        title="Reden wir über Ihren Personalbedarf."
        body="Wir hören erst zu — und schlagen dann passgenau vor, welches Programm und welche Förderung für Ihren Betrieb sinnvoll ist."
        primary={{ label: "Beratungs­gespräch anfragen", href: "/kontakt" }}
        secondary={{ label: "AQUA-Programm ansehen", href: "/fuer-unternehmen/aqua" }}
      />
    </>
  );
}

function Argument({
  icon: Icon,
  label,
  body,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  body: string;
}) {
  return (
    <div className="card-lift rounded-[1.5rem] border border-line bg-paper p-7">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mentor-blue-deep text-mentor-green">
        <Icon className="h-6 w-6" />
      </div>
      <div className="font-display mt-6 text-2xl font-semibold tracking-tight text-ink">
        {label}
      </div>
      <p className="mt-3 text-base leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
