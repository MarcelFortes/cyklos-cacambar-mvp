interface BrandLogoProps {
  type: "cyklos" | "cacambar";
  className?: string;
}

export function BrandLogo({ type, className = "" }: BrandLogoProps) {
  if (type === "cyklos") {
    return (
      <span
        className={`text-2xl font-black tracking-tight text-white group-hover:text-cyklos-cyan ${className}`}
      >
        CYKLOS
      </span>
    );
  }

  return (
    <span
      className={`rounded-full border border-cacambar-orange/50 bg-cacambar-orange/15 px-2 py-1 text-xs font-bold uppercase tracking-wide text-cacambar-orange ${className}`}
    >
      CAÇAMBAR APP
    </span>
  );
}
