import FadeIn from './FadeIn'

const steps = [
  {
    icon: '💬',
    label: 'User Prompt',
    desc: '자연어로 요청',
    color: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.12)',
    textColor: 'rgba(255,255,255,0.85)',
    descColor: 'rgba(255,255,255,0.4)',
  },
  {
    icon: '⚡',
    label: 'DeToks',
    desc: '작업 흐름 정리',
    color: 'var(--color-green)',
    borderColor: 'transparent',
    textColor: '#000',
    descColor: 'rgba(0,0,0,0.55)',
    highlight: true,
  },
  {
    icon: '🤖',
    label: 'AI Coding Agent',
    desc: '명확하게 실행',
    color: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.12)',
    textColor: 'rgba(255,255,255,0.85)',
    descColor: 'rgba(255,255,255,0.4)',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: 'var(--color-dark)' }}>
      <div className="container">
        <FadeIn>
          <div className="section-label" style={{ color: 'var(--color-green)' }}>작동 방식</div>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>단 3단계</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '52px' }}>
            기존 AI 도구 앞에 DeToks 하나만 추가하면 됩니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              justifyContent: 'center',
              flexWrap: 'wrap',
              rowGap: '16px',
            }}
            className="flow-row"
          >
            {steps.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
                {/* Step card */}
                <div
                  style={{
                    background: s.color,
                    border: `1px solid ${s.borderColor}`,
                    borderRadius: '14px',
                    padding: '24px 28px',
                    textAlign: 'center',
                    minWidth: '160px',
                    boxShadow: s.highlight ? '0 0 40px rgba(0,200,83,0.18)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '15px',
                      color: s.textColor,
                      marginBottom: '4px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: '12px', color: s.descColor }}>{s.desc}</div>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      padding: '0 12px',
                      color: 'rgba(255,255,255,0.2)',
                      fontSize: '18px',
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              marginTop: '40px',
              padding: '16px 20px',
              background: 'rgba(0, 200, 83, 0.07)',
              border: '1px solid rgba(0, 200, 83, 0.18)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '16px', flexShrink: 0 }}>💡</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              Codex, Claude Code, Gemini CLI 등 기존에 쓰던 AI 도구를 그대로 유지하면서 DeToks만 앞에 추가하면 됩니다.
            </span>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .flow-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .flow-row > div {
            width: 100%;
          }
          .flow-row > div > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
