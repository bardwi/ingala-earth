export default function LoadingService() {
  return (
    <main aria-busy="true" aria-live="polite" style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        {/* Hero/banner image*/}
        <div
          style={{
            height: 260,
            borderRadius: 10,
            marginBottom: 18,
            background:
              'linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 1.2s ease-in-out infinite',
          }}
        />

        {/* Title + intro */}
        <div
          style={{
            height: 30,
            width: '70%',
            borderRadius: 6,
            background: '#eee',
            marginBottom: 12,
          }}
        />
        <div
          style={{
            height: 16,
            width: '95%',
            borderRadius: 4,
            background: '#f0f0f0',
            marginBottom: 8,
          }}
        />
        <div
          style={{
            height: 16,
            width: '85%',
            borderRadius: 4,
            background: '#f0f0f0',
            marginBottom: 8,
          }}
        />
        <div
          style={{
            height: 16,
            width: '70%',
            borderRadius: 4,
            background: '#f0f0f0',
            marginBottom: 20,
          }}
        />

        {/* Bullets / sections */}
        <div
          style={{
            display: 'grid',
            gap: 12,
            gridTemplateColumns: '1fr',
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '44px 1fr',
                gap: 12,
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: '#f0f0f0',
                }}
              />
              <div>
                <div
                  style={{
                    height: 16,
                    width: '60%',
                    borderRadius: 4,
                    background: '#eee',
                    marginBottom: 6,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    width: '90%',
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
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </main>
  );
}
