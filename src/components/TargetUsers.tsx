import FadeIn from './FadeIn'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const targets = [
  {
    icon: '🤖',
    title: 'AI 코딩 도구를 자주 쓰는 개발자',
    desc: 'Codex, Claude Code, Cursor 등 AI 도구를 매일 쓰는 개발자라면 DeToks로 작업 품질을 높일 수 있습니다.',
  },
  {
    icon: '📝',
    title: '긴 프롬프트를 자주 쓰는 개발자',
    desc: '요청이 길어질수록 DeToks의 효과가 더 커집니다. 한 번에 많은 걸 맡기는 스타일이라면 필수입니다.',
  },
  {
    icon: '🗂️',
    title: '작업 흐름을 명확하게 보고 싶은 개발자',
    desc: 'AI가 어떤 순서로 일을 처리하는지 눈으로 확인하고 싶은 분에게 적합합니다.',
  },
]

function TargetCard({ icon, title, desc, delay }: typeof targets[0] & { delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="card"
      style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}
      whileHover={{ y: -2, boxShadow: '0 6px 24px rgba(0,0,0,0.07)' }}
    >
      <div style={{
        width: '48px', height: '48px',
        background: 'var(--color-bg)',
        borderRadius: '10px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '24px', flexShrink: 0,
        border: '1px solid var(--color-border)',
      }}>
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

export default function TargetUsers() {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <FadeIn>
          <div className="section-label">누구를 위한 도구인가요?</div>
          <h2 className="section-title">이런 개발자에게 적합합니다</h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
          {targets.map((t, i) => (
            <TargetCard key={t.title} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
