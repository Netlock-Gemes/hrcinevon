"use client";

import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchTrigger } from "../search/SearchTrigger";

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-500
        ${
          scrolled
            ? "border-b border-white/5 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-5 sm:px-6 lg:px-12">
        <div className="flex items-center gap-10">
          <h1 className="text-xl font-bold">
            <span className="text-[#fbbf24]">HR</span>Cinevon
          </h1>

          <nav className="hidden gap-6 md:flex">
            <button className="text-sm text-white">Home</button>

            <button className="text-sm text-white/70 hover:text-white">
              Movies
            </button>

            <button className="text-sm text-white/70 hover:text-white">
              Series
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <SearchTrigger
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", {
                  key: "k",
                  ctrlKey: true,
                }),
              )
            }
          />

          <button className="rounded-full bg-white/10 p-2">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
