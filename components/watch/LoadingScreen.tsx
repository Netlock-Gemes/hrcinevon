"use client";

import { LoaderCircle, Film } from "lucide-react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  title?: string;
}

export function LoadingScreen({
  title = "Preparing your movie...",
}: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-screen w-full items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <Film className="size-16 text-white/15" />

          <LoaderCircle className="absolute inset-0 size-16 animate-spin text-white" />
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">{title}</h2>

          <p className="text-sm text-white/50">
            Fetching the best available stream...
          </p>
        </div>
      </div>
    </motion.div>
  );
}
