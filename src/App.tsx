import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuickStartSection } from "./components/QuickStartSection";
import { ExplainSection } from "./components/ExplainSection";
import { ExampleSection } from "./components/ExampleSection";
import { FinalCtaSection } from "./components/FinalCtaSection";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-detoks-bg text-white">
      <Header />
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
