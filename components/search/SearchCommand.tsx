"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;
}

export function SearchCommand({
  open,
  onOpenChange,
}: SearchCommandProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          border-white/10
          bg-black/90
          backdrop-blur-xl
          sm:max-w-2xl
        "
      >
        <div className="space-y-4">
          <input
            placeholder="Search movies and series..."
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              outline-none
            "
          />

          <div className="text-sm text-white/50">
            Search functionality coming next.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}