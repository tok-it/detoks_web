import { motion } from "framer-motion";
import { ArrowRight, Bot, FileText, Workflow } from "lucide-react";
import { LiquidCard } from "./LiquidCard";

const items = [
  {
    icon: FileText,
    title: "요청을 정리합니다",
    description: "긴 개발 요청을 읽기 쉬운 작업 단위로 나눕니다.",
  },
  {
    icon: Workflow,
    title: "흐름을 보여줍니다",
    description:
      "어떤 일을 먼저 하고 다음에 무엇을 할지 확인하기 쉽게 만듭니다.",
  },
  {
    icon: Bot,
    title: "에이전트에게 전달합니다",
    description:
      "AI 코딩 에이전트가 더 명확한 흐름으로 작업할 수 있게 돕습니다.",
  },
];

export function ExplainSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            What is DeToks?
          </p>
          <h2 className="text-4xl font-black tracking-[-0.055em] md:text-6xl">
            DeToks는 요청을 정리하는
            <br />
            CLI 도구입니다
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/66">
            내부 구조를 몰라도 됩니다. DeToks는 사용자 요청과 AI 코딩 에이전트
            사이에서 흐름을 정리합니다.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
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
                <LiquidCard className="h-full p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00c853]/25 bg-[#00c853]/10 text-[#00c853]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">
                    {item.description}
                  </p>
                </LiquidCard>
              </motion.div>
            );
          })}
        </div>

        <LiquidCard className="mt-8 p-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 font-black">
              User Prompt
            </span>
            <ArrowRight className="h-5 w-5 text-[#00c853]" />
            <span className="rounded-full border border-[#00c853]/30 bg-[#00c853]/10 px-5 py-3 font-black text-[#00c853]">
              DeToks
            </span>
            <ArrowRight className="h-5 w-5 text-[#00c853]" />
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 font-black">
              AI Coding Agent
            </span>
          </div>
        </LiquidCard>
      </div>
    </section>
  );
}
