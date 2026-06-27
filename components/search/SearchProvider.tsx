"use client";

import {
  useEffect,
  useState,
} from "react";
import { SearchCommand } from "./SearchCommand";


export function SearchProvider() {
  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const down = (
      e: KeyboardEvent
    ) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key === "k"
      ) {
        e.preventDefault();

        setOpen((prev) => !prev);
      }
    };

    window.addEventListener(
      "keydown",
      down
    );

    return () =>
      window.removeEventListener(
        "keydown",
        down
      );
  }, []);

  return (
    <SearchCommand
      open={open}
      onOpenChange={setOpen}
    />
  );
}