import Link from "next/link";
import { Logo } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-display text-xl font-semibold tracking-tight">
                MENTOR
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-paper/55">
                Bildung · Beratung · Österreich
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">
            Wir aktivieren Potenziale — bei Lehrlingen und Unternehmen. Seit
            über 25 Jahren, in sechs Bundesländern, mit Handschlagqualität.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-paper/60">
            <span className="rounded-pill border border-white/15 px-3 py-1">
              ÖCERT
            </span>
            <span className="rounded-pill border border-white/15 px-3 py-1">
              EFQM
            </span>
            <span className="rounded-pill border border-white/15 px-3 py-1">
              AMS-Partner
            </span>
            <span className="rounded-pill border border-white/15 px-3 py-1">
              ÖIF anerkannt
            </span>
          </div>
        </div>

        <FooterCol
          title="Angebote"
          links={[
            { label: "Übersicht", href: "/seminare-angebote" },
            { label: "Deutsch als Fremdsprache", href: "/seminare-angebote/deutsch-als-fremdsprache" },
            { label: "ÖIF-Prüfung", href: "/seminare-angebote/oeif-pruefung" },
            { label: "Demokratiebildung", href: "/seminare-angebote/demokratiebildung" },
            { label: "AQUA für Unternehmen", href: "/fuer-unternehmen/aqua" },
          ]}
        />
        <FooterCol
          title="Über uns"
          links={[
            { label: "Team", href: "/ueber-uns/team" },
            { label: "Leitlinien", href: "/ueber-uns/leitlinien" },
            { label: "Werte & Prinzipien", href: "/ueber-uns/werte-und-prinzipien" },
            { label: "Geschichte", href: "/ueber-uns/geschichte" },
            { label: "Jobs", href: "/jobs" },
            { label: "AGB", href: "/ueber-uns/agb" },
          ]}
        />
        <FooterCol
          title="Standorte"
          links={[
            { label: "Linz (Hauptsitz)", href: "/kontakt" },
            { label: "Wien", href: "/projekte/wien" },
            { label: "Niederösterreich", href: "/projekte/niederoesterreich" },
            { label: "Oberösterreich", href: "/projekte/oberoesterreich" },
            { label: "Salzburg", href: "/projekte/salzburg" },
            { label: "Steiermark", href: "/projekte/steiermark" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-8 text-sm text-paper/70 sm:grid-cols-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
              Hauptsitz Linz
            </div>
            <div className="mt-2">Schererstraße 18 · 4020 Linz</div>
            <a href="tel:+437323701520" className="mt-1 block hover:text-mentor-green">
              +43 732 370 152-0
            </a>
            <a href="mailto:linz.office@mentor.at" className="mt-1 block hover:text-mentor-green">
              linz.office@mentor.at
            </a>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
              Standort Wien
            </div>
            <div className="mt-2">Cumberlandstraße 32-34 · 1140 Wien</div>
            <a href="tel:+4316051711 00" className="mt-1 block hover:text-mentor-green">
              +43 1 605 17-1100
            </a>
            <a href="mailto:wien.office@mentor.at" className="mt-1 block hover:text-mentor-green">
              wien.office@mentor.at
            </a>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
              Allgemein
            </div>
            <a href="mailto:office@mentor.at" className="mt-2 block hover:text-mentor-green">
              office@mentor.at
            </a>
            <a href="https://www.facebook.com/MentorGmbH/" target="_blank" rel="noreferrer" className="mt-1 block hover:text-mentor-green">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-paper/50 sm:flex-row">
          <div>
            © {new Date().getFullYear()} MENTOR GmbH & Co OG · Alle Rechte
            vorbehalten.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/kontakt/impressum" className="link-underline">
              Impressum
            </Link>
            <Link href="/kontakt/datenschutz" className="link-underline">
              Datenschutz
            </Link>
            <Link href="/ueber-uns/agb" className="link-underline">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-sm text-paper/85">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
