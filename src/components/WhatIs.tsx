export default function WhatIs() {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-label">DeToks란?</div>
        <h2 className="section-title">AI 에이전트 앞에서 일을 정리해주는 도구</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          Codex, Claude, Gemini 같은 AI 코딩 에이전트에게 복잡한 작업을 맡길 때,
          긴 요청을 한 번에 던지면 에이전트가 순서를 놓치거나 중요한 부분을 건너뛰는 경우가 생깁니다.
        </p>
        <p className="section-desc">
          DeToks는 여러분의 자연어 요청을{' '}
          <strong>명확하고 순서 있는 작업 흐름</strong>으로 변환한 뒤 AI 에이전트에 전달합니다.
          에이전트가 뭘 해야 할지 헷갈리지 않게, 처음부터 방향을 잡아주는 역할입니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '40px',
          }}
        >
          {[
            { icon: '🔧', label: 'CLI 도구', desc: '터미널에서 바로 사용' },
            { icon: '🌐', label: '에이전트 호환', desc: 'Codex, Claude, Gemini 지원' },
            { icon: '📋', label: '작업 분리', desc: '긴 요청을 단계별로 정리' },
          ].map((item) => (
            <div key={item.label} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '24px' }}>{item.icon}</div>
              <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--color-dark)' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
