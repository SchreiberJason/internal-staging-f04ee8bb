import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { CtaStrip, OfficeBox, Section, SectionHeading } from "../components/ui";
import { ArrowRight, Mail, Phone } from "../components/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "MENTOR Hauptsitz Linz, Standort Wien und allgemeine Kontaktdaten. Schreib oder ruf direkt an — wir antworten innerhalb eines Werktags.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
        eyebrow="Kontakt"
        title="Sag Hallo."
        lead="Persönlich, telefonisch oder per E-Mail. Wir freuen uns über deine Nachricht — und antworten innerhalb eines Werktags."
      />

      <Section variant="paper">
        <div className="grid gap-6 lg:grid-cols-2">
          <OfficeBox
            title="Hauptsitz Mitte / West (Linz)"
            address="Schererstraße 18 · 4020 Linz"
            phone="+43 732 370 152-0"
            email="linz.office@mentor.at"
          />
          <OfficeBox
            title="Standort Ost / Süd (Wien)"
            address="Cumberlandstraße 32-34 · 1140 Wien"
            phone="+43 1 605 17-1100"
            email="wien.office@mentor.at"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <a
            href="mailto:office@mentor.at"
            className="card-lift flex items-center gap-4 rounded-[1.5rem] border border-line bg-cream p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-mentor-blue-soft text-mentor-blue-deep">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Allgemein
              </div>
              <div className="mt-1 font-medium text-ink">office@mentor.at</div>
            </div>
          </a>
          <a
            href="tel:+437323701520"
            className="card-lift flex items-center gap-4 rounded-[1.5rem] border border-line bg-cream p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-mentor-blue-soft text-mentor-blue-deep">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Zentrale
              </div>
              <div className="mt-1 font-medium text-ink">+43 732 370 15 20</div>
            </div>
          </a>
          <div className="card-lift flex items-center gap-4 rounded-[1.5rem] border border-line bg-cream p-6">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-mentor-blue-soft text-mentor-blue-deep">
              <span className="font-display text-base font-semibold">@</span>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Social
              </div>
              <a
                href="https://www.facebook.com/MentorGmbH/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block font-medium text-ink hover:text-mentor-blue"
              >
                facebook.com/MentorGmbH
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Schreib uns"
              title="Erzähl, was du brauchst."
              intro="Egal ob Lehrling, Unternehmen, Behörde oder Schule — schreib uns kurz, was dich beschäftigt. Wir hören erst zu, dann schlagen wir konkret was vor."
            />
          </div>

          <form
            className="space-y-4 rounded-[1.75rem] border border-line bg-paper p-8 sm:p-10 lg:col-span-7"
            aria-label="Kontaktformular"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Max Mustermann" />
              <Field
                label="E-Mail"
                type="email"
                name="email"
                placeholder="m.mustermann@firma.at"
              />
            </div>

            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Ich bin
              </span>
              <div className="flex flex-wrap gap-2">
                {["Lehrling", "Unternehmen", "AMS / Behörde", "Schule"].map(
                  (r, i) => (
                    <label
                      key={r}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-pill border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition has-[:checked]:border-mentor-blue has-[:checked]:bg-mentor-blue-soft has-[:checked]:text-mentor-blue-deep"
                    >
                      <input
                        type="radio"
                        name="role"
                        defaultChecked={i === 0}
                        className="sr-only"
                      />
                      {r}
                    </label>
                  )
                )}
              </div>
            </div>

            <Field
              label="Worum geht's?"
              name="message"
              as="textarea"
              placeholder="Erzähl uns kurz, was du brauchst — wir melden uns innerhalb eines Werktags."
            />

            <div className="flex items-start gap-2 pt-2 text-xs text-ink-soft">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-line accent-mentor-blue"
              />
              <span>
                Ich stimme zu, dass meine Angaben für die Bearbeitung der
                Anfrage gespeichert werden.{" "}
                <a
                  href="/kontakt/datenschutz"
                  className="text-mentor-blue underline underline-offset-4"
                >
                  Datenschutz
                </a>
                .
              </span>
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-pill bg-mentor-blue px-6 py-4 text-base font-semibold text-white transition hover:bg-mentor-blue-deep sm:w-auto"
            >
              Nachricht senden
              <ArrowRight className="h-5 w-5 nudge-x" />
            </button>
          </form>
        </div>
      </Section>

      <CtaStrip
        eyebrow="Service"
        title="Sitemap, Impressum, Datenschutz."
        body="Alle rechtlichen Seiten und die Sitemap findest du gebündelt im Footer."
        primary={{ label: "Impressum", href: "/kontakt/impressum" }}
        secondary={{ label: "Datenschutz", href: "/kontakt/datenschutz" }}
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          className="w-full resize-none rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-mentor-blue focus:outline-none focus:ring-4 focus:ring-mentor-blue-soft/60"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-pill border border-line bg-white px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-mentor-blue focus:outline-none focus:ring-4 focus:ring-mentor-blue-soft/60"
        />
      )}
    </label>
  );
}
