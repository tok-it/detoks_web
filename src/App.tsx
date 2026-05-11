import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuickStartSection } from "./components/QuickStartSection";
import { ExplainSection } from "./components/ExplainSection";
import { ExampleSection } from "./components/ExampleSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { DocsLayout } from "./pages/docs/DocsLayout";
import { Overview } from "./pages/docs/pages/Overview";
import { Installation } from "./pages/docs/pages/Installation";
import { QuickStart } from "./pages/docs/pages/QuickStart";
import { SupportedAgents } from "./pages/docs/pages/SupportedAgents";
import { Configuration } from "./pages/docs/pages/Configuration";
import { TokenAnalytics } from "./pages/docs/pages/TokenAnalytics";
import { DiscoverSession } from "./pages/docs/pages/DiscoverSession";
import { WhatOptimizes } from "./pages/docs/pages/WhatOptimizes";
import { Troubleshooting } from "./pages/docs/pages/Troubleshooting";
import { Telemetry } from "./pages/docs/pages/Telemetry";

function LandingPage() {
  return (
    <div className="min-h-screen bg-detoks-bg text-white">
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<Navigate to="/docs/overview" replace />} />
        <Route
          path="/docs/overview"
          element={
            <DocsLayout>
              <Overview />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/token-analytics"
          element={
            <DocsLayout>
              <TokenAnalytics />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/discover-session"
          element={
            <DocsLayout>
              <DiscoverSession />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/installation"
          element={
            <DocsLayout>
              <Installation />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/quick-start"
          element={
            <DocsLayout>
              <QuickStart />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/supported-agents"
          element={
            <DocsLayout>
              <SupportedAgents />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/configuration"
          element={
            <DocsLayout>
              <Configuration />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/what-optimizes"
          element={
            <DocsLayout>
              <WhatOptimizes />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/troubleshooting"
          element={
            <DocsLayout>
              <Troubleshooting />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/telemetry"
          element={
            <DocsLayout>
              <Telemetry />
            </DocsLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
