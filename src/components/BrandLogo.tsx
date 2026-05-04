interface BrandLogoProps {
  type: "cyklos" | "cacambar";
  className?: string;
}

const logoMap = {
  cyklos: {
    src: "/brand/cyklos-logo.png",
    alt: "CYKLOS logo",
  },
  cacambar: {
    src: "/brand/cacambar-logo.png",
    alt: "CAÇAMBAR logo",
  },
};

export function BrandLogo({ type, className = "" }: BrandLogoProps) {
  const logo = logoMap[type];

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`block h-auto w-auto object-contain ${className}`}
      draggable={false}
    />
  );
}