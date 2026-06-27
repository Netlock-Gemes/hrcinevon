"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export function TopBar({ title }: Props) {
  const router = useRouter();

  return (
    <div
      className="
      absolute
      top-0
      left-0
      right-0
      z-30
      flex
      items-center
      justify-between
      bg-linear-to-b
      from-black/90
      via-black/40
      to-transparent
      px-8
      pt-8
      pb-20
    "
    >
      <button
        onClick={() => router.back()}
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-black/40
        backdrop-blur-xl
        transition
        hover:bg-black/60
      "
      >
        <ArrowLeft className="size-6" />
      </button>

      <h1
        className="
        text-lg
        font-semibold
        tracking-wide
      "
      >
        {title}
      </h1>

      <div className="w-12" />
    </div>
  );
}
