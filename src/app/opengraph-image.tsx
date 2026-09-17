import { ImageResponse } from 'next/og';

export const alt = 'Kim Chanthorn (ThornieDev) — Full-Stack Developer Cambodia | Khmer Dev';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0d1224',
          padding: '72px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(22,242,179,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top: Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#16f2b3',
              letterSpacing: '-0.01em',
            }}
          >
            KIM CHANTHORN
          </span>
          <span
            style={{
              fontSize: '18px',
              color: '#9ca3af',
              fontWeight: 400,
            }}
          >
            · ThornieDev
          </span>
        </div>

        {/* Middle: Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Full-Stack Developer
            <br />
            <span style={{ color: '#ec4899' }}>Cambodia</span>
            {' — '}
            <span style={{ color: '#16f2b3' }}>Khmer Dev</span>
          </h1>
          <p style={{ fontSize: '22px', color: '#9ca3af', lineHeight: 1.5, margin: 0, maxWidth: '700px' }}>
            Building high-performance web apps and backend systems from Phnom Penh, Cambodia.
            TypeScript · Next.js · Java · Spring Boot · Docker
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Next.js', 'TypeScript', 'Spring Boot', 'Docker'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '18px',
                  color: '#16f2b3',
                  backgroundColor: 'rgba(22,242,179,0.08)',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(22,242,179,0.25)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontSize: '20px', color: '#6b7280' }}>chanthorndev.site</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
