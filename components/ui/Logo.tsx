import Image from "next/image";
import { cn } from "@/lib/utils";

const sources = {
  color: { mark: "/logo-mark.png", full: "/logo.png" },
  white: { mark: "/logo-mark-white.png", full: "/logo-white.png" },
};

const dimensions = {
  mark: { width: 406, height: 127 },
  full: { width: 406, height: 163 },
};

export function Logo({
  className,
  variant = "color",
  type = "mark",
}: {
  className?: string;
  variant?: "color" | "white";
  type?: "mark" | "full";
}) {
  const { width, height } = dimensions[type];

  return (
    <Image
      src={sources[variant][type]}
      alt="MEbi Technologies"
      width={width}
      height={height}
      priority
      className={cn("h-8 w-auto", className)}
    />
  );
}
