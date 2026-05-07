const targets = [
  {
    icon: '🤖',
    title: 'AI 코딩 도구를 자주 쓰는 개발자',
    desc: 'Codex, Claude Code, Cursor 등 AI 도구를 매일 쓰는 개발자라면 DeToks로 작업 품질을 높일 수 있습니다.',
  },
  {
    icon: '📝',
    title: '긴 프롬프트를 자주 쓰는 개발자',
    desc: '한 번에 많은 걸 맡기는 스타일이라면, 요청이 길어질수록 DeToks의 효과가 더 커집니다.',
  },
  {
    icon: '🗂️',
    title: '작업 흐름을 명확하게 보고 싶은 개발자',
    desc: 'AI가 어떤 순서로 일을 처리하는지 눈으로 확인하고 싶은 분에게 적합합니다.',
  },
]

export default function TargetUsers() {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-label">누구를 위한 도구인가요?</div>
        <h2 className="section-title">이런 개발자에게 적합합니다</h2>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}
        >
          {targets.map((t) => (
            <div
              key={t.title}
              className="card"
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'border-color 0.15s',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  flexShrink: 0,
                  width: '52px',
                  height: '52px',
                  background: 'var(--color-bg)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {t.icon}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '15px',
                    marginBottom: '6px',
                    color: 'var(--color-dark)',
                  }}
                >
                  {t.title}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                  {t.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
