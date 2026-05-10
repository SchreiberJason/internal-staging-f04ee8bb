import Link from "next/link";
import Image from "next/image";
import { asset } from "./brand";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  crumbs,
  align = "left",
  variant = "light",
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  lead?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  variant?: "light" | "dark" | "cream";
  image?: string;
  imageAlt?: string;
}) {
  const bg =
    variant === "dark"
      ? "bg-mentor-blue-deep text-paper"
      : variant === "cream"
      ? "bg-cream"
      : "bg-paper";

  const eyebrowClasses =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-mentor-green"
      : "border-mentor-blue/15 bg-white/60 text-mentor-blue-deep";

  const leadClasses = variant === "dark" ? "text-mentor-blue-soft" : "text-ink-soft";
  const titleClasses = variant === "dark" ? "text-paper" : "text-ink";

  const hasImage = !!image;

  return (
    <section className={`relative overflow-hidden border-b border-line/60 ${bg}`}>
      {variant !== "dark" && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-mentor-blue-soft/40 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-[22rem] w-[22rem] rounded-full bg-mentor-green-soft/40 blur-3xl" />
        </div>
      )}
      {variant === "dark" && (
        <>
          {hasImage && (
            <Image
              src={asset(image!)}
              alt={imageAlt}
              width={1600}
              height={500}
              priority
              unoptimized
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-mentor-blue-deep via-mentor-blue-deep/85 to-mentor-blue-deep/20" />
          <div className="grain absolute inset-0" />
          <div className="absolute -right-32 -top-24 h-[24rem] w-[24rem] rounded-full bg-mentor-green/10 blur-3xl" />
        </>
      )}

      <div
        className={[
          "relative mx-auto max-w-7xl px-6 pt-16 sm:pt-20",
          hasImage && variant !== "dark" ? "pb-0 lg:pb-0" : "pb-20 sm:pb-24",
        ].join(" ")}
      >
        <div
          className={[
            hasImage && variant !== "dark"
              ? "grid gap-12 lg:grid-cols-12"
              : "",
          ].join(" ")}
        >
          <div
            className={[
              hasImage && variant !== "dark" ? "lg:col-span-7 lg:pb-24" : "",
              align === "center" ? "text-center" : "",
            ].join(" ")}
          >
            {crumbs && crumbs.length > 0 && (
              <nav
                aria-label="Brotkrumen"
                className={[
                  "mb-7 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.16em]",
                  variant === "dark" ? "text-paper/60" : "text-ink-soft/80",
                  align === "center" ? "justify-center" : "",
                ].join(" ")}
              >
                {crumbs.map((c, i) => (
                  <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-mentor-blue">
                        {c.label}
                      </Link>
                    ) : (
                      <span>{c.label}</span>
                    )}
                    {i < crumbs.length - 1 && <span className="opacity-60">/</span>}
                  </span>
                ))}
              </nav>
            )}

            {eyebrow && (
              <div
                className={[
                  "inline-flex items-center gap-2 rounded-pill border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur",
                  eyebrowClasses,
                ].join(" ")}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-mentor-green" />
                {eyebrow}
              </div>
            )}

            <h1
              className={[
                "font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]",
                titleClasses,
                align === "center" ? "mx-auto max-w-4xl" : "max-w-4xl",
              ].join(" ")}
            >
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="claim-gradient">{highlight}</span>
                </>
              )}
            </h1>

            {lead && (
              <p
                className={[
                  "text-pretty mt-7 text-lg leading-relaxed sm:text-xl",
                  leadClasses,
                  align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
                ].join(" ")}
              >
                {lead}
              </p>
            )}
          </div>

          {hasImage && variant !== "dark" && (
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="absolute inset-x-0 -bottom-12 top-12 overflow-hidden rounded-[2rem] border border-line shadow-lift">
                <Image
                  src={asset(image!)}
                  alt={imageAlt}
                  width={1200}
                  height={1400}
                  priority
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
