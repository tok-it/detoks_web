import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuickStartSection } from "./components/QuickStartSection";
import { ExplainSection } from "./components/ExplainSection";
import { ExampleSection } from "./components/ExampleSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { IntroVideo } from "./components/IntroVideo";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-detoks-bg text-white">
      {!introDone && <IntroVideo onEnd={() => setIntroDone(true)} />}

      <Header />
      <main className="snap-container">
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
