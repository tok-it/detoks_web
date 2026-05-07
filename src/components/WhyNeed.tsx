import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cards: { icon: string; title: string; desc: string; span: 'single' | 'double' }[] = [
  {
    icon: '📝',
    title: '요청이 길고 복잡해질 때',
    desc: '한 번에 여러 작업을 요청하면 에이전트가 일부를 빠뜨리거나 순서를 잘못 이해합니다.',
    span: 'double',
  },
  {
    icon: '🔄',
    title: '순서를 놓칠 때',
    desc: '"A 하고 나서 B"처럼 의존 관계가 있는 작업에서 에이전트가 순서를 무시하고 실행합니다.',
    span: 'single',
  },
  {
    icon: '💸',
    title: '토큰 낭비',
    desc: '같은 컨텍스트를 반복 설명하느라 토큰을 낭비하고 있다면 DeToks가 정리해줍니다.',
    span: 'single',
  },
  {
    icon: '🔍',
    title: '결과를 확인하기 어려울 때',
    desc: '에이전트가 어떤 작업을 했는지 흐름을 파악하기 어렵다면 DeToks로 시각화할 수 있습니다.',
    span: 'double',
  },
]

function BentoCard({
  icon, title, desc, span, delay,
}: {
  icon: string
  title: string
  desc: string
  span: 'single' | 'double'
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
      style={{
        gridColumn: span === 'double' ? 'span 2' : 'span 1',
        background: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        borderRadius: '14px',
        padding: '28px',
        display: 'flex',
        flexDirection: span === 'double' ? 'row' : 'column',
        gap: span === 'double' ? '20px' : '14px',
        alignItems: span === 'double' ? 'flex-start' : 'flex-start',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
    >
      <div
        style={{
          width: span === 'double' ? '52px' : '44px',
          height: span === 'double' ? '52px' : '44px',
          background: 'var(--color-bg)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: span === 'double' ? '26px' : '22px',
          flexShrink: 0,
          border: '1px solid var(--color-border)',
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-dark)', marginBottom: '6px' }}>
          {title}
        </div>
        <div style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
          {desc}
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyNeed() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-label">왜 필요한가요?</div>
        <h2 className="section-title">이런 상황, 한 번쯤 겪어보셨죠?</h2>
        <p className="section-desc" style={{ marginBottom: '36px' }}>
          AI 코딩 도구를 자주 쓰다 보면 마주치는 문제들입니다. DeToks가 해결해줍니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
          }}
          className="bento-grid"
        >
          {cards.map((c, i) => (
            <BentoCard key={c.title} {...c} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .bento-grid > * {
            grid-column: span 1 !important;
            flex-direction: column !important;
          }
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
