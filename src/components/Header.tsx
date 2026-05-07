import { ExternalLink } from "lucide-react";
import { LiquidButton } from "./LiquidButton";

const navItems = [
  { label: "소개", href: "#about" },
  { label: "Quick Start", href: "#quick-start" },
  { label: "사용 예시", href: "#example" },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="liquid-nav mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 pl-6">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-[#00c853]">
            De
          </span>
          <span className="text-2xl font-black tracking-tight text-white">
            Toks
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="liquid-nav-link px-4 py-2 text-sm font-bold text-white/66"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LiquidButton href="https://github.com" className="h-11 px-5">
          <ExternalLink className="h-4 w-4" />
          GitHub
        </LiquidButton>
      </div>
    </header>
  );
}
