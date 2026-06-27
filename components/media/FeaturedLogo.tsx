/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface FeaturedLogoProps {
  logo?: string;
  title: string;
  className?: string;
}

export function FeaturedLogo({ logo, title, className }: FeaturedLogoProps) {
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
        className={cn("max-w-150 object-contain object-left", className)}
      />
    </div>
  );
}
