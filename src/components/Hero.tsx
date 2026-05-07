export default function Hero() {
  return (
    <section
      style={{
        background: 'var(--color-dark)',
        color: 'var(--color-white)',
        padding: '100px 0 80px',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="badge" style={{ marginBottom: '24px' }}>
          <span>●</span> CLI Tool · Open Source
        </div>

        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 46px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1px',
            marginBottom: '20px',
          }}
        >
          AI 코딩 에이전트에게
          <br />
          <span style={{ color: 'var(--color-green)' }}>더 명확하게 일 시키는 방법</span>
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}
        >
          DeToks는 긴 개발 요청을 정리해서{' '}
          <strong style={{ color: 'rgba(255,255,255,0.9)' }}>
            AI 코딩 에이전트가 더 안정적으로 이해하고 실행
          </strong>
          하도록 도와주는 CLI 도구입니다.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#quickstart" className="btn btn-primary">
            시작하기 →
          </a>
          <a
            href="https://github.com/detoks/detoks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
          >
            GitHub에서 보기
          </a>
        </div>

        <div
          style={{
            marginTop: '64px',
            background: 'var(--color-code-bg)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px 24px',
            textAlign: 'left',
            maxWidth: '580px',
            margin: '64px auto 0',
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
          }}
        >
          <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '10px', fontSize: '12px' }}>
            # 설치하고 바로 써보세요
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ color: 'var(--color-green)' }}>$</span>{' '}
            <span style={{ color: '#e8f5e9' }}>npm install -g detoks</span>
          </div>
          <div style={{ marginTop: '8px', color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ color: 'var(--color-green)' }}>$</span>{' '}
            <span style={{ color: '#e8f5e9' }}>detoks run</span>{' '}
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>"로그인 버그 분석하고 고쳐줘"</span>
          </div>
        </div>
      </div>
    </section>
  )
}
