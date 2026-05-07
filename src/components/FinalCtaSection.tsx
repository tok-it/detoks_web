import { useState } from "react";
import { ArrowRight, Check, Copy, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidButton } from "./LiquidButton";

const INSTALL_CMD = "npm install -g @sorlros/detoks";

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

export function FinalCtaSection() {
  return (
    <section id="cta" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-28 md:px-8">
      {/* Background glows */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c853]/12 blur-[120px]" />
      <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-[#00c853]/6 blur-[80px]" />
      <div className="absolute right-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-white/4 blur-[80px]" />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-5xl font-black leading-[1.08] tracking-[-0.06em] md:text-7xl"
        >
          <span className="block text-white">토큰은 줄이고,</span>
          <span className="block bg-gradient-to-r from-[#00c853] via-[#6dff9f] to-[#00c853] bg-clip-text text-transparent">
            작업은 끊기지 않게
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-5 max-w-sm text-base leading-7 text-white/40"
        >
          codex, claude를 쓰던 방식 그대로 —<br />DeToks가 나머지를 처리합니다.
        </motion.p>

        {/* Install command */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mx-auto mt-10 flex max-w-md items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a0e14]/80 px-5 py-3.5 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-[#00c853]/60">$</span>
            <span className="text-white/80">{INSTALL_CMD}</span>
          </div>
          <CopyButton text={INSTALL_CMD} />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LiquidButton href="#quick-start" variant="primary">
            Quick Start 보기
            <ArrowRight className="h-5 w-5" />
          </LiquidButton>

          <LiquidButton href="https://github.com/tok-it/detoks">
            <ExternalLink className="h-4 w-4" />
            GitHub에서 보기
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  );
}
