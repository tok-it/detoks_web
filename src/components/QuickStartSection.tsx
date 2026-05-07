import { motion } from "framer-motion";
import { Copy, Play, Terminal } from "lucide-react";
import { LiquidButton } from "./LiquidButton";

export function QuickStartSection() {
  return (
    <section id="quick-start" className="relative flex h-screen items-center overflow-hidden px-5 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Quick Start
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.055em] md:text-5xl">
            설치하고 바로
            <br />
            연결해보세요
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
            기존 LLM CLI 워크플로우를 바꾸지 않아도 됩니다. DeToks를 앞단에 두기만
            하면 요청이 정리된 채로 에이전트에게 전달됩니다.
          </p>

          <div className="mt-7">
            <LiquidButton href="#example" variant="primary">
              예시 보기
              <Play className="h-4 w-4" />
            </LiquidButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="terminal-glass overflow-hidden rounded-[30px]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-[#00c853]" />
              <span className="ml-3 text-sm font-bold text-white/52">terminal</span>
            </div>
            <Copy className="h-4 w-4 text-white/44" />
          </div>

          <div className="space-y-4 p-5 md:p-6">
            <div>
              <p className="mb-2 text-sm font-black text-[#00c853]">Install</p>
              <pre className="code-font overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white">
                <code><span className="text-[#00c853]">$</span> npm install -g @sorlros/detoks{"\n"}<span className="text-[#00c853]">$</span> detoks --help</code>
              </pre>
            </div>

            <div>
              <p className="mb-2 text-sm font-black text-[#00c853]">One-shot</p>
              <pre className="code-font overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white">
                <code><span className="text-[#00c853]">$</span> detoks <span className="text-white/70">"summarize the current repo status"</span></code>
              </pre>
            </div>

            <div>
              <p className="mb-2 text-sm font-black text-[#00c853]">REPL / TUI</p>
              <pre className="code-font overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white">
                <code>
                  <span className="text-[#00c853]">$</span> detoks repl --adapter codex --execution-mode stub{"\n"}
                  <span className="text-[#00c853]">$</span> detoks repl --adapter codex --execution-mode stub --tui
                </code>
              </pre>
            </div>

            <div className="rounded-2xl border border-[#00c853]/25 bg-[#00c853]/10 p-4">
              <p className="flex items-center gap-2 text-sm font-bold leading-6 text-[#8cffb8]">
                <Terminal className="h-4 w-4" />
                DeToks가 입력·컨텍스트·세션을 정리한 뒤 LLM CLI에 전달합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
