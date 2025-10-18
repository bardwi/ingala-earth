export default function LoadingProject() {
  return (
    <article aria-busy="true" aria-live="polite" style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <div
          style={{
            height: 280,
            borderRadius: 10,
            background:
              'linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 1.2s ease-in-out infinite',
            marginBottom: 18,
          }}
        />
        <div
          style={{
            height: 28,
            width: 360,
            borderRadius: 6,
            background: '#eee',
            marginBottom: 12,
          }}
        />
        <div
          style={{
            height: 16,
            borderRadius: 4,
            background: '#f0f0f0',
            marginBottom: 8,
            width: '90%',
          }}
        />
        <div
          style={{
            height: 16,
            borderRadius: 4,
            background: '#f0f0f0',
            marginBottom: 8,
            width: '75%',
          }}
        />
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 0 }
          100% { background-position: -100% 0 }
        }
      `}</style>
    </article>
  );
}
