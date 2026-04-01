import { ImageResponse } from 'next/og'

export const alt = 'William H. Russell | Austin & Georgetown Attorney'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a2316 0%, #14432a 40%, #0d2e1c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '5px', background: 'linear-gradient(90deg, #a0845c, #d4b896, #f5e6d0, #d4b896, #a0845c)', display: 'flex' }} />
        <div style={{ fontSize: 48, color: '#d4b896', display: 'flex', marginBottom: '20px', letterSpacing: '8px' }}>&#9878;</div>
        <div style={{ fontSize: 58, fontWeight: 800, color: '#ffffff', letterSpacing: '-1px', display: 'flex', marginBottom: '8px' }}>William H. Russell</div>
        <div style={{ fontSize: 30, color: '#d4b896', fontWeight: 600, display: 'flex', marginBottom: '36px' }}>Austin &amp; Georgetown Attorney</div>
        <div style={{ width: '140px', height: '2px', background: 'linear-gradient(90deg, transparent, #d4b896, transparent)', display: 'flex', marginBottom: '36px' }} />
        <div style={{ fontSize: 28, color: '#e2e8f0', fontWeight: 500, display: 'flex', marginBottom: '16px' }}>37+ Years of Trusted Counsel</div>
        <div style={{ fontSize: 20, color: '#94a3b8', fontWeight: 400, display: 'flex' }}>Probate &bull; Family Law &bull; Estate Planning &bull; Criminal Defense</div>
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '5px', background: 'linear-gradient(90deg, #a0845c, #d4b896, #f5e6d0, #d4b896, #a0845c)', display: 'flex' }} />
      </div>
    ),
    {
      ...size,
    }
  )
}
