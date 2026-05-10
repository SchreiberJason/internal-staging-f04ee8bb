import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function Spark(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function Compass(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function Hands(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 13c0-3 2-5 5-5h1l3 3" />
      <path d="M21 13c0-3-2-5-5-5h-1l-3 3" />
      <path d="M5 13v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3" />
      <path d="M9 8V5a2 2 0 1 1 4 0v3" />
    </svg>
  );
}

export function Briefcase(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function GraduationCap(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M2 9.5 12 5l10 4.5L12 14 2 9.5Z" />
      <path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9.5V14" />
    </svg>
  );
}

export function Globe(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
    </svg>
  );
}

export function Scale(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18M5 21h14" />
      <path d="M5 8h14l-3 6c0 1.5 1.5 2 3 2s3-.5 3-2L19 8" />
      <path d="m5 8-3 6c0 1.5 1.5 2 3 2s3-.5 3-2L5 8" />
    </svg>
  );
}

export function Chat(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M21 12a8 8 0 1 1-3.4-6.6L21 4l-1 4.4A8 8 0 0 1 21 12Z" />
      <path d="M8 11h8M8 14h5" />
    </svg>
  );
}

export function MapPin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Phone(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function Mail(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Check(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export function Star(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 2.6 5.6 6 .9-4.4 4.3 1 6.2L12 17l-5.2 3 1-6.2-4.4-4.3 6-.9L12 3Z" />
    </svg>
  );
}

export function Logo(p: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...p}
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden
    >
      <rect width="36" height="36" rx="10" fill="#17428b" />
      <path
        d="M9 24V12h2.4l3.4 7 3.4-7H20.6V24h-2.2v-7.6L15.6 22h-1.6l-2.8-5.6V24H9Z"
        fill="#fff"
      />
      <circle cx="27" cy="24" r="3" fill="#95c11f" />
    </svg>
  );
}
