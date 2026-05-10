import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { Section } from "../../components/ui";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutz­erklärung der MENTOR GmbH & Co OG nach DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
          { label: "Datenschutz" },
        ]}
        eyebrow="Rechtliches"
        title="Datenschutz."
        lead="Wir nehmen den Schutz deiner persönlichen Daten ernst. Diese Erklärung informiert dich gemäß der Datenschutz-Grundverordnung (DSGVO) über Zweck, Umfang und Rechte rund um die Datenverarbeitung bei MENTOR."
      />

      <Section variant="paper">
        <div className="mx-auto max-w-3xl space-y-8">
          <Block title="1. Verantwortliche Stelle">
            MENTOR GmbH & Co OG · Schererstraße 18, 4020 Linz · Österreich
            <br />
            E-Mail:{" "}
            <a
              href="mailto:datenschutz@mentor.at"
              className="text-mentor-blue underline underline-offset-4"
            >
              datenschutz@mentor.at
            </a>
            <br />
            Datenschutz­beauftragter: Mag. Rudolf Gintenreiter, MBA, MPA
          </Block>

          <Block title="2. Datenarten & Zwecke">
            Wir verarbeiten personen­bezogene Daten ausschließlich zur Erbringung
            unserer Bildungs- und Beratungs­leistungen, zur Vertragsabwicklung
            mit Auftraggeber:innen, zur Bewerber:innen­auswahl sowie zur
            Beantwortung deiner Anfragen.
          </Block>

          <Block title="3. Rechtsgrundlagen">
            Verarbeitungen erfolgen auf Basis von Art. 6 Abs. 1 lit. a (Einwilligung),
            lit. b (Vertragserfüllung), lit. c (rechtliche Verpflichtung) oder
            lit. f (berechtigtes Interesse) DSGVO.
          </Block>

          <Block title="4. Empfänger:innen">
            Daten werden nur an Auftrags­verarbeiter:innen und Stellen
            weitergegeben, mit denen wir vertraglich verbunden sind (z. B. AMS,
            ÖIF, IT-Dienst­leister) oder zu denen eine gesetzliche Pflicht
            besteht.
          </Block>

          <Block title="5. Speicherdauer">
            Wir speichern Daten nur so lange, wie dies für den jeweiligen Zweck
            erforderlich ist oder gesetzlich vorgeschrieben ist (insbesondere
            bundesgesetzliche Aufbewahrungs­fristen von bis zu 7 Jahren).
          </Block>

          <Block title="6. Deine Rechte">
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Daten­übertragbarkeit und Widerspruch.
            Schreib uns dazu einfach an{" "}
            <a
              href="mailto:datenschutz@mentor.at"
              className="text-mentor-blue underline underline-offset-4"
            >
              datenschutz@mentor.at
            </a>
            .
          </Block>

          <Block title="7. Beschwerderecht">
            Bei Verstößen gegen die DSGVO kannst du dich bei der österreichischen
            Datenschutz­behörde (
            <a
              href="https://www.dsb.gv.at"
              target="_blank"
              rel="noreferrer"
              className="text-mentor-blue underline underline-offset-4"
            >
              www.dsb.gv.at
            </a>
            ) beschweren.
          </Block>

          <Block title="8. Cookies & Webanalyse">
            Diese Website setzt nur technisch notwendige Cookies. Tracking- oder
            Marketing-Cookies werden ausschließlich nach deiner ausdrücklichen
            Einwilligung über das Cookie-Banner gesetzt.
          </Block>

          <Block title="9. Bewerber:innen­daten">
            Bewerbungs­unterlagen werden nach Abschluss des Bewerbungs­verfahrens
            gelöscht, sofern du nicht in eine längere Aufbewahrung (z. B. für
            künftige Stellen) ausdrücklich eingewilligt hast.
          </Block>

          <p className="rounded-2xl border border-line bg-cream p-5 text-sm text-ink-soft">
            Stand: {new Date().toLocaleDateString("de-AT", { year: "numeric", month: "long" })}.
            Diese Erklärung wird laufend aktualisiert. Die jeweils gültige Version
            findest du auf dieser Seite.
          </p>
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
