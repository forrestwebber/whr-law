"use client"

import { useState } from "react"

export default function StagingBanner({ clientName }: { clientName: string }) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: "linear-gradient(90deg, #0d1b2a 0%, #1a2a3f 100%)",
      borderTop: "1px solid rgba(197,160,89,0.3)",
      boxShadow: "0 -4px 30px rgba(0,0,0,0.5)",
      fontFamily: "Inter, system-ui, sans-serif",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>
        {/* Left: branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18 }}>⚡</span>
          <div>
            <p style={{ margin: 0, color: "#c5a059", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Preview — Built for {clientName} by Slacked.co
            </p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", marginTop: 2 }}>
              This is your custom site. No template. No drag-and-drop. Yours.
            </p>
          </div>
        </div>

        {/* Center: offer */}
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: 0, color: "#fff", fontSize: "1rem", fontWeight: 800, lineHeight: 1 }}>$699</p>
            <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.45)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>one-time</p>
          </div>
          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              "✓  Live in 5 business days",
              "✓  30 days of included revisions",
              "✓  $59/mo — unlimited edits + support after that",
            ].map((line) => (
              <p key={line} style={{ margin: 0, color: "rgba(255,255,255,0.65)", fontSize: "0.72rem" }}>{line}</p>
            ))}
          </div>
        </div>

        {/* Right: CTA + dismiss */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href="https://calendly.com/hello-forrestwebber/slacked-onboarding"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #c5a059, #d4b06a)",
              color: "#0d1b2a",
              padding: "10px 22px",
              borderRadius: 8,
              fontWeight: 800,
              fontSize: "0.82rem",
              textDecoration: "none",
              letterSpacing: "0.3px",
              whiteSpace: "nowrap",
            }}
          >
            Get This Site →
          </a>
          <button
            onClick={() => setDismissed(true)}
            title="Dismiss"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.3)",
              fontSize: "1.1rem",
              cursor: "pointer",
              padding: "4px 8px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
