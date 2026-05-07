import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuickStartSection } from "./components/QuickStartSection";
import { ExplainSection } from "./components/ExplainSection";
import { ExampleSection } from "./components/ExampleSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import type { Theme } from "./components/ui/apple-liquid-glass-switcher";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-hidden bg-detoks-bg text-white">
      <Header theme={theme} onThemeChange={setTheme} />
      <main>
        <HeroSection />
        <QuickStartSection />
        <ExplainSection />
        <ExampleSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}

export default App;
