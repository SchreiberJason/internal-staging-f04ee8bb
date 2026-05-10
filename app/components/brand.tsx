import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(p: string) {
  return `${basePath}${p}`;
}

export function MentorWordmark({
  className = "",
  height = 40,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <Image
      src={asset("/images/logo-mentor.jpg")}
      alt="MENTOR"
      width={Math.round((height * 305) / 100)}
      height={height}
      priority
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}

export function OecertSeal({
  className = "",
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={asset("/images/seals/oecert.jpg")}
      alt="ÖCERT zertifiziert"
      width={size * 2}
      height={size}
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}

export function EfqmSeal({
  className = "",
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={asset("/images/seals/efqm.png")}
      alt="EFQM Qualified 2021"
      width={size}
      height={size}
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}

export function HeroPhoto({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={asset(src)}
      alt={alt}
      width={1440}
      height={300}
      priority={priority}
      unoptimized
      className={`object-cover ${className}`}
    />
  );
}

export function PartnerLogo({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="grid h-12 w-32 place-items-center rounded-xl border border-white/10 bg-white px-3 py-2">
      <Image
        src={asset(src)}
        alt={alt}
        width={120}
        height={40}
        unoptimized
        className="max-h-9 w-auto object-contain"
      />
    </div>
  );
}
