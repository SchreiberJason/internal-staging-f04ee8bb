import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "./icons";

/* ───────── Generic section wrapper ───────── */
export function Section({
  children,
  variant = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  variant?: "paper" | "cream" | "blue" | "ink" | "white";
  className?: string;
  id?: string;
}) {
  const bg = {
    paper: "bg-paper",
    cream: "bg-cream",
    blue: "bg-mentor-blue-deep text-paper",
    ink: "bg-ink text-paper",
    white: "bg-white",
  }[variant];

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">{children}</div>
    </section>
  );
}

/* ───────── Section heading ───────── */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {eyebrow && (
        <div
          className={[
            "inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
            invert
              ? "bg-white/10 text-mentor-green ring-1 ring-white/15"
              : "bg-cream text-mentor-blue-deep",
          ].join(" ")}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mentor-green" />
          {eyebrow}
        </div>
      )}
      <h2
        className={[
          "font-display mt-5 text-balance text-3xl font-semibold leading-[1.06] tracking-tight sm:text-5xl",
          invert ? "text-paper" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={[
            "text-pretty mt-5 text-lg leading-relaxed",
            invert ? "text-mentor-blue-soft" : "text-ink-soft",
          ].join(" ")}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ───────── Prose styled body text ───────── */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-mentor max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft [&_h3]:font-display [&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-ink [&_strong]:text-ink [&_a]:text-mentor-blue [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-mentor-blue-deep">
      {children}
    </div>
  );
}

/* ───────── Bullet list with check ───────── */
export function CheckList({
  items,
  invert = false,
}: {
  items: ReactNode[];
  invert?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={[
              "mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full",
              invert
                ? "bg-mentor-green text-mentor-blue-deep"
                : "bg-mentor-green text-white",
            ].join(" ")}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
          </span>
          <span
            className={[
              "text-base leading-relaxed",
              invert ? "text-paper" : "text-ink",
            ].join(" ")}
          >
            {it}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ───────── Card primitive ───────── */
export function Card({
  children,
  variant = "white",
  className = "",
}: {
  children: ReactNode;
  variant?: "white" | "cream" | "blue" | "outline";
  className?: string;
}) {
  const cls = {
    white: "bg-white border border-line",
    cream: "bg-cream border border-line",
    blue: "bg-mentor-blue-deep text-paper",
    outline: "bg-transparent border border-line",
  }[variant];

  return (
    <div
      className={`card-lift relative overflow-hidden rounded-[1.5rem] p-7 ${cls} ${className}`}
    >
      {children}
    </div>
  );
}

/* ───────── Link card (for navigation between pages) ───────── */
export function LinkCard({
  href,
  eyebrow,
  title,
  body,
  variant = "white",
}: {
  href: string;
  eyebrow?: string;
  title: string;
  body?: string;
  variant?: "white" | "cream" | "blue";
}) {
  const cls = {
    white: "bg-white border border-line text-ink",
    cream: "bg-cream border border-line text-ink",
    blue: "bg-mentor-blue-deep text-paper",
  }[variant];
  const eyeCls = variant === "blue" ? "text-mentor-green" : "text-mentor-blue-deep";
  const arrowCls = variant === "blue" ? "text-mentor-green" : "text-mentor-blue";

  return (
    <Link
      href={href}
      className={`card-lift group relative flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-[1.5rem] p-7 ${cls}`}
    >
      {variant === "blue" && <div className="grain absolute inset-0" />}
      <div className="relative">
        {eyebrow && (
          <div
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${eyeCls}`}
          >
            {eyebrow}
          </div>
        )}
        <h3 className="font-display mt-3 text-2xl font-semibold leading-tight tracking-tight">
          {title}
        </h3>
        {body && (
          <p
            className={[
              "mt-3 text-sm leading-relaxed",
              variant === "blue" ? "text-mentor-blue-soft" : "text-ink-soft",
            ].join(" ")}
          >
            {body}
          </p>
        )}
      </div>
      <div className={`relative mt-6 flex items-center gap-2 text-sm font-semibold ${arrowCls}`}>
        Mehr erfahren
        <ArrowRight className="h-4 w-4 nudge-x" />
      </div>
    </Link>
  );
}

/* ───────── Project facts panel ───────── */
type Fact = { label: string; value: ReactNode };

export function ProjectFacts({ facts }: { facts: Fact[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line">
      {facts.map((f, i) => (
        <div
          key={i}
          className="grid gap-2 bg-white p-5 sm:grid-cols-[10rem,1fr] sm:items-baseline sm:gap-6"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
            {f.label}
          </dt>
          <dd className="text-base text-ink">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ───────── Person/Contact card ───────── */
export function PersonCard({
  name,
  role,
  email,
  phone,
  initials,
}: {
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  initials?: string;
}) {
  const ini =
    initials ??
    name
      .replace(/(Dr\.?in?|Mag\.?|Ing\.?|MSc\.?|MBA|MPA|MA|,)/g, "")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  return (
    <div className="card-lift rounded-[1.5rem] border border-line bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mentor-blue-soft text-base font-semibold text-mentor-blue-deep">
          {ini}
        </div>
        <div className="min-w-0">
          <div className="font-display text-base font-semibold leading-tight text-ink">
            {name}
          </div>
          {role && (
            <div className="mt-1 text-sm leading-snug text-ink-soft">{role}</div>
          )}
        </div>
      </div>

      {(email || phone) && (
        <div className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-ink-soft hover:text-mentor-blue"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 break-all text-ink-soft hover:text-mentor-blue"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {email}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ───────── Office/location box ───────── */
export function OfficeBox({
  title,
  address,
  phone,
  email,
}: {
  title: string;
  address: string;
  phone?: string;
  email?: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-line bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-mentor-blue-soft text-mentor-blue-deep">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="font-display text-lg font-semibold text-ink">
          {title}
        </div>
      </div>
      <div className="mt-4 text-sm text-ink-soft">{address}</div>
      <div className="mt-3 space-y-1 text-sm">
        {phone && (
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-ink hover:text-mentor-blue"
          >
            <Phone className="h-4 w-4" />
            {phone}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-ink hover:text-mentor-blue"
          >
            <Mail className="h-4 w-4" />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}

/* ───────── CTA band (re-usable) ───────── */
export function CtaStrip({
  eyebrow = "Bereit?",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-4 sm:pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-9 text-paper sm:p-14">
          <div className="grain absolute inset-0" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mentor-green/25 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-mentor-blue/40 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-mentor-green">
                {eyebrow}
              </div>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              {body && (
                <p className="mt-5 max-w-2xl text-base text-paper/75 sm:text-lg">
                  {body}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              {primary && (
                <Link
                  href={primary.href}
                  className="group inline-flex items-center justify-between gap-6 rounded-pill bg-mentor-green px-6 py-4 text-base font-semibold text-mentor-blue-deep shadow-soft transition hover:bg-mentor-green-soft"
                >
                  {primary.label}
                  <ArrowRight className="h-5 w-5 nudge-x" />
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="group inline-flex items-center justify-between gap-6 rounded-pill border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-paper transition hover:bg-white/10"
                >
                  {secondary.label}
                  <ArrowRight className="h-5 w-5 nudge-x" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
