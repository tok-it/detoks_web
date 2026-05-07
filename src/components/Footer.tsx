export default function Footer() {
  return (
    <footer
      style={{
        background: '#1a2329',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}>
        DeToks · MIT License ·{' '}
        <a
          href="https://github.com/detoks/detoks"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          GitHub
        </a>
      </p>
    </footer>
  )
}
