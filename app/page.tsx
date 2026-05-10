import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Chat,
  Check,
  Compass,
  GraduationCap,
  Globe,
  Hands,
  MapPin,
  Phone,
  Scale,
  Spark,
  Star,
} from "./components/icons";
import { SectionHeading } from "./components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <AudienceSplit />
      <Values />
      <Programs />
      <Locations />
      <Stats />
      <About />
      <CtaBand />
    </>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-mentor-blue-soft/60 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-mentor-green-soft/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-28 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-32">
        <div className="relative lg:col-span-7">
          <div className="fade-in-up inline-flex items-center gap-2 rounded-pill border border-mentor-blue/15 bg-white/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-mentor-blue-deep backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-mentor-green" />
            Seit 1993 · Bildung & Beratung in Österreich
          </div>

          <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.25rem]">
            Wir aktivieren <br />
            <span className="claim-gradient">Potenziale.</span>
          </h1>

          <p className="text-pretty mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Bildungs- und Beratungsinstitut für{" "}
            <strong className="text-ink">Lehrlinge</strong> und{" "}
            <strong className="text-ink">Unternehmen</strong>, die Lehrlinge
            ausbilden. Mit Handschlagqualität, Innovation und über 25 Jahren
            Erfahrung — in ganz Österreich.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/seminare-angebote"
              className="group inline-flex items-center justify-between gap-6 rounded-pill bg-ink px-6 py-4 text-base font-semibold text-paper shadow-soft transition hover:bg-mentor-blue-deep"
            >
              Ich starte eine Lehre
              <ArrowRight className="h-5 w-5 nudge-x" />
            </Link>
            <Link
              href="/fuer-unternehmen"
              className="group inline-flex items-center justify-between gap-6 rounded-pill border border-ink/15 bg-white px-6 py-4 text-base font-semibold text-ink shadow-soft transition hover:border-mentor-blue/40 hover:text-mentor-blue"
            >
              Wir suchen Lehrlinge
              <ArrowRight className="h-5 w-5 nudge-x" />
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              { k: "25+", v: "Jahre Erfahrung" },
              { k: "6", v: "Bundesländer" },
              { k: "300+", v: "Mitarbeitende" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl font-semibold text-mentor-blue-deep">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm text-ink-soft">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-mentor-blue-deep p-7 text-paper shadow-lift">
              <div className="grain absolute inset-0 rounded-[2rem]" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-mentor-blue-soft/80">
                  <span>Mentoring-Programm</span>
                  <span>2026 →</span>
                </div>
                <div className="mt-auto">
                  <div className="font-display text-[2.6rem] leading-[0.95] tracking-tight">
                    Lehre starten,
                    <br />
                    <span className="text-mentor-green">Zukunft bauen.</span>
                  </div>
                  <p className="mt-5 max-w-[26ch] text-sm leading-relaxed text-mentor-blue-soft">
                    Wir begleiten dich vom ersten Schnuppertag bis zur
                    Lehrabschluss­prüfung — fachlich, persönlich, sprachlich.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {["AQUA", "Coaching", "Deutsch", "ÖIF", "AMS"].map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-paper"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-6 hidden rotate-3 rounded-2xl bg-mentor-green px-4 py-3 text-mentor-blue-deep shadow-lift sm:block">
              <div className="font-display text-2xl font-semibold leading-none">
                ÖCERT
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em]">
                + EFQM zertifiziert
              </div>
            </div>

            <div className="absolute -left-6 bottom-10 hidden -rotate-6 rounded-2xl bg-paper px-4 py-3 shadow-lift sm:block">
              <div className="flex items-center gap-2 text-mentor-blue-deep">
                <Star className="h-4 w-4 fill-mentor-green stroke-mentor-green" />
                <span className="font-display text-lg font-semibold">
                  Handschlag­qualität
                </span>
              </div>
              <div className="text-xs text-ink-soft">
                Was wir versprechen, halten wir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Trust marquee ───────── */
function TrustMarquee() {
  const items = [
    "ÖCERT zertifiziert",
    "EFQM Quality",
    "AMS-Partner",
    "ÖIF anerkannt",
    "Wien · NÖ · OÖ · Salzburg · Steiermark · Burgenland",
    "Handschlagqualität",
    "Mehr als 25 Jahre Erfahrung",
    "Praxisnah & persönlich",
  ];
  const row = [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-line bg-mentor-blue-deep py-5 text-paper/85">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.18em]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span className="h-1 w-1 rounded-full bg-mentor-green" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────── Audience split ───────── */
function AudienceSplit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Zwei Wege, ein Ziel"
        title="Für wen wir da sind."
        intro="Egal ob du gerade die Schule abgeschlossen hast oder ein Unternehmen führst, das ausbilden möchte — bei MENTOR findest du Begleitung, Programme und Förderungen, die wirklich greifen."
        align="center"
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-2">
        <Link
          href="/seminare-angebote"
          className="card-lift group relative block overflow-hidden rounded-[1.75rem] border border-line bg-cream p-9 sm:p-12"
        >
          <div className="grain absolute inset-0 opacity-60" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-pill bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mentor-blue-deep">
              <GraduationCap className="h-4 w-4" />
              Für Lehrlinge & Lernende
            </div>
            <h3 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Dein Start ins Berufsleben — mit Rückenwind.
            </h3>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft">
              Wir bereiten dich auf die Lehre vor, helfen dir mit Deutsch und
              Bewerbung, und sind im Alltag dein Sparringspartner. Persönlich,
              ohne Schnörkel, an deiner Seite.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "AQUA — Arbeitsplatznahe Qualifizierung im Wunschberuf",
                "Deutsch als Fremdsprache & ÖIF-Prüfungs­vorbereitung",
                "Bewerbungs­coaching & Lehrstellen­vermittlung",
                "Lernhilfe und Begleitung bis zur Lehrabschluss­prüfung",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mentor-green text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-2 text-base font-semibold text-mentor-blue-deep">
              <span className="link-underline">Angebote ansehen</span>
              <ArrowRight className="h-4 w-4 nudge-x" />
            </div>
          </div>
        </Link>

        <Link
          href="/fuer-unternehmen"
          className="card-lift group relative block overflow-hidden rounded-[1.75rem] bg-mentor-blue-deep p-9 text-paper sm:p-12"
        >
          <div className="grain absolute inset-0" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mentor-green/15 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mentor-green ring-1 ring-white/15">
              <Briefcase className="h-4 w-4" />
              Für Unternehmen
            </div>
            <h3 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Lehrlinge finden, fördern, halten.
            </h3>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-mentor-blue-soft">
              Wir vermitteln passgenaue Lehrlinge, übernehmen die fachliche und
              sprachliche Vor­bereitung und entlasten Sie bei Förderungen und
              AMS-Anträgen. Eine Anlaufstelle — vom Erstgespräch bis zur
              Einarbeitung.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "AQUA — wir qualifizieren am Arbeitsplatz vor",
                "Recruiting & Matching motivierter Kandidat:innen",
                "Förderberatung mit AMS, ÖIF und Land",
                "Sprach- und Integrations­begleitung im Betrieb",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mentor-green text-mentor-blue-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <span className="text-sm leading-relaxed text-paper">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-2 text-base font-semibold text-mentor-green">
              <span className="link-underline">AQUA für Unternehmen</span>
              <ArrowRight className="h-4 w-4 nudge-x" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ───────── Values ───────── */
function Values() {
  const items = [
    {
      icon: Spark,
      title: "Potenziale aktivieren",
      body: "Wir sehen, was in Menschen steckt — und schaffen die Räume, in denen es wirken kann.",
    },
    {
      icon: Compass,
      title: "Begleiten, nicht bewerten",
      body: "Wir verstehen Bildung als gemeinsamen Weg. Auf Augenhöhe, ohne Erfolgsdruck.",
    },
    {
      icon: Hands,
      title: "Handschlagqualität",
      body: "Was wir vereinbaren, halten wir. Verlässlich, fair und mit klaren Worten.",
    },
  ];
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Werte & Prinzipien"
          title="Wofür wir morgens aufstehen."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-lift rounded-[1.5rem] border border-line bg-white p-8"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-mentor-blue-deep">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/ueber-uns/werte-und-prinzipien"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mentor-blue-deep"
          >
            <span className="link-underline">Alle acht Prinzipien lesen</span>
            <ArrowRight className="h-4 w-4 nudge-x" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Programs ───────── */
function Programs() {
  const programs = [
    {
      tag: "AQUA",
      icon: Briefcase,
      title: "Arbeitsplatznahe Qualifizierung",
      body: "Vorbereitung auf eine Lehrstelle — direkt im Wunsch­betrieb. Mit Praxis, Theorie und persönlicher Begleitung.",
      audience: "Lehrlinge & Unternehmen",
      href: "/fuer-unternehmen/aqua",
    },
    {
      tag: "Sprache",
      icon: Globe,
      title: "Deutsch als Fremdsprache",
      body: "Kurse von A1 bis C1 — alltagstauglich, berufsbezogen und mit klarem Lernziel.",
      audience: "Lernende",
      href: "/seminare-angebote/deutsch-als-fremdsprache",
    },
    {
      tag: "Prüfung",
      icon: GraduationCap,
      title: "ÖIF-Prüfungs­vorbereitung",
      body: "Gezielte Vorbereitung auf die ÖIF-Integrationsprüfungen A2, B1, B2 und Werte­modul.",
      audience: "Lernende",
      href: "/seminare-angebote/oeif-pruefung",
    },
    {
      tag: "Demokratie",
      icon: Scale,
      title: "Demokratiebildung",
      body: "Werte­vermittlung und politische Bildung in der Praxis — interaktiv, ergebnis­offen, dialogorientiert.",
      audience: "Schulen & Gruppen",
      href: "/seminare-angebote/demokratiebildung",
    },
    {
      tag: "Coaching",
      icon: Chat,
      title: "Bewerbungs- & Karriere­coaching",
      body: "Bewerbungs­unterlagen, Vorstellungsgespräch, Berufs­orientierung — wir begleiten dich Schritt für Schritt.",
      audience: "Lehrlinge",
      href: "/projekte",
    },
    {
      tag: "Beratung",
      icon: Hands,
      title: "Förder- & Personal­beratung",
      body: "Wir kennen die Förderlandschaft in Österreich und holen für Unternehmen heraus, was möglich ist.",
      audience: "Unternehmen",
      href: "/fuer-unternehmen",
    },
  ];
  return (
    <section id="programme" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <SectionHeading
          eyebrow="Programme & Angebote"
          title="Bildung mit Struktur, Begleitung mit Herz."
          intro="Unsere Programme sind aufeinander abgestimmt — vom ersten Sprachkurs bis zur erfolgreichen Lehrabschluss­prüfung."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, ...p }) => (
            <Link
              href={p.href}
              key={p.title}
              className="card-lift group flex flex-col rounded-[1.5rem] border border-line bg-paper p-7"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-pill border border-line bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-mentor-blue-deep">
                  {p.tag}
                </span>
                <Icon className="h-5 w-5 text-mentor-blue" />
              </div>
              <h3 className="font-display mt-7 text-2xl font-semibold leading-tight tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {p.body}
              </p>
              <div className="mt-7 flex items-center justify-between border-t border-line pt-5 text-xs text-ink-soft">
                <span className="uppercase tracking-[0.16em]">{p.audience}</span>
                <ArrowRight className="h-4 w-4 nudge-x text-mentor-blue" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Locations ───────── */
function Locations() {
  const states = [
    { name: "Wien", note: "Hauptstadt-Hub", href: "/projekte/wien" },
    {
      name: "Niederösterreich",
      note: "Mostviertel & St. Pölten",
      href: "/projekte/niederoesterreich",
    },
    {
      name: "Oberösterreich",
      note: "Hauptsitz Linz",
      href: "/projekte/oberoesterreich",
    },
    { name: "Salzburg", note: "Stadt & Land", href: "/projekte/salzburg" },
    { name: "Steiermark", note: "Graz & AQUA", href: "/projekte/steiermark" },
    { name: "Burgenland", note: "In Kooperation", href: "/kontakt" },
  ];
  return (
    <section id="standorte" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Standorte"
            title="Vor Ort. In ganz Österreich."
            intro="Wir sind dort, wo Lehrlinge und Unternehmen Unterstützung brauchen — mit kurzen Wegen und persönlicher Betreuung."
          />
          <Link
            href="/projekte"
            className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-mentor-blue-deep"
          >
            <span className="link-underline">Alle Projekte ansehen</span>
            <ArrowRight className="h-4 w-4 nudge-x" />
          </Link>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {states.map((s) => (
            <li key={s.name}>
              <Link
                href={s.href}
                className="card-lift flex items-center gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mentor-blue-soft text-mentor-blue-deep">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight text-ink">
                    {s.name}
                  </div>
                  <div className="text-sm text-ink-soft">{s.note}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Stats band ───────── */
function Stats() {
  const stats = [
    { k: "25+", v: "Jahre Bildungs­erfahrung" },
    { k: "300+", v: "Mitarbeitende" },
    { k: "ÖCERT", v: "Qualitäts­zertifikat" },
    { k: "EFQM", v: "Quality Management" },
  ];
  return (
    <section className="relative overflow-hidden bg-mentor-blue-deep py-20 text-paper">
      <div className="grain absolute inset-0" />
      <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-mentor-green/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={
                i === 0 ? "" : "lg:border-l lg:border-white/15 lg:pl-6"
              }
            >
              <div className="font-display text-5xl font-semibold tracking-tight">
                {s.k}
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-mentor-blue-soft">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── About ───────── */
function About() {
  return (
    <section id="ueber-uns" className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="inline-flex items-center gap-2 rounded-pill bg-cream px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mentor-blue-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-mentor-green" />
              Über MENTOR
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Ein unabhängiges Bildungs­institut. Mit Haltung.
            </h2>
            <Link
              href="/ueber-uns"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mentor-blue-deep"
            >
              <span className="link-underline">Mehr über uns</span>
              <ArrowRight className="h-4 w-4 nudge-x" />
            </Link>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
          <p>
            <strong className="text-ink">MENTOR</strong> ist seit 1993 ein
            unabhängiges, österreichweit tätiges Bildungs- und Beratungs­institut.
            Wir entwickeln und realisieren Programme für öffentliche
            Auftraggeber, private Einrichtungen, Unternehmen und einzelne
            Menschen — überall dort, wo Bildung Türen öffnet.
          </p>
          <p>
            Wir vermitteln Wissen, ermöglichen Entwicklung und begleiten
            Menschen auf ihrem Weg zu persönlichen, beruflichen und
            unternehmerischen Zielen. Vertrauensvolle Zusammenarbeit, Innovation
            und Zuverlässigkeit sind keine Schlagworte für uns — sondern die
            Grundlage von allem, was wir tun.
          </p>
          <p>
            Unsere Arbeit ist <strong className="text-ink">ÖCERT</strong>- und{" "}
            <strong className="text-ink">EFQM</strong>-zertifiziert. Aber wer
            uns kennt, weiß: was wirklich zählt, ist die Handschlagqualität
            dahinter.
          </p>
          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {[
              "ÖCERT zertifiziert",
              "EFQM Quality Management",
              "Mitglied AQUA-Träger­netzwerk",
              "Partner von AMS & ÖIF",
            ].map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 text-sm font-medium text-ink"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-mentor-green text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA band ───────── */
function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-paper sm:p-16">
        <div className="grain absolute inset-0" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mentor-green/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-mentor-blue/40 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="font-display text-xs uppercase tracking-[0.2em] text-mentor-green">
              Bereit?
            </div>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Lass uns über deine Lehre — oder eure Lehrstellen — sprechen.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-paper/75">
              Wir antworten innerhalb eines Werktags, hören zuerst zu und
              schlagen dann einen konkreten nächsten Schritt vor. Kein
              Vertrieb-Pingpong.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-between gap-6 rounded-pill bg-mentor-green px-6 py-4 text-base font-semibold text-mentor-blue-deep shadow-soft transition hover:bg-mentor-green-soft"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="h-5 w-5 nudge-x" />
            </Link>
            <a
              href="tel:+437323701520"
              className="group inline-flex items-center justify-between gap-6 rounded-pill border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-paper transition hover:bg-white/10"
            >
              +43 732 370 152-0
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
