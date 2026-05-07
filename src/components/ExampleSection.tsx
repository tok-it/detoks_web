import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { LiquidCard } from "./LiquidCard";

const steps = [
  "입력 요청 분석",
  "작업 목록 생성",
  "실행 순서 정리",
  "필요한 컨텍스트 선택",
  "CLI adapter로 실행",
  "결과를 세션에 저장",
];

export function ExampleSection() {
  return (
    <section
      id="example"
      className="relative flex h-screen flex-col justify-center overflow-hidden px-5 py-20 md:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00c853]/[0.035] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Usage Example
          </p>
          <h2 className="text-4xl font-black tracking-[-0.055em] md:text-5xl">
            이렇게 정리해서 전달합니다
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            모호한 요청을 컨텍스트·범위·작업 단위·실행 경계로 구조화해
            LLM CLI가 예측 가능하게 동작하도록 합니다.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LiquidCard className="h-full p-6 md:p-7">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white/50">
                Raw Input
              </p>
              <p className="text-xl font-black leading-9 tracking-[-0.035em]">
                "현재 repo 상태를 보고, 문제 있는 부분을 찾아서 수정 방향을
                정리하고, 필요하면 테스트까지 실행해줘."
              </p>
            </LiquidCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <LiquidCard className="h-full border-[#00c853]/35 p-6 md:p-7">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#00c853]">
                DeToks Output
              </p>
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00c853]" />
                    <span className="code-font text-sm font-bold">
                      <span className="text-[#00c853]/70">{i + 1}.</span>{" "}
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </LiquidCard>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-white/55"
        >
          DeToks는 AI가 코드를 대신 잘 짜게 만드는 마법 도구가 아니라,{" "}
          <span className="text-white/80">
            AI CLI가 작업을 더 안정적으로 수행하도록 흐름을 정리하는 wrapper
          </span>
          입니다.
        </motion.p>
      </div>
    </section>
  );
}
