import { ImageResponse } from 'next/og';
import { headerData } from '@/data/header-data';

export const alt = 'Abu Said - Project Archive';
export const size = { width: 1200, height: 630 };
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
          backgroundColor: '#0c0f1d',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '450px',
            height: '450px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(29, 155, 240, 0.3) 0%, rgba(29, 155, 240, 0) 70%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: '#1D9BF0',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '24px',
            }}
          >
            AS
          </div>
          <span style={{ fontSize: '28px', fontWeight: 700, color: '#eff3f4' }}>
            {headerData.name} / Projects
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
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
            Engineering Portfolio & Project Showcase
          </h1>
          <p style={{ fontSize: '26px', color: '#8b98a5', lineHeight: 1.4, margin: 0 }}>
            Web applications, distributed architectures, mobile clients, and developer tooling.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid #1f2d3d',
            paddingTop: '32px',
          }}
        >
          <span style={{ fontSize: '22px', color: '#1D9BF0', fontWeight: 600 }}>
            Production-Ready Architecture
          </span>
          <span style={{ fontSize: '20px', color: '#8b98a5' }}>abusaid.dev/project</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
