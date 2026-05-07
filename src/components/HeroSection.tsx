import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const COMMAND = `detoks "로그인 버그 고쳐줘. 테스트도 돌리고, 문서 업데이트에 PR까지 만들어줘."`;
const TYPE_SPEED = 36;

const tasks = [
  { label: "task:fix-login-bug", compiled: "fix login bug",    status: "done" },
  { label: "task:run-tests",     compiled: "run tests",        status: "done" },
  { label: "task:update-docs",   compiled: "update docs",      status: "running" },
  { label: "task:create-pr",     compiled: "create pull req",  status: "pending" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "done")
    return <span className="text-[#00c853] text-xs font-mono">✓</span>;
  if (status === "running")
    return <span className="animate-pulse text-yellow-400 text-xs font-mono">●</span>;
  return <span className="text-white/20 text-xs font-mono">○</span>;
}

export function HeroSection() {
  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(COMMAND.slice(0, i));
        if (i >= COMMAND.length) {
          clearInterval(id);
          setTypingDone(true);
        }
      }, TYPE_SPEED);
      return () => clearInterval(id);
    }, 600);
    return () => clearTimeout(startDelay);
  }, []);

  const prefixLen = "detoks ".length;
  const typedPrefix = typed.slice(0, prefixLen);
  const typedArg = typed.slice(prefixLen);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32"
    >
      <div className="detoks-grid absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00c853]/18 blur-[100px]" />
      <div className="absolute right-[-80px] top-[280px] h-[300px] w-[300px] rounded-full bg-white/8 blur-[80px]" />
      <div className="absolute bottom-[-120px] left-[-80px] h-[380px] w-[380px] rounded-full bg-[#00c853]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#263238]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* eyebrow */}
        {/* headline */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-5xl font-black leading-[1.08] tracking-[-0.06em] md:text-7xl"
          >
            <span className="block text-white">Less Token.</span>
            <span className="block bg-gradient-to-r from-[#00c853] via-[#6dff9f] to-[#00c853] bg-clip-text text-transparent">
              More Control.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/55 md:text-lg"
          >
            토큰은 줄이고, 작업은 끊기지 않게.
            <br />
            <span className="mt-2 block text-sm text-white/30">
              불필요한 컨텍스트를 자동으로 압축하고,
              세션을 유지해 중간에 끊겨도 이어서 실행합니다.
            </span>
          </motion.p>

        </div>

        {/* Terminal mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e14]/85 shadow-[0_32px_80px_-12px_rgba(0,200,83,0.15)] backdrop-blur-xl">
            {/* Window chrome */}
            <div className="relative flex items-center border-b border-white/8 bg-white/[0.04] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-xs text-white/30">
                <span className="text-[#00c853]/50">◆</span>
                detoks
                <span className="rounded bg-white/8 px-1.5 py-0.5 text-[10px] text-white/20">v0.1.0</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              {/* Input line with typewriter */}
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
                    >▋</motion.span>
                  )}
                </span>
              </div>

              {/* ① Token compression */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 4 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs text-white/25">
                  <span className="text-white/15">①</span>
                  <span>compressing input tokens</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-16 text-right text-xs text-white/25">raw</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      animate={{ width: typingDone ? "100%" : "0%" }}
                      transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full bg-red-400/45"
                    />
                  </div>
                  <span className="w-20 text-xs text-white/25 tabular-nums line-through">847 tok</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-16 text-right text-xs text-[#00c853]/55">compiled</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      animate={{ width: typingDone ? "22%" : "0%" }}
                      transition={{ delay: 0.55, duration: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#00c853]"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: typingDone ? 1 : 0 }}
                    transition={{ delay: 0.75 }}
                    className="flex w-20 shrink-0 items-center gap-1.5 whitespace-nowrap"
                  >
                    <span className="text-xs font-bold text-[#00c853] tabular-nums">183 tok</span>
                    <span className="rounded bg-[#00c853]/15 px-1 py-px text-[10px] text-[#00c853]">-78%</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* ② Dispatching tasks */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 4 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="mt-4"
              >
                <div className="mb-2 flex items-center gap-2 text-xs text-white/25">
                  <span className="text-white/15">②</span>
                  <span>dispatching tasks</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {tasks.map((task) => (
                        <div
                          key={task.label}
                          className={`h-1 w-4 rounded-full ${
                            task.status === "done"
                              ? "bg-[#00c853]/70"
                              : task.status === "running"
                              ? "bg-yellow-400/50"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/15">2 / 4</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {tasks.map((task, i) => (
                    <motion.div
                      key={task.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{
                        opacity: typingDone ? 1 : 0,
                        x: typingDone ? 0 : -8,
                      }}
                      transition={{ duration: 0.25, delay: 1.0 + i * 0.12 }}
                      className={`flex items-center gap-2.5 rounded-lg px-2 py-1 ${
                        task.status === "running" ? "bg-yellow-400/5" : ""
                      }`}
                    >
                      <StatusBadge status={task.status} />
                      <span
                        className={`text-xs font-medium ${
                          task.status === "pending"
                            ? "text-white/20"
                            : task.status === "running"
                            ? "text-white/80"
                            : "text-white/38"
                        }`}
                      >
                        {task.label}
                      </span>
                      <span className="text-white/15">·</span>
                      <span
                        className={`text-xs ${
                          task.status === "pending"
                            ? "text-white/12"
                            : task.status === "running"
                            ? "text-[#6dff9f]/50"
                            : "text-[#00c853]/30"
                        }`}
                      >
                        {task.compiled}
                      </span>
                      {task.status === "running" && (
                        <motion.span
                          animate={{ opacity: [0.3, 0.9, 0.3] }}
                          transition={{ duration: 1.4, repeat: Infinity }}
                          className="ml-auto text-[10px] text-yellow-400/55"
                        >
                          running...
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ③ Session saved */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: typingDone ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 1.55 }}
                className="mt-4 flex items-center gap-2 border-t border-white/6 pt-3 text-xs text-white/25"
              >
                <span className="text-white/15">③</span>
                <span>session saved</span>
                <span className="text-white/15">→</span>
                <span className="text-white/35">.detoks/session.json</span>
                <motion.span
                  animate={{ opacity: typingDone ? [0, 1, 0] : 0 }}
                  transition={{ delay: 1.7, duration: 1, repeat: Infinity }}
                  className="ml-auto text-[#00c853]/50"
                >
                  █
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
