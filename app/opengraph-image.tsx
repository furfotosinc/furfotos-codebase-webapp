import { ImageResponse } from "next/og";

export const alt = "FurFotos, pet portraits, coming soon";
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
          background: "#d7e4ea",
          color: "#1c140f",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#4e433b",
            }}
          >
            Pet portraits
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 108, lineHeight: 0.9 }}>
              FurFotos
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 12,
                fontSize: 64,
                fontStyle: "italic",
                color: "#8c3418",
              }}
            >
              Coming soon
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#3f342c" }}>
            Portraits for the animals who run the house.
          </div>
        </div>
        <div
          style={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            background: "#e3894a",
            padding: 18,
            gap: 12,
          }}
        >
          <div style={{ display: "flex", flex: 1, background: "#140e0b" }} />
          <div style={{ display: "flex", flex: 1, background: "#140e0b" }} />
          <div style={{ display: "flex", flex: 1, background: "#140e0b" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
