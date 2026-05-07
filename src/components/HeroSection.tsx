import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiquidButton } from "./LiquidButton";

const tasks = [
  { label: "task:fix-login-bug", desc: "버그 픽스 → claude code", status: "done" },
  { label: "task:run-tests", desc: "테스트 실행 → claude code", status: "done" },
  { label: "task:update-docs", desc: "문서 업데이트 → claude code", status: "running" },
  { label: "task:create-pr", desc: "PR 생성", status: "pending" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "done")
    return <span className="text-[#00c853] text-xs font-mono">✓</span>;
  if (status === "running")
    return <span className="animate-pulse text-yellow-400 text-xs font-mono">●</span>;
  return <span className="text-white/25 text-xs font-mono">○</span>;
}

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

      <div className="relative z-10 mx-auto max-w-5xl">
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

        {/* Terminal mockup */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e14]/85 shadow-[0_32px_80px_-12px_rgba(0,200,83,0.15)] backdrop-blur-xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.04] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="mx-auto font-mono text-xs text-white/30">detoks — zsh</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-white/50">
                <span className="text-[#00c853]/70">❯ </span>
                <span className="text-white/80">detoks </span>
                <span className="text-[#6dff9f]/80">
                  &quot;로그인 버그 고쳐줘. 테스트도 돌리고, 문서 업데이트에 PR까지 만들어줘.&quot;
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-xs text-white/35"
              >
                ✦ Parsed 4 tasks · dispatching to claude code
              </motion.div>

              <div className="mt-3 space-y-2.5">
                {tasks.map((task, i) => (
                  <motion.div
                    key={task.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    className="flex items-center gap-3"
                  >
                    <StatusBadge status={task.status} />
                    <span
                      className={
                        task.status === "pending"
                          ? "text-white/25"
                          : task.status === "running"
                          ? "text-white/90"
                          : "text-white/60"
                      }
                    >
                      {task.label}
                    </span>
                    <span className="text-white/25 text-xs">{task.desc}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 1.1, duration: 1, repeat: Infinity }}
                className="mt-4 text-[#00c853]/60"
              >
                █
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
