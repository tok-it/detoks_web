import { motion } from "framer-motion";
import { Copy, Play, Terminal } from "lucide-react";
import { LiquidButton } from "./LiquidButton";


export function QuickStartSection() {
  return (
    <section id="quick-start" className="relative px-5 py-24 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Quick Start
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.055em] md:text-6xl">
            설치하고 바로
            <br />
            써보세요
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/66">
            DeToks는 복잡한 설정이 아니라, 평소처럼 작성한 요청을 더 명확한 작업
            흐름으로 바꿔주는 도구입니다.
          </p>

          <div className="mt-8">
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
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-[#00c853]" />
              <span className="ml-3 text-sm font-bold text-white/52">
                terminal
              </span>
            </div>
            <Copy className="h-4 w-4 text-white/44" />
          </div>

          <div className="space-y-6 p-6 md:p-8">
            <div>
              <p className="mb-2 text-sm font-black text-[#00c853]">Install</p>
              <pre className="code-font overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-white">
                <code>
                  <span className="text-[#00c853]">$</span> npm install -g
                  detoks
                </code>
              </pre>
            </div>

            <div>
              <p className="mb-2 text-sm font-black text-[#00c853]">Run</p>
              <pre className="code-font overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-white">
                <code>
                  <span className="text-[#00c853]">$</span> detoks "로그인
                  흐름을 분석하고 중복 검증 버그를 수정한 뒤 테스트까지
                  실행해줘"
                </code>
              </pre>
            </div>

            <div className="rounded-2xl border border-[#00c853]/25 bg-[#00c853]/10 p-4">
              <p className="flex items-center gap-2 text-sm font-bold leading-6 text-[#8cffb8]">
                <Terminal className="h-4 w-4" />
                DeToks가 요청을 작업 단위로 정리합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
