const reasons = [
  {
    icon: '📝',
    title: '요청이 길고 복잡해질 때',
    desc: '한 번에 여러 작업을 요청하면 에이전트가 일부를 빠뜨리거나 순서를 잘못 이해하는 경우가 많습니다.',
  },
  {
    icon: '🔄',
    title: 'AI가 작업 순서를 놓칠 때',
    desc: '"A 하고 나서 B 해줘"처럼 의존 관계가 있는 작업에서 에이전트가 순서를 무시하고 실행하는 문제가 있습니다.',
  },
  {
    icon: '💸',
    title: '반복 설명과 토큰 낭비를 줄이고 싶을 때',
    desc: '같은 컨텍스트를 매번 설명하고, 같은 지시를 여러 번 수정하느라 토큰을 낭비하고 있다면 DeToks가 도움이 됩니다.',
  },
]

export default function WhyNeed() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-label">왜 필요한가요?</div>
        <h2 className="section-title">이런 상황, 한 번쯤 겪어보셨죠?</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
          {reasons.map((r) => (
            <div
              key={r.title}
              className="card"
              style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
            >
              <div style={{ fontSize: '28px', flexShrink: 0, marginTop: '2px' }}>{r.icon}</div>
              <div>
                <div
                  style={{ fontWeight: 600, fontSize: '16px', marginBottom: '6px', color: 'var(--color-dark)' }}
                >
                  {r.title}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                  {r.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
