"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  /** Element the globe is centred on while the hero is in view. */
  anchorRef: React.RefObject<HTMLElement | null>;
  /** The hero section: its bottom edge splits light dots from dark dots. */
  sectionRef: React.RefObject<HTMLElement | null>;
};

type Particle = {
  x: number;
  y: number;
  z: number;
  phase: number;
  accent: boolean;
  size: number;
};

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const ease = (t: number) => t * t * (3 - 2 * t);

function buildParticles(count: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    particles.push({
      x: Math.cos(theta) * r,
      y,
      z: Math.sin(theta) * r,
      phase: Math.random() * Math.PI * 2,
      accent: i % 9 === 0,
      size: 0.8 + Math.random() * 1.3,
    });
  }

  // Link each dot to its nearest neighbours so the globe reads as a mesh.
  const edges = new Set<number>();
  const pairs: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    const near: [number, number][] = [];
    for (let j = 0; j < count; j++) {
      if (i === j) continue;
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dz = particles[i].z - particles[j].z;
      near.push([dx * dx + dy * dy + dz * dz, j]);
    }
    near.sort((a, b) => a[0] - b[0]);
    for (const [, j] of near.slice(0, 3)) {
      const key = Math.min(i, j) * count + Math.max(i, j);
      if (!edges.has(key)) {
        edges.add(key);
        pairs.push([Math.min(i, j), Math.max(i, j)]);
      }
    }
  }

  return { particles, pairs };
}

// A fake "voice": bursts of speech separated by short pauses.
function voiceLevel(t: number) {
  const syllables = 0.5 + 0.5 * Math.sin(t * 5.3) * Math.sin(t * 2.1 + 1.3);
  const phrase = clamp(0.5 + 0.9 * Math.sin(t * 0.7) * Math.sin(t * 0.31 + 2));
  return 0.12 + 0.88 * Math.pow(syllables, 1.4) * phrase;
}

export function HeroGlobe({ anchorRef, sectionRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let mouseX = 0;
    let mouseY = 0;
    // Direct manipulation: drag to spin, press to squeeze, hover to pull.
    let dragging = false;
    let pressed = false;
    let pointerInside = false;
    let pointerPx = 0;
    let pointerPy = 0;
    let spinY = 0;
    let spinX = 0;
    let velY = 0;
    let velX = 0;
    let squeeze = 0;
    let stretchX = 0;
    let stretchY = 0;
    let hover = 0;
    // Phone tilt: the globe rolls around inside the hero like a ball.
    let tiltGamma = 0;
    let tiltBeta = 0;
    let baseBeta: number | null = null;
    let baseGamma: number | null = null;
    let hasSensor = false;
    let offX = 0;
    let offY = 0;
    let rollVX = 0;
    let rollVY = 0;
    let frameDt = 0.016;
    let lastGlobe = { cx: 0, cy: 0, radius: 0, p: 0 };
    let tiltX = 0;
    let tiltY = 0;
    let smoothVoice = 0.2;
    let last = performance.now();
    let time = 0;
    let particleData = buildParticles(window.innerWidth < 768 ? 420 : 760);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const wanted = width < 768 ? 420 : 760;
      if (particleData.particles.length !== wanted) {
        particleData = buildParticles(wanted);
      }
    };

    const overGlobe = (x: number, y: number) => {
      const { cx, cy, radius, p } = lastGlobe;
      return width >= 1024 && p < 0.4 && Math.hypot(x - cx, y - cy) < radius * 1.25;
    };

    const onPointer = (e: PointerEvent) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;

      if (dragging) {
        const dx = e.clientX - pointerPx;
        const dy = e.clientY - pointerPy;
        velY = dx * 0.006;
        velX = dy * 0.006;
        spinY += velY;
        spinX = clamp(spinX + velX, -1.2, 1.2);
        // Dragging also stretches the globe along the pull.
        stretchX = clamp(stretchX + dx * 0.004, -0.35, 0.35);
        stretchY = clamp(stretchY + dy * 0.004, -0.35, 0.35);
      }
      pointerPx = e.clientX;
      pointerPy = e.clientY;
      pointerInside = overGlobe(e.clientX, e.clientY);
      anchorRef.current?.style.setProperty(
        "cursor",
        dragging ? "grabbing" : pointerInside ? "grab" : "",
      );
    };

    const onDown = (e: PointerEvent) => {
      if (!overGlobe(e.clientX, e.clientY)) return;
      dragging = true;
      pressed = true;
      pointerPx = e.clientX;
      pointerPy = e.clientY;
      if (e.pointerType === "mouse") e.preventDefault();
    };

    const onUp = () => {
      dragging = false;
      pressed = false;
      anchorRef.current?.style.setProperty("cursor", pointerInside ? "grab" : "");
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      frameDt = dt;
      if (!reduceMotion) time += dt;
      draw();
      if (running) raf = requestAnimationFrame(frame);
    };

    const draw = () => {
      const section = sectionRef.current;
      const anchor = anchorRef.current;
      if (!section || !anchor) return;

      const sectionRect = section.getBoundingClientRect();
      const scrolled = clamp(-sectionRect.top / (sectionRect.height * 0.8));
      const p = ease(scrolled);

      // The mesh lives inside the hero only: nothing draws on later sections.
      // Small screens: dim it so the headline stays readable.
      const compact = width < 1024;
      const globalAlpha = compact ? 0.45 : 1;
      ctx.clearRect(0, 0, width, height);
      if (sectionRect.bottom <= 0 || sectionRect.top >= height) return;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, sectionRect.top, width, sectionRect.height);
      ctx.clip();

      const a = anchor.getBoundingClientRect();
      const radius = Math.min(a.width, a.height) * 0.46;
      let cx = a.left + a.width / 2;
      let cy = a.top + a.height / 2;

      if (compact && hasSensor && !reduceMotion) {
        const maxTilt = 35;
        const gx = Math.sin((clamp(tiltGamma, -maxTilt, maxTilt) * Math.PI) / 180);
        const gy = Math.sin((clamp(tiltBeta, -maxTilt, maxTilt) * Math.PI) / 180);
        rollVX += gx * 1800 * frameDt;
        rollVY += gy * 1800 * frameDt;

        // Held still (no tilt away from where it settled): ease back home.
        const resting = 1 - clamp(Math.hypot(gx, gy) / 0.12);
        rollVX -= offX * 14 * resting * frameDt;
        rollVY -= offY * 14 * resting * frameDt;
        const drag = Math.exp(-(0.9 + 3.5 * resting) * frameDt);
        rollVX *= drag;
        rollVY *= drag;
        offX += rollVX * frameDt;
        offY += rollVY * frameDt;

        // Walls: the visible part of the hero is the "vacuum".
        const r = radius * 1.1;
        const minX = r;
        const maxX = Math.max(minX, width - r);
        const minY = Math.max(sectionRect.top, 0) + r;
        const maxY = Math.max(minY, Math.min(sectionRect.bottom, height) - r);
        let nx = cx + offX;
        let ny = cy + offY;
        if (nx < minX || nx > maxX) {
          nx = clamp(nx, minX, maxX);
          rollVX *= -0.55;
        }
        if (ny < minY || ny > maxY) {
          ny = clamp(ny, minY, maxY);
          rollVY *= -0.55;
        }
        offX = nx - cx;
        offY = ny - cy;
        cx = nx;
        cy = ny;

        // Rolling also turns the ball.
        spinY += (rollVX * frameDt) / r;
        spinX = clamp(spinX + (rollVY * frameDt) / r, -1.2, 1.2);
      }
      lastGlobe = { cx, cy, radius, p };

      // Simulated listening: the level rises and falls like speech.
      const target = reduceMotion ? 0.35 : Math.max(voiceLevel(time), squeeze * 0.9);
      smoothVoice += (target - smoothVoice) * 0.12;
      const voice = smoothVoice;

      tiltX += (mouseY * 0.25 - tiltX) * 0.05;
      tiltY += (mouseX * 0.35 - tiltY) * 0.05;

      // Spin keeps its momentum after release, then eases back to level.
      if (!dragging) {
        spinY += velY;
        velY *= 0.95;
        velX *= 0.9;
        spinX *= 0.97;
      }
      // Squeeze, stretch and hover pull all spring back to rest.
      squeeze += ((pressed ? 1 : 0) - squeeze) * 0.12;
      stretchX *= 0.9;
      stretchY *= 0.9;
      hover += ((pointerInside && !reduceMotion ? 1 : 0) - hover) * 0.1;
      const squash = 1 - squeeze * 0.22;
      const sxScale = squash * (1 + stretchX);
      const syScale = squash * (1 + stretchY);
      const interact = 1 - clamp(p / 0.5);

      const rotY = time * 0.18 + tiltY + spinY;
      const rotX = tiltX - 0.2 + spinX;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const { particles, pairs } = particleData;
      const n = particles.length;
      const px = new Float32Array(n);
      const py = new Float32Array(n);
      const depth = new Float32Array(n);

      for (let i = 0; i < n; i++) {
        const s = particles[i];

        // Surface distortion: travelling ripples scaled by the voice level.
        const ripple =
          Math.sin(s.y * 6 - time * 3 + s.phase * 0.2) * 0.5 +
          Math.sin(s.x * 4 + s.z * 3 + time * 1.9) * 0.5;
        const disp = 1 + voice * 0.16 * ripple + voice * 0.03 * Math.sin(time * 9 + s.phase);

        let x = s.x * disp;
        let y = s.y * disp;
        let z = s.z * disp;

        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        x = x1;
        y = y1;
        z = z2;

        const persp = 1 / (1.8 - z * 0.5);
        let gx = cx + x * radius * persp * 1.8 * sxScale;
        let gy = cy + y * radius * persp * 1.8 * syScale;

        // Dots near the cursor are pulled toward it, stretching the mesh.
        if (hover > 0.01 && interact > 0) {
          const ddx = pointerPx - gx;
          const ddy = pointerPy - gy;
          const dist = Math.hypot(ddx, ddy);
          const reach = radius * 0.8;
          if (dist < reach) {
            const pull = Math.pow(1 - dist / reach, 2) * 0.45 * hover * interact;
            gx += ddx * pull;
            gy += ddy * pull;
          }
        }

        // The same dots spread across the page and drift as a background.
        const drift = time * 0.25 + s.phase;
        const sx = width * 0.5 + s.x * width * 0.62 + Math.sin(drift) * 14;
        const sy =
          sectionRect.top +
          sectionRect.height * 0.5 +
          (s.y * 0.9 + s.z * 0.25) * sectionRect.height * 0.55 +
          Math.cos(drift * 0.8) * 14;

        px[i] = gx + (sx - gx) * p;
        py[i] = gy + (sy - gy) * p;
        depth[i] = z; // -1 (back) .. 1 (front)
      }

      const isLight = () => true;

      // Mesh lines.
      const maxLen = 120 + 140 * p;
      const lineFade = 1 - p * 0.45;
      for (const front of [false, true]) {
        for (const light of [true, false]) {
          ctx.beginPath();
          for (let k = 0; k < pairs.length; k++) {
            const [i, j] = pairs[k];
            if ((depth[i] + depth[j] > 0) !== front) continue;
            if (isLight() !== light) continue;
            const dx = px[i] - px[j];
            const dy = py[i] - py[j];
            if (dx * dx + dy * dy > maxLen * maxLen) continue;
            ctx.moveTo(px[i], py[i]);
            ctx.lineTo(px[j], py[j]);
          }
          const base = front ? 0.22 : 0.09;
          ctx.strokeStyle = light
            ? `rgba(159,141,225,${base * lineFade * globalAlpha})`
            : `rgba(56,22,169,${base * 0.9 * lineFade * globalAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Dots.
      for (let i = 0; i < n; i++) {
        const s = particles[i];
        const light = isLight();
        const front = (depth[i] + 1) / 2;
        const pulse = s.accent ? 1 + voice * 0.9 * (0.5 + 0.5 * Math.sin(time * 4 + s.phase)) : 1;
        const size = s.size * (0.7 + front * 0.8) * pulse * (1 + p * 0.2);
        const alpha = (0.35 + front * 0.65) * globalAlpha * (1 - p * 0.35);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.accent ? "#4DBEAB" : light ? "#D1C4F3" : "#3816A9";
        ctx.beginPath();
        ctx.arc(px[i], py[i], size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Soft halo that breathes with the voice, only while it is a globe.
      if (p < 0.6) {
        const haloR = radius * (1.25 + voice * 0.18);
        const g = ctx.createRadialGradient(cx, cy, radius * 0.4, cx, cy, haloR);
        g.addColorStop(0, `rgba(77,190,171,${0.0})`);
        g.addColorStop(0.7, `rgba(77,190,171,${0.07 * voice * (1 - p / 0.6)})`);
        g.addColorStop(1, "rgba(77,190,171,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, haloR, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      // No loop: redraw only when the page moves.
      const redraw = () => draw();
      redraw();
      window.addEventListener("scroll", redraw, { passive: true });
      window.addEventListener("resize", redraw);
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", redraw);
        window.removeEventListener("resize", redraw);
      };
    }

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      // Calibrate to however the person happens to hold the phone.
      if (baseBeta === null || baseGamma === null) {
        baseBeta = e.beta;
        baseGamma = e.gamma;
      }
      // The neutral angle slowly follows the phone, so a steady hold counts
      // as "not tilting" and the globe returns to its home position.
      baseBeta += (e.beta - baseBeta) * 0.012;
      baseGamma += (e.gamma - baseGamma) * 0.012;
      hasSensor = true;
      tiltGamma = e.gamma - baseGamma;
      tiltBeta = e.beta - baseBeta;
    };

    // iOS only hands out sensor access after a tap; Android needs nothing.
    const sensorPermission = (
      DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<"granted" | "denied">;
      }
    ).requestPermission;
    const enableSensor = () => {
      if (!sensorPermission) return;
      window.removeEventListener("touchend", enableSensor);
      sensorPermission()
        .then((state) => {
          if (state === "granted") {
            window.addEventListener("deviceorientation", onOrientation);
          }
        })
        .catch(() => {});
    };
    if (window.innerWidth < 1024 && "DeviceOrientationEvent" in window) {
      if (sensorPermission) {
        window.addEventListener("touchend", enableSensor, { once: true });
      } else {
        window.addEventListener("deviceorientation", onOrientation);
      }
    }

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    start();

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("deviceorientation", onOrientation);
      window.removeEventListener("touchend", enableSensor);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [anchorRef, sectionRef, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-screen w-screen"
    />
  );
}
