/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

interface FeaturedLogoProps {
  logo?: string;
  title: string;
  className?: string;
}

export function FeaturedLogo({ logo, title, className }: FeaturedLogoProps) {
  const [imageError, setImageError] = useState(false);

  if (!logo || imageError) {
    return (
      <h1
        className={cn(
          "max-w-3xl text-4xl font-black tracking-tight lg:text-5xl uppercase",
          className,
        )}
      >
        {title}
      </h1>
    );
  }

  return (
    <img
      src={logo}
      alt={title}
      loading="eager"
      onError={() => setImageError(true)}
      className={cn(
        "max-w-80 md:max-w-120 object-contain object-left",
        className,
      )}
    />
  );
}
