"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ScrollMoon() {
  const pathname = usePathname();
  const layerRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const moon = moonRef.current;
    const stage =
      document.querySelector<HTMLElement>("[data-moon-stage]") ??
      document.querySelector<HTMLElement>("[data-moon-footer]");
    const foreground = document.querySelector<HTMLElement>("[data-moon-foreground]");

    if (!layer || !moon || !stage || !foreground) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const stageRect = stage.getBoundingClientRect();
      const foregroundRect = foreground.getBoundingClientRect();
      const visibleTop = Math.max(0, stageRect.top);
      const landscapeFloor =
        foregroundRect.top + foregroundRect.height * 0.45;
      const visibleBottom = Math.min(viewportHeight, landscapeFloor) - 12;
      const moonRect = moon.getBoundingClientRect();
      const minimumReveal = moonRect.height * 0.18;
      const active =
        visibleBottom > visibleTop &&
        visibleBottom > moonRect.top + minimumReveal &&
        visibleTop < moonRect.bottom - 4;

      const sunsetProgress = Math.min(
        1,
        Math.max(0, (viewportHeight - foregroundRect.top) / viewportHeight),
      );

      layer.style.opacity = active ? "1" : "0";
      layer.style.clipPath = `inset(${visibleTop}px 0 ${Math.max(0, viewportHeight - visibleBottom)}px 0)`;
      moon.style.transform = `translate3d(-50%, ${sunsetProgress * 10}vh, 0) scale(${1 - sunsetProgress * 0.08})`;
      moon.style.filter = `saturate(${1 + sunsetProgress * 0.2}) brightness(${1 - sunsetProgress * 0.08})`;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden opacity-0 motion-reduce:hidden"
    >
      <div
        ref={moonRef}
        className="absolute left-1/2 top-[42vh] size-36 will-change-transform sm:size-48 lg:size-64"
      >
        <Image
          src="/scroll-moon.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 256px, (min-width: 640px) 192px, 144px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
