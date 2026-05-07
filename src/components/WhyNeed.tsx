import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    icon: '📝',
    title: '요청이 길고 복잡해질 때',
    desc: '한 번에 여러 작업을 요청하면 에이전트가 일부를 빠뜨리거나 순서를 잘못 이해합니다.',
  },
  {
    icon: '🔄',
    title: 'AI가 순서를 놓칠 때',
    desc: '"A 하고 나서 B"처럼 의존 관계가 있는 작업에서 에이전트가 순서를 무시하고 실행합니다.',
  },
  {
    icon: '💸',
    title: '토큰과 시간을 낭비할 때',
    desc: '같은 컨텍스트를 반복 설명하느라 토큰을 낭비하고 있다면 DeToks가 한 번에 정리해줍니다.',
  },
]

function BentoCard({
  icon, title, desc, delay,
}: {
  icon: string
  title: string
  desc: string
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}
      style={{
        background: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        borderRadius: '14px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        cursor: 'default',
        transition: 'border-color 0.2s',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          background: 'var(--color-bg)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          border: '1px solid var(--color-border)',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-dark)', marginBottom: '8px', lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
          {desc}
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyNeed() {
  return (
    <section className="section" id="whyneed" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-label">왜 필요한가요?</div>
        <h2 className="section-title">이런 상황, 한 번쯤 겪어보셨죠?</h2>
        <p className="section-desc" style={{ marginBottom: '36px' }}>
          AI 코딩 도구를 자주 쓰다 보면 마주치는 문제들입니다. DeToks가 해결해줍니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
          className="why-grid"
        >
          {cards.map((c, i) => (
            <BentoCard key={c.title} {...c} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
