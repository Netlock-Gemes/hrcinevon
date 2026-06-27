import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1800px] px-5 sm:px-6 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
