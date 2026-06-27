"use client";

import { ReactNode } from "react";

interface PlayerShellProps {
  children: ReactNode;
}

export function PlayerShell({ children }: PlayerShellProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col">
        {children}
      </div>
    </main>
  );
}
