// app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          position: 'relative',
          overflow: 'hidden',
          padding: 40,
        }}
      >
        {/* Background texture */}
        <div
          style={{
            position: 'absolute',
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%), repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 4px)',
            transform: 'rotate(25deg)',
          }}
        />

        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
           borderRadius: '50%',
              width: 60 + i * 20,
              height: 60 + i * 20,
              background: `rgba(255, 255, 255, ${0.02 + i * 0.02})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i} 15s ease-in-out infinite alternate`,
            }}
          />
        ))}

        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: 1.2, zIndex: 1 }}>
          Sruti Patro
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 12,
            fontWeight: 500,
            color: '#dbeafe',
            zIndex: 1,
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 22,
            opacity: 0.85,
            marginTop: 10,
            color: '#bfdbfe',
            fontWeight: 400,
            zIndex: 1,
          }}
        >
          MERN | Next.js | TypeScript | Cloud
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
