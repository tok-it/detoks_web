import { ArrowRight, ExternalLink } from "lucide-react";
import { LiquidButton } from "./LiquidButton";
import { LiquidCard } from "./LiquidCard";

export function FinalCtaSection() {
  return (
    <section id="cta" className="flex h-screen items-center overflow-hidden px-5 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <LiquidCard className="p-8 text-center md:p-14">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Get Started
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-[-0.055em] md:text-5xl">
            LLM CLI 작업 흐름을 더 안정적으로
            <br />
            정리해보세요
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
            Codex, Gemini, Claude를 그대로 사용하되,{" "}
            <span className="font-bold text-white">DeToks를 앞단에 두어</span> 입력, 세션,
            컨텍스트, 실행 경계를 더 명확하게 관리할 수 있습니다.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LiquidButton href="#quick-start" variant="primary">
              Quick Start 보기
              <ArrowRight className="h-5 w-5" />
            </LiquidButton>

            <LiquidButton href="https://github.com/tok-it/detoks">
              <ExternalLink className="h-5 w-5" />
              GitHub에서 보기
            </LiquidButton>
          </div>
        </LiquidCard>
      </div>
    </section>
  );
}
