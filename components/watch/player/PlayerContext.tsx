"use client";

import { createContext, useContext } from "react";

import { usePlayer } from "./usePlayer";

const PlayerContext = createContext<ReturnType<typeof usePlayer> | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const player = usePlayer();

  return (
    <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("PlayerContext missing.");
  }

  return context;
}
