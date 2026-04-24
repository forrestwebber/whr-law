export const dynamic = 'force-dynamic';
import { ImageResponse } from "next/og";

export const alt = "WHR Law | William H. Russell — Custom site built by Slacked.co";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#112822",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #112822 0%, #1a3c34 50%, #112822 100%)",
            display: "flex",
          }}
        />

        {/* Subtle accent circle */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 500,
            height: 500,
            background: "rgba(139, 111, 71, 0.06)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Slacked.co top banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "18px 60px",
            background: "linear-gradient(90deg, #1a1530 0%, #2d1f6e 50%, #1a1530 100%)",
            borderBottom: "1px solid rgba(124,109,255,0.4)",
            position: "relative",
            zIndex: 10,
          }}
        >
          <span style={{ color: "white", fontWeight: 600, fontSize: 14 }}>
            slacked.co
          </span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>|</span>
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
            This site was built for you. Ready to own it?
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "48px 60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Nav row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 48,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#FAF8F5", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
                WHR Law
              </span>
              <span style={{ color: "rgba(250,248,245,0.5)", fontSize: 18 }}>|</span>
              <span style={{ color: "rgba(250,248,245,0.6)", fontSize: 18 }}>
                William H. Russell
              </span>
            </div>
            <div
              style={{
                background: "#8b6f47",
                color: "#FAF8F5",
                padding: "10px 24px",
                borderRadius: 6,
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Free Consultation
            </div>
          </div>

          {/* Label */}
          <div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
            <span
              style={{
                color: "#a68960",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Georgetown &amp; Austin Family Law
            </span>
            <div style={{ height: 1, width: 240, background: "rgba(139,111,71,0.4)", marginTop: 8, display: "flex" }} />
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#FAF8F5",
              lineHeight: 1.1,
              marginBottom: 24,
              display: "flex",
              flexWrap: "wrap",
              gap: "0 12px",
            }}
          >
            <span>Central Texas Law,</span>
            <span style={{ color: "#a68960" }}>Handled Personally.</span>
          </div>

          {/* Subtext */}
          <div style={{ color: "rgba(250,248,245,0.7)", fontSize: 19, marginBottom: 36, lineHeight: 1.5, display: "flex" }}>
            37+ years. Probate · Estate Planning · Family Law · Criminal Defense
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                background: "#8b6f47",
                color: "#FAF8F5",
                padding: "14px 32px",
                borderRadius: 6,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Free Consultation
            </div>
            <div
              style={{
                border: "2px solid #a68960",
                color: "#a68960",
                padding: "14px 32px",
                borderRadius: 6,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              512-219-4053
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
