import { ReactNode } from "react";

type LiquidCardProps = {
  children: ReactNode;
  className?: string;
};

export function LiquidCard({ children, className = "" }: LiquidCardProps) {
  return (
    <div className={`liquid-glass rounded-[28px] ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
