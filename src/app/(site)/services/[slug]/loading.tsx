export default function Loading() {
  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div
          aria-hidden
          style={{
            height: 220,
            borderRadius: 12,
            background: '#f3efe6',
            border: '1px solid #efe7d9',
            marginBottom: 24,
          }}
        />
        <div
          aria-hidden
          style={{
            height: 16,
            width: 180,
            borderRadius: 6,
            background: '#e9e3d6',
            marginBottom: 12,
          }}
        />
        <div
          aria-hidden
          style={{
            height: 14,
            borderRadius: 6,
            background: '#eee8dc',
          }}
        />
      </div>
    </div>
  );
}
