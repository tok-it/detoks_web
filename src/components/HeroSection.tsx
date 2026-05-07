import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { LiquidButton } from "./LiquidButton";
import { LiquidCard } from "./LiquidCard";

const tasks = [
  "인증 관련 코드 찾기",
  "로그인 흐름 분석하기",
  "중복 검증 로직 수정하기",
  "테스트 실행하기",
  "변경 내용 요약하기",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <div className="detoks-grid absolute inset-0 opacity-70" />

      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#00c853]/20 blur-[90px]" />
      <div className="absolute right-[-120px] top-[220px] h-[320px] w-[320px] rounded-full bg-white/10 blur-[90px]" />
      <div className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#00c853]/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00c853]/30 bg-[#00c853]/10 px-4 py-2 text-sm font-bold text-[#00c853] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            AI Coding Agent Helper
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-5xl font-black leading-[1.05] tracking-[-0.065em] md:text-7xl"
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
            className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-white/68 md:text-xl"
          >
            DeToks는 긴 개발 요청을 정리해서 Codex, Claude, Gemini 같은 AI 코딩
            에이전트가 더 안정적으로 이해하고 실행할 수 있도록 도와주는 CLI
            도구입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
          className="mt-16 grid gap-5 lg:grid-cols-[1fr_0.9fr]"
        >
          <LiquidCard className="p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold text-white/52">
              <Terminal className="h-4 w-4" />
              Before
            </div>
            <p className="text-left text-2xl font-black leading-10 tracking-[-0.03em]">
              “로그인 코드 찾아보고, 흐름 분석하고, 중복 검증 버그 고치고,
              테스트 돌리고, 문서도 정리해줘.”
            </p>
          </LiquidCard>

          <LiquidCard className="border-[#00c853]/35 p-6 md:p-8">
            <div className="mb-5 text-sm font-bold text-[#00c853]">
              After · DeToks가 정리한 작업
            </div>

            <div className="space-y-3">
              {tasks.map((task, index) => (
                <motion.div
                  key={task}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.48 + index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00c853]" />
                  <span className="font-bold text-white">{task}</span>
                </motion.div>
              ))}
            </div>
          </LiquidCard>
        </motion.div>
      </div>
    </section>
  );
}
