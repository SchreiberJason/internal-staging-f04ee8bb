import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { Section } from "../../components/ui";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Offenlegung der MENTOR GmbH & Co OG.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
          { label: "Impressum" },
        ]}
        eyebrow="Rechtliches"
        title="Impressum."
        lead="Offenlegung gemäß § 25 Mediengesetz und § 5 E-Commerce-Gesetz."
      />

      <Section variant="paper">
        <div className="mx-auto max-w-3xl space-y-8">
          <Block title="Medieninhaber & Herausgeber">
            MENTOR GmbH & Co OG
            <br />
            Schererstraße 18
            <br />
            4020 Linz
            <br />
            Österreich
          </Block>

          <Block title="Kontakt">
            Telefon: +43 732 370 152-0
            <br />
            E-Mail:{" "}
            <a
              href="mailto:office@mentor.at"
              className="text-mentor-blue underline underline-offset-4"
            >
              office@mentor.at
            </a>
            <br />
            Web:{" "}
            <a
              href="https://www.mentor.at"
              className="text-mentor-blue underline underline-offset-4"
            >
              www.mentor.at
            </a>
          </Block>

          <Block title="Firmenbuch">
            Firmenbuch­nummer: nach Eintragung
            <br />
            Firmenbuch­gericht: Landesgericht Linz
          </Block>

          <Block title="UID-Nummer">
            Wird auf Anfrage bekannt­gegeben.
          </Block>

          <Block title="Aufsichtsbehörde / Gewerbe">
            Magistrat der Stadt Linz · Bezirksverwaltungs­behörde
            <br />
            Anwendbare gewerberechtliche Vorschriften: Gewerbeordnung BGBl. Nr.
            194/1994 idgF
          </Block>

          <Block title="Unternehmens­gegenstand">
            Bildungs- und Beratungs­dienstleistungen, Erwachsenen­bildung,
            Sprach­schulung, Unternehmens­beratung sowie Aus- und Weiterbildung.
          </Block>

          <Block title="Konzeption, Gestaltung & Umsetzung">
            Inhouse — MENTOR GmbH & Co OG.
          </Block>

          <Block title="Haftungs­ausschluss">
            Trotz sorgfältiger inhaltlicher Kontrolle übernimmt MENTOR keine
            Haftung für die Inhalte externer Links. Für den Inhalt verlinkter
            Seiten sind ausschließlich deren Betreiber:innen verantwortlich.
          </Block>

          <Block title="Urheberrecht">
            Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder,
            Grafiken) unterliegen dem österreichischen Urheber­recht. Eine
            Verwendung außerhalb der gesetzlich zulässigen Schranken bedarf der
            schriftlichen Zustimmung von MENTOR.
          </Block>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-3 text-base leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}
