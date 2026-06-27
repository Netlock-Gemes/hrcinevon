/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";

interface FeaturedLogoProps {
  logo?: string;
  title: string;
  isSmall?: boolean;
  className?: string;
}

export function FeaturedLogo({
  logo,
  title,
  isSmall,
  className,
}: FeaturedLogoProps) {
  if (!logo) {
    return (
      <h1
        className={cn(
          "text-5xl font-bold tracking-tight lg:text-7xl",
          className,
        )}
      >
        {title}
      </h1>
    );
  }

  return (
    <div className={className}>
      <img
        src={logo}
        alt={title}
        className={cn(
          isSmall ? "ms:max-h-30 max-h-20" : "max-h-40",
          "max-w-150 object-contain object-left",
        )}
      />
    </div>
  );
}
