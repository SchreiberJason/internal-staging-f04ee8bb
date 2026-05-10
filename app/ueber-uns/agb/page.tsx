import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { Section } from "../../components/ui";

export const metadata: Metadata = {
  title: "AGB — Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der MENTOR GmbH & Co OG.",
};

export default function AgbPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "AGB" },
        ]}
        eyebrow="Rechtliches"
        title="Allgemeine Geschäftsbedingungen."
        lead="Unsere AGB regeln den Rahmen für alle Bildungs- und Beratungs­leistungen der MENTOR GmbH & Co OG."
      />

      <Section variant="paper">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-ink-soft">
          <p>
            Die nachfolgenden Allgemeinen Geschäfts­bedingungen gelten für sämtliche
            Vertrags­verhältnisse zwischen der MENTOR GmbH & Co OG und ihren
            Auftraggeber:innen, sofern nicht ausdrücklich Abweichendes vereinbart
            wurde.
          </p>

          <Block title="1. Geltungsbereich">
            Diese AGB gelten für alle Bildungs-, Beratungs- und sonstigen
            Dienstleistungen, die MENTOR im Rahmen ihrer Geschäftstätigkeit
            erbringt. Abweichende Regelungen bedürfen der Schriftform.
          </Block>

          <Block title="2. Vertragsabschluss">
            Verträge kommen durch Auftrags­bestätigung von MENTOR zustande.
            Anmeldungen zu Seminaren oder Kursen werden in der Reihenfolge des
            Eingangs berücksichtigt; ein Anspruch auf Aufnahme besteht erst nach
            schriftlicher Bestätigung.
          </Block>

          <Block title="3. Leistungserbringung">
            MENTOR erbringt sämtliche Leistungen mit der Sorgfalt eines
            ordentlichen Unternehmens. Inhaltliche Anpassungen einzelner
            Programme bleiben vorbehalten, sofern dies aus didaktischen oder
            organisatorischen Gründen erforderlich ist.
          </Block>

          <Block title="4. Entgelt & Zahlung">
            Das vereinbarte Entgelt ist — sofern nicht anders vereinbart —
            innerhalb von 14 Tagen nach Rechnungs­legung ohne Abzug fällig. Bei
            Zahlungsverzug behält sich MENTOR das Recht vor, die Leistung
            auszusetzen.
          </Block>

          <Block title="5. Stornierung">
            Anmeldungen können bis 14 Tage vor Kursbeginn kostenfrei storniert
            werden. Bei späterer Stornierung wird je nach Zeitpunkt ein anteiliger
            Stornobetrag verrechnet. Details regelt die jeweilige
            Auftrags­bestätigung.
          </Block>

          <Block title="6. Haftung">
            MENTOR haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.
            Die Haftung für leichte Fahrlässigkeit ist — soweit gesetzlich
            zulässig — ausgeschlossen.
          </Block>

          <Block title="7. Datenschutz">
            Die Verarbeitung personen­bezogener Daten erfolgt im Einklang mit der
            Datenschutz­grund­verordnung. Details siehe{" "}
            <a href="/kontakt/datenschutz" className="text-mentor-blue underline underline-offset-4">
              Datenschutz­erklärung
            </a>
            .
          </Block>

          <Block title="8. Schlussbestimmungen">
            Es gilt österreichisches Recht. Gerichtsstand ist Linz. Sollten
            einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der
            übrigen unberührt.
          </Block>

          <p className="rounded-2xl border border-line bg-cream p-5 text-sm">
            <strong className="text-ink">Hinweis:</strong> Die hier abgebildeten
            AGB sind eine Zusammenfassung. Die rechtsverbindliche Fassung
            erhältst du auf Anfrage unter{" "}
            <a href="mailto:office@mentor.at" className="text-mentor-blue underline underline-offset-4">
              office@mentor.at
            </a>
            .
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
      <div className="mt-3">{children}</div>
    </section>
  );
}
