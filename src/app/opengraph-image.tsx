import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unfold Trails — Walk, Ride, Explore.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0a0a1a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "2px solid rgba(139,92,246,0.5)",
            marginBottom: 32,
          }}
        >
          <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
            <path d="M35 65 L50 35 L65 65 Z" fill="none" stroke="#b8a5e8" strokeWidth="3" strokeLinejoin="round" />
            <path d="M42 65 L50 50 L58 65" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="50" cy="33" r="3" fill="#b8a5e8" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          Unfold Trails
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#c4b5d8",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            marginBottom: 32,
          }}
        >
          Walk, Ride, Explore.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              border: "1px solid rgba(139,92,246,0.4)",
              background: "rgba(139,92,246,0.15)",
              color: "#c4b5fd",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Adventure
          </div>
          <div style={{ color: "#6b7280", fontSize: 18 }}>|</div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              border: "1px solid rgba(245,197,66,0.3)",
              background: "rgba(245,197,66,0.1)",
              color: "#f5c542",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Journey
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
