import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "FurFotos, pet portraits, coming soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/furfotos-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#d7e4ea",
          color: "#1c140f",
          padding: "56px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#3c332c",
            }}
          >
            Pet portraits
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 84,
              fontStyle: "italic",
              color: "#8c3418",
              lineHeight: 1,
            }}
          >
            Coming soon
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 28,
              color: "#3f342c",
            }}
          >
            Portraits for the animals who run the house.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            background: "#ffffff",
            borderRadius: 28,
          padding: 22,
        }}
      >
        <img src={logoSrc} width={400} height={333} alt="" />
        </div>
      </div>
    ),
    { ...size },
  );
}
