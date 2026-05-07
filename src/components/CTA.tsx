export default function CTA() {
  return (
    <section
      style={{
        background: 'var(--color-dark)',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 800,
            color: 'var(--color-white)',
            letterSpacing: '-0.5px',
            marginBottom: '16px',
          }}
        >
          지금 바로 시작해보세요
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '40px',
            lineHeight: 1.7,
          }}
        >
          설치는 30초. AI 에이전트가 더 잘 이해하고 실행합니다.
        </p>

        <div
          style={{
            background: 'var(--color-code-bg)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            padding: '16px 24px',
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '16px',
            color: '#e8f5e9',
            marginBottom: '36px',
          }}
        >
          <span style={{ color: 'var(--color-green)' }}>$</span> npm install -g detoks
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#quickstart" className="btn btn-primary">
            Get Started
          </a>
          <a
            href="https://github.com/detoks/detoks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
