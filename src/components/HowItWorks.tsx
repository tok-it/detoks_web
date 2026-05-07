const steps = [
  {
    step: '1',
    from: '',
    title: '요청 입력',
    desc: '자연어로 원하는 작업을 detoks run 명령어에 전달합니다.',
    color: 'rgba(255,255,255,0.15)',
    textColor: 'rgba(255,255,255,0.9)',
  },
  {
    step: '2',
    title: 'DeToks 처리',
    desc: '요청을 분석해 명확한 작업 단계로 재구성합니다.',
    color: 'var(--color-green)',
    textColor: '#000',
    highlight: true,
  },
  {
    step: '3',
    title: 'AI 에이전트 실행',
    desc: '정리된 작업 흐름이 AI 코딩 에이전트에 전달되어 실행됩니다.',
    color: 'rgba(255,255,255,0.15)',
    textColor: 'rgba(255,255,255,0.9)',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: 'var(--color-dark)' }}>
      <div className="container">
        <div className="section-label" style={{ color: 'var(--color-green)' }}>
          작동 방식
        </div>
        <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
          단 3단계
        </h2>
        <p
          className="section-desc"
          style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '48px' }}
        >
          복잡한 설정 없이, 기존 AI 도구 앞에서 바로 동작합니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            position: 'relative',
          }}
          className="how-it-works-grid"
        >
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                background: s.highlight ? 'var(--color-green)' : 'rgba(255,255,255,0.05)',
                border: s.highlight
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '28px 24px',
                position: 'relative',
              }}
            >
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: '-18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '20px',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                  aria-hidden
                >
                  →
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: s.highlight ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.3)',
                  marginBottom: '12px',
                }}
              >
                STEP {s.step}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '18px',
                  color: s.highlight ? '#000' : 'var(--color-white)',
                  marginBottom: '10px',
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: s.highlight ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '32px',
            padding: '16px 20px',
            background: 'rgba(0, 200, 83, 0.08)',
            border: '1px solid rgba(0, 200, 83, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '18px' }}>💡</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            기존에 사용하던 AI 코딩 도구를 그대로 쓰면서, 앞단에 DeToks만 추가하면 됩니다.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
