interface PageDividerProps {
  className?: string;
}

export function PageDivider({ className = "" }: PageDividerProps) {
  return (
    <div
      className={`my-14 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent ${className}`}
    />
  );
}
