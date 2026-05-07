import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { LiquidCard } from "./LiquidCard";

const result = [
  "인증 관련 파일 찾기",
  "로그인 요청 흐름 확인",
  "중복 검증 로직 확인",
  "문제 수정",
  "테스트 실행",
  "변경 사항 요약",
];

export function ExampleSection() {
  return (
    <section id="example" className="relative flex h-screen items-center overflow-hidden px-5 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00c853]/[0.035] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Usage Example
          </p>
          <h2 className="text-4xl font-black tracking-[-0.055em] md:text-5xl">
            이런 식으로 사용할 수 있어요
          </h2>
          <p className="mt-5 text-base leading-7 text-white/66">
            DeToks는 대신 개발하는 도구가 아니라, AI가 더 잘 이해하도록 요청을
            정리하는 도구입니다.
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
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white/45">
                Before
              </p>
              <p className="text-xl font-black leading-9 tracking-[-0.035em]">
                "지금 인증 쪽 문제가 있는 것 같은데 로그인 요청이 어디서
                처리되는지 찾아보고 중복 검증 문제도 고쳐주고 테스트까지
                돌려줘."
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
                After
              </p>
              <div className="space-y-2">
                {result.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00c853]" />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </LiquidCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
