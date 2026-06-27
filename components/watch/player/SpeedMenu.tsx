"use client";

interface Props {
  speed: number;
  open: boolean;
  onClose: () => void;
  onChange: (speed: number) => void;
}

const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function SpeedMenu({ speed, open, onClose, onChange }: Props) {
  if (!open) return null;

  return (
    <div
      className="absolute bottom-20 right-72 w-48 rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl"
    >
      {speeds.map((value) => (
        <button
          key={value}
          onClick={() => {
            onChange(value);

            onClose();
          }}
          className={`block w-full px-4 py-3 text-left transition hover:bg-white/10 ${value === speed ? "text-red-500" : ""}`}
        >
          {value}x
        </button>
      ))}
    </div>
  );
}
