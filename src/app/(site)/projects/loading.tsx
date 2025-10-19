export default function LoadingProjects() {
  return (
    <section aria-busy="true" aria-live="polite" style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div
          style={{
            height: 28,
            width: 220,
            borderRadius: 6,
            background: '#eee',
            marginBottom: 16,
          }}
        />
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              style={{
                borderRadius: 10,
                padding: 12,
                border: '1px solid #eee',
                background:
                  'linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)',
                backgroundSize: '400% 100%',
                animation: 'shimmer 1.2s ease-in-out infinite',
                height: 160,
              }}
            />
          ))}
        </ul>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 0 }
          100% { background-position: -100% 0 }
        }
      `}</style>
    </section>
  );
}
