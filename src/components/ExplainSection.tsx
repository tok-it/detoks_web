import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const COMMAND = `detoks "로그인 버그 고쳐줘. 테스트도 돌리고, 문서 업데이트에 PR까지 만들어줘."`;
const TYPE_SPEED = 28;

const TASKS = [
  { id: "fix-login-bug",  ctx: "bug context only" },
  { id: "run-tests",      ctx: "test context only" },
  { id: "update-docs",    ctx: "docs context only" },
  { id: "create-pr",      ctx: "PR context only" },
];

const STEPS = [
  {
    num: "01",
    title: "한국어를 압축 영문으로",
    desc: "한국어는 같은 내용을 영어보다 토큰을 더 많이 씁니다. DeToks가 LLM에 보내기 전에 번역·압축합니다.",
  },
  {
    num: "02",
    title: "작업마다 딱 필요한 맥락만",
    desc: "요청을 작업 단위로 나눠 각 작업에 꼭 필요한 컨텍스트만 LLM에 전달합니다.",
  },
  {
    num: "03",
    title: "세션이 이어집니다",
    desc: "결과를 저장하고 다음 작업에 필요한 부분만 꺼내 씁니다. 다시 붙여넣을 필요 없습니다.",
  },
];

export function ExplainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-120px" });

  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setTyped("");
      setTypingDone(false);
      setShow1(false);
      setShow2(false);
      setShow3(false);
      return;
    }

    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(iv);
        setTypingDone(true);
        setTimeout(() => setShow1(true), 300);
        setTimeout(() => setShow2(true), 1200);
        setTimeout(() => setShow3(true), 2000);
      }
    }, TYPE_SPEED);

    return () => clearInterval(iv);
  }, [isInView]);

  const prefixLen = "detoks ".length;
  const typedPrefix = typed.slice(0, prefixLen);
  const typedArg = typed.slice(prefixLen);

  return (
    <section id="about" className="overflow-hidden px-5 py-28 md:px-8">
      <div className="mx-auto w-full max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00c853]">
            How it works
          </p>
          <h2 className="text-4xl font-black tracking-[-0.055em] md:text-5xl">
            토큰이 줄어드는 이유
          </h2>
        </motion.div>

        {/* Terminal */}
        <div
          ref={ref}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0e14]/85 shadow-[0_32px_80px_-12px_rgba(0,200,83,0.12)] backdrop-blur-xl"
        >
          <div className="relative flex items-center border-b border-white/8 bg-white/[0.04] px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-xs text-white/25">
              <span className="text-[#00c853]/40">◆</span>
              detoks pipeline
            </div>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed md:p-8">
            {/* Command line */}
            <div className="flex items-baseline gap-x-1.5">
              <span className="shrink-0 text-[#00c853]/70">❯</span>
              <span>
                <span className="text-white/80">{typedPrefix}</span>
                <span className="text-[#6dff9f]/70">{typedArg}</span>
                {!typingDone && (
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

            {/* ① token compression */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: show1 ? 1 : 0, y: show1 ? 0 : 6 }}
              transition={{ duration: 0.35 }}
              className="mt-6 space-y-3"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="text-white/15">①</span>
                <span className="font-bold uppercase tracking-widest text-[#00c853]/50">
                  token compression
                </span>
                <div className="h-px flex-1 bg-white/6" />
              </div>

              <div className="ml-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-16 text-right text-xs text-white/25">input</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      animate={{ width: show1 ? "100%" : "0%" }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="h-full rounded-full bg-red-400/45"
                    />
                  </div>
                  <span className="w-20 text-right text-xs text-white/30 line-through tabular-nums">
                    847 tok
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-16 text-right text-xs text-[#00c853]/55">compiled</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      animate={{ width: show1 ? "22%" : "0%" }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="h-full rounded-full bg-[#00c853]"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: show1 ? 1 : 0 }}
                    transition={{ delay: 0.75 }}
                    className="flex w-20 shrink-0 items-center justify-end gap-1.5 whitespace-nowrap"
                  >
                    <span className="text-xs font-bold text-[#00c853] tabular-nums">183 tok</span>
                    <span className="rounded bg-[#00c853]/15 px-1 py-px text-[10px] text-[#00c853]">
                      -78%
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ② context isolation */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: show2 ? 1 : 0, y: show2 ? 0 : 6 }}
              transition={{ duration: 0.35 }}
              className="mt-6 space-y-3"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="text-white/15">②</span>
                <span className="font-bold uppercase tracking-widest text-[#00c853]/50">
                  context isolation
                </span>
                <div className="h-px flex-1 bg-white/6" />
              </div>

              <div className="ml-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TASKS.map((task, i) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: show2 ? 1 : 0, y: show2 ? 0 : 4 }}
                    transition={{ duration: 0.25, delay: 0.08 * i }}
                    className="rounded-xl border border-[#00c853]/20 bg-[#00c853]/[0.06] px-3 py-2.5"
                  >
                    <div className="text-xs font-bold text-[#6dff9f]/80">{task.id}</div>
                    <div className="mt-1 text-[10px] text-[#00c853]/45">{task.ctx}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ③ session saved */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: show3 ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 flex items-center gap-3 border-t border-white/6 pt-4 text-xs"
            >
              <span className="text-white/15">③</span>
              <span className="font-bold uppercase tracking-widest text-[#00c853]/50">
                session saved
              </span>
              <span className="text-white/15">→</span>
              <span className="text-white/35">.detoks/session.json</span>
              <motion.span
                animate={{ opacity: show3 ? [0, 1, 0] : 0 }}
                transition={{ delay: 0.4, duration: 1.1, repeat: Infinity }}
                className="ml-auto text-[#00c853]/50"
              >
                █
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Step labels */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.num}>
              <span className="font-mono text-5xl font-black leading-none text-white/[0.06]">
                {s.num}
              </span>
              <h3 className="mt-1 text-base font-black tracking-[-0.03em]">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/40">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
