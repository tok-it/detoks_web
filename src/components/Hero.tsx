import { motion } from 'framer-motion'

const beforeTasks = [
  '"로그인 코드 찾아보고, 흐름 분석하고,',
  ' 중복 검증 버그 고치고, 테스트 돌리고,',
  ' 문서도 정리해줘."',
]

const afterTasks = [
  { n: 1, text: '인증 관련 코드 찾기' },
  { n: 2, text: '로그인 흐름 분석하기' },
  { n: 3, text: '중복 검증 로직 수정하기' },
  { n: 4, text: '테스트 실행하기' },
  { n: 5, text: '변경 내용 요약하기' },
]

export default function Hero() {
  return (
    <section
      style={{
        background: 'var(--color-dark)',
        color: 'var(--color-white)',
        padding: '88px 0 80px',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}
        >
          <div className="badge">
            <span style={{ color: 'var(--color-green)' }}>●</span> CLI Tool · Open Source · MIT
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-1.5px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          AI 코딩 에이전트에게
          <br />
          <span style={{ color: 'var(--color-green)' }}>더 명확하게 일 시키는 방법</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            maxWidth: '480px',
            margin: '0 auto 44px',
            lineHeight: 1.75,
          }}
        >
          DeToks는 긴 개발 요청을 명확한 작업 흐름으로 정리해서{' '}
          <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
            AI 코딩 에이전트가 더 안정적으로 실행
          </strong>
          하도록 도와주는 CLI 도구입니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}
        >
          <a href="#quickstart" className="btn btn-primary">시작하기 →</a>
          <a
            href="https://github.com/detoks/detoks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
          >
            <GitHubIcon /> GitHub에서 보기
          </a>
        </motion.div>

        {/* Before / After Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            maxWidth: '700px',
            margin: '0 auto',
          }}
          className="hero-mockup-grid"
        >
          {/* Before Panel */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {/* Panel header */}
            <div
              style={{
                padding: '10px 14px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239,68,68,0.08)',
              }}
            >
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#ef4444', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>BEFORE</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>DeToks 없이</span>
            </div>
            {/* Content */}
            <div style={{ padding: '20px 16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                  background: 'rgba(239,68,68,0.05)',
                  borderRadius: '8px',
                  padding: '14px',
                  border: '1px solid rgba(239,68,68,0.12)',
                }}
              >
                {beforeTasks.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['순서가 불명확', '맥락이 뒤섞임', '누락 가능성'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(239,68,68,0.7)' }}>
                    <span style={{ fontSize: '10px' }}>✕</span> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After Panel */}
          <div
            style={{
              background: 'rgba(0,200,83,0.04)',
              border: '1px solid rgba(0,200,83,0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 0 32px rgba(0,200,83,0.07)',
            }}
          >
            {/* Panel header */}
            <div
              style={{
                padding: '10px 14px',
                borderBottom: '1px solid rgba(0,200,83,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0,200,83,0.08)',
              }}
            >
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-green)', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>AFTER</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>DeToks 적용</span>
            </div>
            {/* Content */}
            <div style={{ padding: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'rgba(0,200,83,0.6)',
                  marginBottom: '10px',
                  letterSpacing: '0.5px',
                }}
              >
                # 정리된 작업 흐름
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {afterTasks.map((task, i) => (
                  <motion.div
                    key={task.n}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      background: i === 0 ? 'rgba(0,200,83,0.1)' : 'rgba(255,255,255,0.03)',
                      borderRadius: '6px',
                      border: i === 0 ? '1px solid rgba(0,200,83,0.2)' : '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: i === 0 ? 'var(--color-green)' : 'rgba(255,255,255,0.1)',
                        color: i === 0 ? '#000' : 'rgba(255,255,255,0.4)',
                        fontSize: '10px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {task.n}
                    </span>
                    <span style={{ fontSize: '12px', color: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)', fontWeight: i === 0 ? 500 : 400 }}>
                      {task.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.2)', marginTop: '20px', fontFamily: 'var(--font-mono)' }}
        >
          같은 요청, 더 명확한 실행
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hero-mockup-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
