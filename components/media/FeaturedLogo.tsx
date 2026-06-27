/* eslint-disable @next/next/no-img-element */
interface FeaturedLogoProps {
  logo?: string;
  title: string;
}

export function FeaturedLogo({ logo, title }: FeaturedLogoProps) {
  if (!logo) {
    return (
      <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
        {title}
      </h1>
    );
  }

  return (
    <div className="mb-8">
      <img
        src={logo}
        alt={title}
        className="
          max-h-40
          max-w-150
          object-contain
          object-left
        "
      />
    </div>
  );
}
