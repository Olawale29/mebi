import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#150A33",
          backgroundImage: "linear-gradient(135deg, #150A33 0%, #3816A9 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#4DBEAB" }}>
          MEbi.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {company.positioning}
        </div>
      </div>
    ),
    { ...size }
  );
}
