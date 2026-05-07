export default function QuickStart() {
  return (
    <section className="section" id="quickstart" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-label">Quick Start</div>
        <h2 className="section-title">5분이면 바로 써볼 수 있어요</h2>
        <p className="section-desc" style={{ marginBottom: '40px' }}>
          Node.js 18 이상이 설치되어 있다면 지금 바로 시작할 수 있습니다.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Step 1 */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  background: 'var(--color-green)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                1
              </span>
              <span style={{ fontWeight: 600, fontSize: '15px' }}>설치</span>
            </div>
            <div className="code-block">
              <div className="code-block-header">
                <div className="code-block-dots">
                  <span /><span /><span />
                </div>
                <span className="code-block-title">Terminal</span>
              </div>
              <pre>
                <code>
                  <span className="prompt">$</span>{' '}
                  <span>npm install -g detoks</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  background: 'var(--color-green)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                2
              </span>
              <span style={{ fontWeight: 600, fontSize: '15px' }}>실행</span>
            </div>
            <div className="code-block">
              <div className="code-block-header">
                <div className="code-block-dots">
                  <span /><span /><span />
                </div>
                <span className="code-block-title">Terminal</span>
              </div>
              <pre>
                <code>
                  <span className="prompt">$</span>{' '}
                  <span>detoks run </span>
                  <span className="dim">"[여기에 작업 요청]"</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  background: 'var(--color-green)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                3
              </span>
              <span style={{ fontWeight: 600, fontSize: '15px' }}>예시 프롬프트</span>
            </div>
            <div className="code-block">
              <div className="code-block-header">
                <div className="code-block-dots">
                  <span /><span /><span />
                </div>
                <span className="code-block-title">예시</span>
              </div>
              <pre>
                <code>
                  <span className="prompt">$</span>{' '}
                  <span>detoks run </span>
                  <span className="dim">"로그인 코드 분석하고 중복 검증 버그 고치고 테스트 돌려줘"</span>
                  {'\n\n'}
                  <span className="comment">
                    {'# '}DeToks가 정리한 작업 흐름:{'\n'}
                    {'# '}1. 인증 관련 코드 탐색{'\n'}
                    {'# '}2. 로그인 흐름 분석{'\n'}
                    {'# '}3. 중복 검증 로직 수정{'\n'}
                    {'# '}4. 테스트 실행{'\n'}
                    {'# '}5. 결과 요약{'\n\n'}
                  </span>
                  <span className="highlight">✓</span>{' '}
                  <span>AI 에이전트에 전달 완료</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '32px',
            padding: '16px 20px',
            background: 'var(--color-bg)',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            fontSize: '14px',
            color: 'var(--color-text-muted)',
          }}
        >
          <strong style={{ color: 'var(--color-dark)' }}>Node.js 요구사항:</strong> v18 이상 ·{' '}
          <a
            href="https://github.com/detoks/detoks#configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            에이전트 설정 방법 →
          </a>
        </div>
      </div>
    </section>
  )
}
