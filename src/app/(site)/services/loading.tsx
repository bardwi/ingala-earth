export default function LoadingServices() {
  return (
    <section aria-busy="true" aria-live="polite" style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* hero  */}
        <div
          style={{
            height: 220,
            borderRadius: 10,
            marginBottom: 18,
            background:
              'linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 1.2s ease-in-out infinite',
          }}
        />

        <div
          style={{
            height: 28,
            width: 220,
            borderRadius: 6,
            background: '#eee',
            marginBottom: 10,
          }}
        />
        <div
          style={{
            height: 16,
            width: '60%',
            borderRadius: 4,
            background: '#f0f0f0',
            marginBottom: 22,
          }}
        />

        {/* Card grid placeholders */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              style={{
                display: 'grid',
                gridTemplateRows: '160px auto',
                gap: 12,
                borderRadius: 12,
                border: '1px solid #eee',
                padding: 12,
                background: '#fff',
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  background:
                    'linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)',
                  backgroundSize: '400% 100%',
                  animation: 'shimmer 1.2s ease-in-out infinite',
                }}
              />
              <div>
                <div
                  style={{
                    height: 18,
                    width: '70%',
                    borderRadius: 6,
                    background: '#eee',
                    marginBottom: 8,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    width: '95%',
                    borderRadius: 4,
                    background: '#f0f0f0',
                    marginBottom: 6,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    width: '80%',
                    borderRadius: 4,
                    background: '#f0f0f0',
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    width: 96,
                    borderRadius: 999,
                    background: '#e9efe9',
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </section>
  );
}
