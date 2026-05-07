import { ExternalLink } from "lucide-react";
import { LiquidButton } from "./LiquidButton";
import { LiquidNavSwitcher } from "./ui/liquid-nav-switcher";

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

        <nav className="hidden md:flex">
          <LiquidNavSwitcher />
        </nav>

        <div className="flex items-center gap-3">
          <LiquidButton
            href="https://github.com/tok-it/detoks"
            className="h-11 px-5"
          >
            <ExternalLink className="h-4 w-4" />
            GitHub
          </LiquidButton>
        </div>
      </div>
    </header>
  );
}
