import { ReactNode } from "react";

type LiquidButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
};

export function LiquidButton({
  children,
  variant = "ghost",
  href,
  className = "",
}: LiquidButtonProps) {
  const classes = [
    "liquid-button inline-flex h-12 items-center justify-center gap-2 px-6 text-sm font-bold",
    variant === "primary" ? "liquid-button-primary" : "text-white",
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button className={classes}>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
