import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, GitBranch } from "lucide-react";
import { LiquidCard } from "./LiquidCard";

const items = [
  {
    icon: GitBranch,
    title: "입력을 작업 흐름으로 정리",
    description:
      "긴 자연어 요청을 실행 가능한 작업 단위로 나눠 AI CLI가 따라가기 쉬운 흐름으로 만듭니다.",
  },
  {
    icon: Layers,
    title: "컨텍스트와 세션 관리",
    description:
      "현재 실행에 필요한 정보만 유지하고, 결과를 세션에 저장해 다음 작업에서 이어갈 수 있게 돕습니다.",
  },
  {
    icon: Terminal,
    title: "CLI 어댑터 실행",
    description:
      "codex, gemini, claude 같은 LLM CLI와 연결되도록 adapter와 subprocess 경계를 분리합니다.",
  },
];

const features = [
  { name: "One-shot command", desc: "단일 명령 즉시 실행" },
  { name: "Text REPL", desc: "텍스트 대화형 인터페이스" },
  { name: "TUI REPL", desc: "터미널 UI 모드" },
  { name: "Stub / Real mode", desc: "테스트·실제 실행 분리" },
  { name: "Session save & resume", desc: "세션 저장 및 재시작" },
  { name: "Token metrics", desc: "토큰 사용량 추적" },
  { name: "Adapter boundary", desc: "CLI 어댑터 경계 분리" },
  { name: "Context / state tracking", desc: "컨텍스트 상태 관리" },
];

export function ExplainSection() {
  return (
    <section
      id="about"
      className="flex h-screen flex-col justify-center overflow-hidden px-5 py-20 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            What is DeToks?
          </p>
          <h2 className="text-4xl font-black tracking-[-0.055em] md:text-5xl">
            DeToks는 LLM CLI 작업 흐름을
            <br />
            정리합니다
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            내부 구조를 몰라도 됩니다. DeToks는 사용자 입력과 Codex, Gemini, Claude 같은
            LLM CLI 사이에서 컨텍스트, 세션, 실행 경계를 정리합니다.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <LiquidCard className="h-full p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00c853]/25 bg-[#00c853]/10 text-[#00c853]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">{item.description}</p>
                </LiquidCard>
              </motion.div>
            );
          })}
        </div>

        <LiquidCard className="mt-3 p-4">
          <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black">
              Prompt
            </span>
            <ArrowRight className="h-4 w-4 text-[#00c853]" />
            <span className="rounded-full border border-[#00c853]/30 bg-[#00c853]/10 px-4 py-2 text-sm font-black text-[#00c853]">
              DeToks
            </span>
            <ArrowRight className="h-4 w-4 text-[#00c853]" />
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black">
              Codex · Gemini · Claude
            </span>
          </div>
        </LiquidCard>

        <div className="mt-5">
          <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-white/40">
            실제로 제공하는 기능
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {features.map((f, index) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <p className="text-sm font-black text-white">{f.name}</p>
                <p className="mt-0.5 text-xs text-white/44">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
