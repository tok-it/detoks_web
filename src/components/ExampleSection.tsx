import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const START_CMD = `detoks repl --adapter codex`;
const TYPE_SPEED = 38;

export function ExampleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-120px" });

  const [typed, setTyped] = useState("");
  const [startDone, setStartDone] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setTyped("");
      setStartDone(false);
      setPhase(0);
      return;
    }

    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(START_CMD.slice(0, i));
      if (i >= START_CMD.length) {
        clearInterval(iv);
        setStartDone(true);
        setTimeout(() => setPhase(1), 350);   // startup banner
        setTimeout(() => setPhase(2), 900);   // turn 1 prompt
        setTimeout(() => setPhase(3), 1400);  // compiling + bar
        setTimeout(() => setPhase(4), 2100);  // task done + saved
        setTimeout(() => setPhase(5), 2800);  // turn 2 prompt
        setTimeout(() => setPhase(6), 3300);  // loading ctx + compile + done
        setTimeout(() => setPhase(7), 4000);  // next prompt cursor
      }
    }, TYPE_SPEED);

    return () => clearInterval(iv);
  }, [isInView]);

  return (
    <section id="example" className="overflow-hidden px-5 py-28 md:px-8">
      <div className="mx-auto w-full max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            Session
          </p>
          <h2 className="text-4xl font-black tracking-[-0.055em] md:text-5xl">
            이전 작업을 기억합니다
          </h2>
          <p className="mt-4 text-base leading-7 text-white/40">
            두 번째 요청에서 세션의 이전 결과를 불러옵니다
          </p>
        </motion.div>

        <div
          ref={ref}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0e14]/85 shadow-[0_32px_80px_-12px_rgba(0,200,83,0.12)] backdrop-blur-xl"
        >
          {/* Chrome */}
          <div className="relative flex items-center border-b border-white/8 bg-white/[0.04] px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-xs text-white/25">
              <span className="text-[#00c853]/40">◆</span>
              detoks · repl
            </div>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed md:p-8">
            {/* Start command */}
            <div className="flex items-baseline gap-x-1.5">
              <span className="shrink-0 text-[#00c853]/70">❯</span>
              <span>
                <span className="text-white/80">{typed}</span>
                {!startDone && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="text-white/70"
                  >
                    ▋
                  </motion.span>
                )}
              </span>
            </div>

            {/* Startup banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-1 text-xs"
            >
              <div className="text-white/30">
                detoks <span className="text-white/50">v0.1.0</span>
                <span className="mx-2 text-white/15">·</span>
                codex adapter
                <span className="mx-2 text-white/15">·</span>
                <span className="text-[#00c853]/60">ready</span>
              </div>
              <div className="h-px w-full bg-white/6" />
            </motion.div>

            {/* Turn 1 — prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex items-center gap-2 text-sm"
            >
              <span className="text-[#00c853]/50 text-xs font-bold">you</span>
              <span className="text-white/15">›</span>
              <span className="text-white/75">"로그인 버그 고쳐줘"</span>
            </motion.div>

            {/* Turn 1 — compiling */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 4 }}
              transition={{ duration: 0.3 }}
              className="mt-3 ml-5 space-y-2"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/30">
                <span className="text-[#00c853]/45">compiling</span>
                <span className="text-white/15">·</span>
                <span>"로그인 버그 고쳐줘"</span>
                <span className="text-white/15">→</span>
                <span className="text-[#6dff9f]/65">"fix login bug"</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-28 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    animate={{ width: phase >= 3 ? "22%" : "0%" }}
                    transition={{ delay: 0.15, duration: 0.45 }}
                    className="h-full rounded-full bg-[#00c853]"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 3 ? 1 : 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs font-bold text-[#00c853]"
                >
                  -78% tokens
                </motion.span>
              </div>
            </motion.div>

            {/* Turn 1 — result */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 4 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 ml-5 space-y-1 text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#00c853]">✓</span>
                <span className="text-white/55">task:fix-login-bug</span>
                <span className="text-white/15">·</span>
                <span className="text-white/30">done</span>
              </div>
              <div className="flex items-center gap-2 text-white/25">
                <span>session saved</span>
                <span className="text-white/15">→</span>
                <span className="text-white/35">.detoks/session.json</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 5 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="my-5 h-px bg-white/6"
            />

            {/* Turn 2 — prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 5 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-[#00c853]/50 text-xs font-bold">you</span>
              <span className="text-white/15">›</span>
              <span className="text-white/75">"테스트도 돌려줘"</span>
            </motion.div>

            {/* Turn 2 — loading context highlight */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: phase >= 6 ? 1 : 0, y: phase >= 6 ? 0 : 4 }}
              transition={{ duration: 0.3 }}
              className="mt-3 ml-5 space-y-2"
            >
              <div className="flex items-center gap-2 rounded-lg border border-[#00c853]/20 bg-[#00c853]/[0.06] px-3 py-2 text-xs">
                <span className="text-[#00c853]/70 font-bold">loading context</span>
                <span className="text-white/15">·</span>
                <span className="text-white/45">fix-login-bug result</span>
                <span className="ml-auto rounded bg-[#00c853]/15 px-1.5 py-px text-[10px] text-[#00c853]">
                  session
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-white/30">
                <span className="text-[#00c853]/45">compiling</span>
                <span className="text-white/15">·</span>
                <span>"테스트도 돌려줘"</span>
                <span className="text-white/15">→</span>
                <span className="text-[#6dff9f]/65">"run tests"</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#00c853]">✓</span>
                  <span className="text-white/55">task:run-tests</span>
                  <span className="text-white/15">·</span>
                  <span className="text-white/30">done</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/25">
                  <span>session saved</span>
                  <span className="text-white/15">→</span>
                  <span className="text-white/35">.detoks/session.json</span>
                </div>
              </div>
            </motion.div>

            {/* Next prompt cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 7 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-5 h-px bg-white/6"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 7 ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-4 flex items-center gap-2 text-sm"
            >
              <span className="text-[#00c853]/50 text-xs font-bold">you</span>
              <span className="text-white/15">›</span>
              <motion.span
                animate={{ opacity: phase >= 7 ? [1, 0, 1] : 0 }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="text-white/40"
              >
                ▋
              </motion.span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
