import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const steps = [
  {
    id: 'install',
    label: '01 · 설치',
    cmd: 'npm install -g detoks',
    output: null,
    note: 'Node.js v18 이상 필요',
  },
  {
    id: 'run',
    label: '02 · 실행',
    cmd: 'detoks "로그인 흐름을 분석하고 중복 검증 버그를 수정한 뒤 테스트까지 실행해줘"',
    output: [
      { type: 'info', text: '✦  Analyzing prompt...' },
      { type: 'task', n: 1, text: '인증 관련 코드 탐색' },
      { type: 'task', n: 2, text: '로그인 흐름 분석' },
      { type: 'task', n: 3, text: '중복 검증 로직 수정' },
      { type: 'task', n: 4, text: '테스트 실행' },
      { type: 'task', n: 5, text: '결과 요약' },
      { type: 'success', text: '→  Sending to AI agent...' },
    ],
    note: '자연어로 입력하면 DeToks가 자동으로 정리합니다',
  },
]

function TerminalLine({ line, delay }: {
  line: { type: string; text?: string; n?: number }
  delay: number
}) {
  if (line.type === 'task') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay }}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '4px' }}
      >
        <span style={{
          width: '20px', height: '20px', borderRadius: '50%',
          background: 'rgba(0,200,83,0.2)', color: 'var(--color-green)',
          fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, border: '1px solid rgba(0,200,83,0.3)',
        }}>{line.n}</span>
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>{line.text}</span>
      </motion.div>
    )
  }
  if (line.type === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        style={{ color: 'var(--color-green)', fontSize: '15px', marginTop: '6px', paddingLeft: '4px', fontWeight: 500 }}
      >
        {line.text}
      </motion.div>
    )
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', paddingLeft: '4px' }}
    >
      {line.text}
    </motion.div>
  )
}

function Terminal({ step, active }: { step: typeof steps[0]; active: boolean }) {
  return (
    <div
      style={{
        background: '#141e23',
        borderRadius: '14px',
        overflow: 'hidden',
        border: active ? '1px solid rgba(0,200,83,0.3)' : '1px solid rgba(255,255,255,0.08)',
        boxShadow: active
          ? '0 0 0 1px rgba(0,200,83,0.1), 0 24px 64px rgba(0,0,0,0.5)'
          : '0 8px 32px rgba(0,0,0,0.3)',
        transition: 'all 0.3s',
      }}
    >
      {/* Window chrome */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        padding: '13px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28ca41', display: 'block' }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.3)',
          marginLeft: '6px',
        }}>
          bash — detoks
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: '28px 28px', fontFamily: 'var(--font-mono)' }}>
        {/* Command */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: step.output ? '24px' : '0', alignItems: 'flex-start' }}>
          <span style={{ color: 'var(--color-green)', userSelect: 'none', flexShrink: 0, fontSize: '16px', lineHeight: 1.6 }}>$</span>
          <span style={{ color: '#e8f5e9', fontSize: '16px', lineHeight: 1.6, wordBreak: 'break-all' }}>{step.cmd}</span>
        </div>

        {/* Output */}
        {step.output && active && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {step.output.map((line, i) => (
              <TerminalLine key={i} line={line} delay={i * 0.1} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function QuickStart() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      className="section"
      id="quickstart"
      style={{ background: 'var(--color-dark)' }}
    >
      <div className="container">
        <FadeIn>
          <div className="section-label" style={{ color: 'var(--color-green)' }}>Quick Start</div>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
            5분이면 바로 써볼 수 있어요
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '40px' }}>
            Node.js 18 이상이 설치되어 있다면 지금 바로 시작할 수 있습니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Step tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(i)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  border: activeStep === i
                    ? '1.5px solid var(--color-green)'
                    : '1.5px solid rgba(255,255,255,0.12)',
                  background: activeStep === i ? 'rgba(0,200,83,0.1)' : 'rgba(255,255,255,0.04)',
                  color: activeStep === i ? 'var(--color-green)' : 'rgba(255,255,255,0.45)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Terminal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Terminal step={steps[activeStep]} active={true} />
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <div style={{
            marginTop: '16px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ color: 'var(--color-green)', fontSize: '12px' }}>ℹ</span>
            {steps[activeStep].note}
            {activeStep === 0 && (
              <>
                {' · '}
                <a
                  href="https://github.com/detoks/detoks#configuration"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(0,200,83,0.7)' }}
                >
                  에이전트 설정 →
                </a>
              </>
            )}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '28px' }}>
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep(i => i - 1)}
                className="btn btn-outline-white"
                style={{ fontSize: '13px', padding: '10px 20px' }}
              >
                ← 이전
              </button>
            )}
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep(i => i + 1)}
                className="btn btn-primary"
                style={{ fontSize: '13px', padding: '10px 20px' }}
              >
                다음 단계 →
              </button>
            )}
            {activeStep === steps.length - 1 && (
              <a
                href="https://github.com/detoks/detoks"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '13px', padding: '10px 20px' }}
              >
                GitHub에서 더 보기 →
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
