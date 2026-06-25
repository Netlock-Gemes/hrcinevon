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
          max-h-[160px]
          max-w-[600px]
          object-contain
          object-left
        "
      />
    </div>
  );
}
