import FadeIn from './FadeIn'

const afterTasks = [
  '인증 관련 코드 찾기',
  '로그인 흐름 분석',
  '중복 검증 로직 수정',
  '테스트 실행',
  '결과 요약',
]

export default function UsageExample() {
  return (
    <section className="section" id="example" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <FadeIn>
          <div className="section-label">사용 예시</div>
          <h2 className="section-title">Before / After</h2>
          <p className="section-desc" style={{ marginBottom: '36px' }}>
            같은 요청이라도 DeToks를 거치면 에이전트가 훨씬 명확하게 이해하고 실행합니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              alignItems: 'start',
            }}
            className="ba-grid"
          >
            {/* Before */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{
                  background: 'rgba(239,68,68,0.1)', color: '#ef4444',
                  padding: '2px 10px', borderRadius: '100px',
                  fontSize: '11px', fontWeight: 700, border: '1px solid rgba(239,68,68,0.2)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  BEFORE
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>DeToks 없이</span>
              </div>
              <div style={{
                background: 'var(--color-white)',
                border: '1.5px solid rgba(239,68,68,0.18)',
                borderRadius: '12px',
                padding: '20px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  lineHeight: 1.75,
                  color: '#6b7280',
                  background: '#fef2f2',
                  borderRadius: '8px',
                  padding: '14px',
                  border: '1px solid rgba(239,68,68,0.1)',
                }}>
                  "로그인 코드 찾아보고 흐름 분석하고 중복 검증 버그 고치고 테스트까지 돌려줘."
                </div>
                <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {['순서 불명확', '맥락이 뒤섞임', '작업 누락 가능'].map(t => (
                    <div key={t} style={{ display: 'flex', gap: '7px', fontSize: '13px', color: '#ef4444', alignItems: 'center' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700 }}>✕</span> {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{
                  background: 'rgba(0,200,83,0.1)', color: 'var(--color-green)',
                  padding: '2px 10px', borderRadius: '100px',
                  fontSize: '11px', fontWeight: 700, border: '1px solid rgba(0,200,83,0.2)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  AFTER
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>DeToks 적용</span>
              </div>
              <div style={{
                background: 'var(--color-white)',
                border: '1.5px solid rgba(0,200,83,0.25)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 20px rgba(0,200,83,0.05)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-green)',
                  marginBottom: '12px',
                  opacity: 0.7,
                }}>
                  # 정리된 작업 흐름
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {afterTasks.map((task, i) => (
                    <div
                      key={task}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 12px',
                        background: i === 0 ? 'rgba(0,200,83,0.07)' : 'var(--color-bg)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: i === 0 ? 600 : 400,
                        color: i === 0 ? 'var(--color-dark)' : '#374151',
                        border: i === 0 ? '1px solid rgba(0,200,83,0.15)' : '1px solid transparent',
                      }}
                    >
                      <span style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: i === 0 ? 'var(--color-green)' : 'rgba(0,0,0,0.08)',
                        color: i === 0 ? '#000' : '#9ca3af',
                        fontSize: '10px', fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontFamily: 'var(--font-mono)',
                      }}>
                        {i + 1}
                      </span>
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .ba-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
