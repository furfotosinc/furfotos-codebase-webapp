import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "FurFotos, a photo and video journal of your pet’s life, coming soon";
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
          background: "#000000",
          color: "#f6f1e8",
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
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d4cbc2",
            }}
          >
            Photo and video
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 84,
              fontStyle: "italic",
              color: "#e8a06a",
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
              color: "#f6f1e8",
            }}
          >
            A journal of your pet’s life.
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
