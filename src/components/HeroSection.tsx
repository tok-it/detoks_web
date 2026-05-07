import { motion } from "framer-motion";
import { ArrowRight, Terminal, CheckCircle2 } from "lucide-react";
import { LiquidButton } from "./LiquidButton";
import { LiquidCard } from "./LiquidCard";

const tasks = [
  "요청을 작업 단위로 분해",
  "실행 순서 정리",
  "필요한 컨텍스트만 유지",
  "CLI 어댑터로 전달",
  "결과를 세션에 저장",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden px-5 pb-8 pt-24 md:px-8 md:pt-28"
    >
      <div className="detoks-grid absolute inset-0 opacity-70" />

      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#00c853]/20 blur-[90px]" />
      <div className="absolute right-[-120px] top-[220px] h-[320px] w-[320px] rounded-full bg-white/10 blur-[90px]" />
      <div className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#00c853]/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-4xl font-black leading-[1.05] tracking-[-0.065em] md:text-6xl"
          >
            AI 코딩 에이전트에게
            <br />
            <span className="bg-gradient-to-r from-[#00c853] via-[#6dff9f] to-[#00c853] bg-clip-text text-transparent">
              더 명확하게 일 시키는 방법
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-white/76 md:text-lg"
          >
            DeToks는 Codex, Gemini, Claude 같은 LLM CLI 앞단에서 동작하는 CLI 도구입니다.
            <br className="hidden md:block" />
            긴 요청을 작업 흐름으로 정리하고, 세션과 실행 경계를 관리해 AI 코딩 워크플로우를 더 안정적으로 만듭니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <LiquidButton href="#quick-start" variant="primary">
              시작하기
              <ArrowRight className="h-5 w-5" />
            </LiquidButton>
            <LiquidButton href="#example">사용 예시 보기</LiquidButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
          className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]"
        >
          <LiquidCard className="p-5 md:p-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white/52">
              <Terminal className="h-4 w-4" />
              Before
            </div>
            <p className="text-left text-xl font-black leading-8 tracking-[-0.03em]">
              "로그인 버그 고쳐줘. 테스트도 돌리고, 문서 업데이트에 PR까지 만들어줘."
            </p>
          </LiquidCard>

          <LiquidCard className="border-[#00c853]/35 p-5 md:p-6">
            <div className="mb-3 text-sm font-bold text-[#00c853]">
              After · DeToks가 정리한 실행 흐름
            </div>
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <motion.div
                  key={task}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.48 + index * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00c853]" />
                  <span className="text-sm font-bold text-white">{task}</span>
                </motion.div>
              ))}
            </div>
          </LiquidCard>
        </motion.div>
      </div>
    </section>
  );
}
