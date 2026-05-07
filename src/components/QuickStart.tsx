import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const steps = [
  {
    id: 'install',
    label: '01 · 설치',
    title: '패키지 설치',
    cmd: 'npm install -g detoks',
    output: null,
    note: 'Node.js v18 이상 필요',
  },
  {
    id: 'run',
    label: '02 · 실행',
    title: '요청 실행',
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
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay }}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '4px' }}
      >
        <span style={{
          width: '18px', height: '18px', borderRadius: '50%',
          background: 'rgba(0,200,83,0.15)', color: 'var(--color-green)',
          fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, border: '1px solid rgba(0,200,83,0.25)',
        }}>{line.n}</span>
        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>{line.text}</span>
      </motion.div>
    )
  }
  if (line.type === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        style={{ color: 'var(--color-green)', fontSize: '13px', marginTop: '4px', paddingLeft: '4px' }}
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
      style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', paddingLeft: '4px' }}
    >
      {line.text}
    </motion.div>
  )
}

function Terminal({ step, active }: { step: typeof steps[0]; active: boolean }) {
  return (
    <div
      className="code-block"
      style={{
        borderColor: active ? 'rgba(0,200,83,0.25)' : 'rgba(255,255,255,0.07)',
        boxShadow: active ? '0 0 0 1px rgba(0,200,83,0.15), 0 8px 40px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'all 0.3s',
      }}
    >
      <div className="code-block-header">
        <div className="code-block-dots">
          <span /><span /><span />
        </div>
        <span className="code-block-title">Terminal</span>
      </div>
      <pre style={{ padding: '20px', fontSize: '14px', lineHeight: 1.7 }}>
        <code>
          {/* Command line */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: step.output ? '16px' : '0' }}>
            <span style={{ color: 'var(--color-green)', userSelect: 'none', flexShrink: 0 }}>$</span>
            <span style={{ color: '#e8f5e9', wordBreak: 'break-all' }}>{step.cmd}</span>
          </div>

          {/* Output */}
          {step.output && active && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {step.output.map((line, i) => (
                <TerminalLine key={i} line={line} delay={i * 0.1} />
              ))}
            </div>
          )}
        </code>
      </pre>
    </div>
  )
}

export default function QuickStart() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="section" id="quickstart" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <FadeIn>
          <div className="section-label">Quick Start</div>
          <h2 className="section-title">5분이면 바로 써볼 수 있어요</h2>
          <p className="section-desc" style={{ marginBottom: '40px' }}>
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
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: activeStep === i ? '1.5px solid var(--color-green)' : '1.5px solid var(--color-border)',
                  background: activeStep === i ? 'rgba(0,200,83,0.07)' : 'transparent',
                  color: activeStep === i ? 'var(--color-green)' : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Terminal display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Terminal step={steps[activeStep]} active={true} />
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <div
            style={{
              marginTop: '14px',
              fontSize: '13px',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: 'var(--color-green)', fontSize: '11px' }}>ℹ</span>
            {steps[activeStep].note}
            {activeStep === 0 && (
              <>
                {' · '}
                <a href="https://github.com/detoks/detoks#configuration" target="_blank" rel="noopener noreferrer">
                  에이전트 설정 →
                </a>
              </>
            )}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep(i => i - 1)}
                className="btn btn-outline"
                style={{ fontSize: '13px', padding: '9px 18px' }}
              >
                ← 이전
              </button>
            )}
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep(i => i + 1)}
                className="btn btn-primary"
                style={{ fontSize: '13px', padding: '9px 18px' }}
              >
                다음 단계 →
              </button>
            )}
            {activeStep === steps.length - 1 && (
              <a href="https://github.com/detoks/detoks" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '13px', padding: '9px 18px' }}>
                GitHub에서 더 보기 →
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
