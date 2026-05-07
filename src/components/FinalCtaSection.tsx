import { ArrowRight, ExternalLink } from "lucide-react";
import { LiquidButton } from "./LiquidButton";
import { LiquidCard } from "./LiquidCard";

export function FinalCtaSection() {
  return (
    <section className="px-5 pb-24 pt-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <LiquidCard className="p-8 text-center md:p-16">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Get Started
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-[-0.055em] md:text-6xl">
            긴 요청을 더 명확한 작업 흐름으로 바꿔보세요
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/66">
            DeToks는 AI 코딩 에이전트를 대체하지 않습니다. 에이전트에게 일을 더
            명확하게 시키기 위한 정리 도구입니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LiquidButton href="#quick-start" variant="primary">
              Quick Start 보기
              <ArrowRight className="h-5 w-5" />
            </LiquidButton>

            <LiquidButton href="https://github.com">
              <ExternalLink className="h-5 w-5" />
              GitHub에서 보기
            </LiquidButton>
          </div>
        </LiquidCard>
      </div>
    </section>
  );
}
