import FadeIn from './FadeIn'

const pills = [
  { icon: '🔧', label: 'CLI 도구', desc: '터미널에서 바로' },
  { icon: '🌐', label: '에이전트 호환', desc: 'Codex · Claude · Gemini' },
  { icon: '📋', label: '작업 분리', desc: '단계별 자동 정리' },
]

export default function WhatIs() {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <FadeIn>
          <div className="section-label">DeToks란?</div>
          <h2 className="section-title">AI 에이전트 앞에서 일을 정리해주는 도구</h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="section-desc" style={{ marginBottom: '16px' }}>
            Codex, Claude, Gemini 같은 AI 코딩 에이전트에게 복잡한 작업을 맡길 때,
            긴 요청을 한 번에 던지면 에이전트가 순서를 놓치거나 중요한 부분을 건너뛰는 경우가 생깁니다.
          </p>
          <p className="section-desc" style={{ marginBottom: '40px' }}>
            DeToks는 자연어 요청을{' '}
            <strong style={{ color: 'var(--color-dark)', fontWeight: 600 }}>명확하고 순서 있는 작업 흐름</strong>으로
            변환한 뒤 AI 에이전트에 전달합니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {pills.map((p) => (
              <div
                key={p.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  flex: '1',
                  minWidth: '140px',
                }}
              >
                <span style={{ fontSize: '20px' }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)' }}>{p.label}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
