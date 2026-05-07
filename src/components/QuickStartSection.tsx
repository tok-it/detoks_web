import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Play } from "lucide-react";
import { LiquidButton } from "./LiquidButton";

const snippets = [
  {
    label: "Install",
    code: "npm install -g @sorlros/detoks\ndetoks --help",
    display: (
      <>
        <span className="text-[#00c853]">$</span> npm install -g @sorlros/detoks{"\n"}
        <span className="text-[#00c853]">$</span> detoks --help
      </>
    ),
  },
  {
    label: "One-shot",
    code: `detoks "summarize the current repo status"`,
    display: (
      <>
        <span className="text-[#00c853]">$</span> detoks{" "}
        <span className="text-white/70">"summarize the current repo status"</span>
      </>
    ),
  },
  {
    label: "REPL / TUI",
    code: "detoks repl\ndetoks repl --adapter codex --tui",
    display: (
      <>
        <span className="text-[#00c853]">$</span> detoks repl{"\n"}
        <span className="text-[#00c853]">$</span> detoks repl --adapter codex --tui
      </>
    ),
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-white/30 transition-colors hover:bg-white/8 hover:text-white/70"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#00c853]" />
          <span className="text-[#00c853]">copied</span>
        </>
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export function QuickStartSection() {
  return (
    <section id="quick-start" className="relative flex h-screen items-center overflow-hidden px-5 md:px-8">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#263238]" />

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
            설치 한 번,
            <br />
            이후는 평소대로
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
            별도 설정 없이 adapter만 선택하면 됩니다.
            <br />
            codex, claude를 쓰던 방식 그대로 — DeToks가
            <br />
            토큰 압축과 세션 유지를 투명하게 처리합니다.
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
          <div className="flex items-center border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-[#00c853]" />
              <span className="ml-3 text-sm font-bold text-white/52">terminal</span>
            </div>
          </div>

          <div className="space-y-4 p-5 md:p-6">
            {snippets.map((snippet) => (
              <div key={snippet.label}>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-black text-[#00c853]">{snippet.label}</p>
                  <CopyButton text={snippet.code} />
                </div>
                <pre className="code-font overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white">
                  <code>{snippet.display}</code>
                </pre>
              </div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
