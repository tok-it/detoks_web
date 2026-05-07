export default function UsageExample() {
  return (
    <section className="section" id="example" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-label">사용 예시</div>
        <h2 className="section-title">Before / After</h2>
        <p className="section-desc" style={{ marginBottom: '40px' }}>
          같은 요청이라도 DeToks를 거치면 에이전트가 훨씬 명확하게 이해하고 실행합니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
          className="before-after-grid"
        >
          {/* Before */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  background: 'rgba(239,68,68,0.1)',
                  color: '#ef4444',
                  padding: '2px 10px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                Before
              </span>
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                DeToks 없이
              </span>
            </div>
            <div
              style={{
                background: 'var(--color-white)',
                border: '1.5px solid rgba(239,68,68,0.2)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  lineHeight: 1.7,
                  color: '#374151',
                  background: '#fef2f2',
                  borderRadius: '8px',
                  padding: '16px',
                }}
              >
                "로그인 코드 찾아보고 흐름 분석하고 중복 검증 버그 고치고 테스트까지 돌려줘."
              </div>
              <div style={{ marginTop: '16px', fontSize: '13px', color: '#ef4444', lineHeight: 1.65 }}>
                ❌ 에이전트가 순서 없이 실행<br />
                ❌ 어떤 버그인지 불명확<br />
                ❌ 테스트 결과 보고 누락 가능
              </div>
            </div>
          </div>

          {/* After */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  background: 'rgba(0,200,83,0.1)',
                  color: 'var(--color-green)',
                  padding: '2px 10px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: '1px solid rgba(0,200,83,0.2)',
                }}
              >
                After
              </span>
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                DeToks 적용 후
              </span>
            </div>
            <div
              style={{
                background: 'var(--color-white)',
                border: '1.5px solid rgba(0,200,83,0.3)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <ol
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {[
                  '인증 관련 코드 찾기',
                  '로그인 흐름 분석',
                  '중복 검증 로직 수정',
                  '테스트 실행',
                  '결과 요약',
                ].map((task, i) => (
                  <li
                    key={task}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      background: i === 0 ? 'rgba(0,200,83,0.06)' : 'var(--color-bg)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--color-dark)',
                    }}
                  >
                    <span
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'var(--color-green)',
                        color: '#000',
                        fontSize: '11px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {task}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .before-after-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
