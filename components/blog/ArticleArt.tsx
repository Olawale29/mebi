// Cover illustrations for articles that do not have a photo or render yet.
// Drawn in the brand palette on a shared night-sky backdrop so they sit
// next to the generated covers. Keep the action inside the middle band
// (y 90 to 510) so the 16:9 crop on the article page does not cut it.

const LAV = "#D1C4F3";
const LAV_DEEP = "#9F8DE1";
const TEAL = "#4DBEAB";

function Backdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3816A9" />
          <stop offset="1" stopColor="#150A33" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.35" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-haze`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={LAV_DEEP} stopOpacity="0.4" />
          <stop offset="1" stopColor={LAV_DEEP} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      <circle cx="660" cy="120" r="260" fill={`url(#${id}-haze)`} />
      <g fill={LAV} opacity="0.55">
        {[
          [90, 90, 2],
          [180, 500, 1.5],
          [330, 70, 1.5],
          [720, 330, 2],
          [610, 520, 1.5],
          [60, 330, 1.5],
          [470, 540, 2],
          [760, 70, 1.5],
        ].map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>
    </>
  );
}

function Whatsapp() {
  const id = "wa";
  return (
    <>
      <Backdrop id={id} />
      {/* Flow of data from the chat into the dashboard. */}
      <g fill="none" stroke={TEAL} strokeWidth="2" strokeLinecap="round">
        <path d="M330 270 C 400 270, 400 220, 470 220" opacity="0.9" />
        <path d="M330 300 C 400 300, 400 300, 470 300" opacity="0.6" />
        <path d="M330 330 C 400 330, 400 380, 470 380" opacity="0.9" />
      </g>
      <g fill={TEAL}>
        <circle cx="400" cy="246" r="5" />
        <circle cx="400" cy="300" r="5" />
        <circle cx="400" cy="355" r="5" />
      </g>

      {/* Phone. */}
      <rect x="170" y="110" width="170" height="340" rx="30" fill="#1D1046" stroke={LAV} strokeOpacity="0.6" strokeWidth="3" />
      <rect x="236" y="124" width="38" height="7" rx="3.5" fill={LAV} opacity="0.4" />
      <rect x="192" y="160" width="100" height="36" rx="16" fill={LAV} opacity="0.9" />
      <rect x="220" y="206" width="100" height="36" rx="16" fill={TEAL} />
      <rect x="192" y="252" width="116" height="36" rx="16" fill={LAV} opacity="0.9" />
      <rect x="236" y="298" width="84" height="36" rx="16" fill={TEAL} />
      <rect x="192" y="344" width="80" height="36" rx="16" fill={LAV} opacity="0.9" />
      <rect x="190" y="400" width="130" height="30" rx="15" fill="none" stroke={LAV} strokeOpacity="0.5" strokeWidth="2" />

      {/* Dashboard card. */}
      <rect x="470" y="150" width="190" height="270" rx="22" fill="#FFFFFF" opacity="0.95" />
      <g fill="#3816A9" opacity="0.12">
        <rect x="492" y="176" width="60" height="10" rx="5" />
      </g>
      <rect x="492" y="200" width="146" height="10" rx="5" fill="#3816A9" opacity="0.18" />
      {[
        [496, 70],
        [530, 110],
        [564, 50],
        [598, 130],
      ].map(([x, h], i) => (
        <rect
          key={x}
          x={x}
          y={380 - h}
          width="24"
          height={h}
          rx="5"
          fill={i === 3 ? TEAL : "#3816A9"}
          opacity={i === 3 ? 1 : 0.2}
        />
      ))}
    </>
  );
}

function BoringStack() {
  const id = "bs";
  return (
    <>
      <Backdrop id={id} />
      <ellipse cx="400" cy="470" rx="230" ry="26" fill="#000" opacity="0.28" />
      {/* Base. */}
      <rect x="220" y="370" width="360" height="90" rx="18" fill={LAV_DEEP} />
      <rect x="220" y="370" width="360" height="28" rx="14" fill="#fff" opacity="0.12" />
      {/* Middle, with the glowing block that holds things together. */}
      <rect x="260" y="270" width="280" height="90" rx="18" fill={LAV} />
      <rect x="260" y="270" width="280" height="28" rx="14" fill="#fff" opacity="0.35" />
      <circle cx="400" cy="315" r="90" fill={`url(#${id}-glow)`} />
      <rect x="352" y="288" width="96" height="54" rx="14" fill={TEAL} />
      <rect x="352" y="288" width="96" height="16" rx="8" fill="#fff" opacity="0.3" />
      {/* Top. */}
      <rect x="310" y="180" width="180" height="82" rx="18" fill="#5B3FD0" />
      <rect x="310" y="180" width="180" height="26" rx="13" fill="#fff" opacity="0.15" />
      {/* Calm little satellites far away. */}
      <g fill={LAV} opacity="0.5">
        <rect x="110" y="190" width="26" height="26" rx="7" transform="rotate(18 123 203)" />
        <rect x="650" y="240" width="20" height="20" rx="6" transform="rotate(-14 660 250)" />
      </g>
    </>
  );
}

function SlowApp() {
  const id = "sa";
  return (
    <>
      <Backdrop id={id} />
      <defs>
        <linearGradient id={`${id}-streak`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={TEAL} stopOpacity="0" />
          <stop offset="0.6" stopColor={TEAL} stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Speed lines. */}
      <g stroke={LAV} strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round">
        <line x1="90" y1="200" x2="200" y2="200" />
        <line x1="60" y1="290" x2="170" y2="290" />
        <line x1="100" y1="380" x2="200" y2="380" />
      </g>
      {/* Phone with a skeleton screen. */}
      <rect x="260" y="100" width="190" height="380" rx="32" fill="#1D1046" stroke={LAV} strokeOpacity="0.6" strokeWidth="3" />
      <rect x="282" y="132" width="146" height="90" rx="14" fill={LAV} opacity="0.22" />
      <rect x="282" y="242" width="110" height="14" rx="7" fill={LAV} opacity="0.3" />
      <rect x="282" y="268" width="146" height="14" rx="7" fill={LAV} opacity="0.2" />
      <rect x="282" y="294" width="124" height="14" rx="7" fill={LAV} opacity="0.2" />
      <rect x="282" y="334" width="146" height="60" rx="14" fill={LAV} opacity="0.18" />
      <rect x="282" y="410" width="90" height="14" rx="7" fill={LAV} opacity="0.2" />
      {/* Shimmer that sweeps across the placeholders. */}
      <rect x="260" y="140" width="46" height="300" fill="#fff" opacity="0.12" transform="skewX(-14)" />
      {/* The streak of speed crossing the screen. */}
      <rect x="170" y="296" width="460" height="12" rx="6" fill={`url(#${id}-streak)`} />
      <circle cx="632" cy="302" r="22" fill={`url(#${id}-glow)`} />
      <circle cx="632" cy="302" r="8" fill="#fff" />
    </>
  );
}

function BuildAnApp() {
  const id = "ba";
  return (
    <>
      <Backdrop id={id} />
      {/* Stepping stones from idea to launch. */}
      <path
        d="M140 380 C 220 380, 230 250, 320 250 S 430 380, 500 360 S 600 230, 660 230"
        fill="none"
        stroke={TEAL}
        strokeWidth="3"
        strokeDasharray="2 14"
        strokeLinecap="round"
      />
      {/* Idea. */}
      <circle cx="140" cy="380" r="64" fill={`url(#${id}-glow)`} />
      <circle cx="140" cy="380" r="30" fill="#FFE9A8" />
      <rect x="128" y="406" width="24" height="14" rx="4" fill={LAV} />
      {/* Notes. */}
      <g transform="rotate(-6 320 250)">
        <rect x="268" y="196" width="104" height="116" rx="12" fill="#fff" opacity="0.95" />
        <g fill="#3816A9" opacity="0.2">
          <rect x="284" y="218" width="72" height="9" rx="4.5" />
          <rect x="284" y="238" width="56" height="9" rx="4.5" />
          <rect x="284" y="258" width="66" height="9" rx="4.5" />
        </g>
        <path d="M286 288 l10 10 l22 -22" stroke={TEAL} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Sketch of a screen. */}
      <rect x="450" y="290" width="100" height="150" rx="16" fill="none" stroke={LAV} strokeWidth="3" strokeDasharray="8 8" />
      <rect x="466" y="312" width="68" height="40" rx="8" fill={LAV} opacity="0.3" />
      <rect x="466" y="366" width="50" height="10" rx="5" fill={LAV} opacity="0.3" />
      {/* Finished app icon. */}
      <circle cx="660" cy="230" r="80" fill={`url(#${id}-glow)`} />
      <rect x="620" y="190" width="80" height="80" rx="20" fill={TEAL} />
      <rect x="620" y="190" width="80" height="26" rx="13" fill="#fff" opacity="0.25" />
      <path d="M646 232 l10 10 l20 -22" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function RewriteTrap() {
  const id = "rw";
  const cols = [210, 330, 450, 570];
  const rows = [170, 290, 410];
  const swap = { c: 2, r: 1 };
  return (
    <>
      <Backdrop id={id} />
      {/* Wiring between modules. */}
      <g stroke={LAV} strokeOpacity="0.35" strokeWidth="3">
        {rows.map((y) => (
          <line key={`h${y}`} x1={cols[0] + 40} y1={y + 40} x2={cols[3] + 40} y2={y + 40} />
        ))}
        {cols.map((x) => (
          <line key={`v${x}`} x1={x + 40} y1={rows[0] + 40} x2={x + 40} y2={rows[2] + 40} />
        ))}
      </g>
      {rows.map((y, r) =>
        cols.map((x, c) => {
          const isNew = r === swap.r && c === swap.c;
          return (
            <g key={`${r}-${c}`}>
              {isNew && <circle cx={x + 40} cy={y + 40} r="90" fill={`url(#${id}-glow)`} />}
              <rect
                x={x}
                y={y}
                width="80"
                height="80"
                rx="18"
                fill={isNew ? TEAL : "#2A1A66"}
                stroke={isNew ? "#fff" : LAV}
                strokeOpacity={isNew ? 0.6 : 0.35}
                strokeWidth="2"
              />
              {!isNew && <rect x={x + 18} y={y + 18} width="44" height="10" rx="5" fill={LAV} opacity="0.3" />}
              {!isNew && <rect x={x + 18} y={y + 38} width="30" height="10" rx="5" fill={LAV} opacity="0.2" />}
              {isNew && (
                <path
                  d={`M${x + 24} ${y + 42} l12 12 l22 -26`}
                  stroke="#fff"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </g>
          );
        }),
      )}
      {/* The old module lifting out. */}
      <g transform="translate(450 410) rotate(14 40 40) translate(18 -66)" opacity="0.5">
        <rect width="80" height="80" rx="18" fill="none" stroke={LAV} strokeWidth="2" strokeDasharray="6 6" />
      </g>
    </>
  );
}

function SmallDetails() {
  const id = "sd";
  return (
    <>
      <Backdrop id={id} />
      <circle cx="400" cy="300" r="190" fill={`url(#${id}-glow)`} />
      {/* Card. */}
      <rect x="250" y="130" width="300" height="340" rx="28" fill="#fff" opacity="0.96" />
      <circle cx="400" cy="226" r="46" fill={TEAL} />
      <path d="M378 226 l16 16 l30 -34" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="320" y="296" width="160" height="14" rx="7" fill="#3816A9" opacity="0.7" />
      <rect x="300" y="324" width="200" height="10" rx="5" fill="#3816A9" opacity="0.18" />
      <rect x="330" y="344" width="140" height="10" rx="5" fill="#3816A9" opacity="0.18" />
      <rect x="300" y="390" width="200" height="46" rx="23" fill="#3816A9" />
      <rect x="352" y="408" width="96" height="10" rx="5" fill="#fff" opacity="0.8" />
      {/* Reassuring message bubble. */}
      <rect x="520" y="170" width="150" height="62" rx="20" fill={LAV} />
      <path d="M540 232 l-6 22 l26 -22 z" fill={LAV} />
      <rect x="540" y="192" width="82" height="10" rx="5" fill="#3816A9" opacity="0.6" />
      <rect x="540" y="210" width="56" height="10" rx="5" fill="#3816A9" opacity="0.35" />
      {/* Shield. */}
      <g transform="translate(110 300)">
        <path d="M60 0 L120 22 V80 C120 120 90 146 60 160 C30 146 0 120 0 80 V22 Z" fill="#2A1A66" stroke={LAV} strokeOpacity="0.6" strokeWidth="3" />
        <path d="M34 78 l18 18 l36 -40" stroke={TEAL} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </>
  );
}

const art: Record<string, () => React.JSX.Element> = {
  "your-customers-are-on-whatsapp": Whatsapp,
  "the-boring-stack": BoringStack,
  "why-your-app-feels-slow": SlowApp,
  "before-you-say-lets-build-an-app": BuildAnApp,
  "the-rewrite-trap": RewriteTrap,
  "small-details-make-people-trust-you": SmallDetails,
};

/** Returns an illustration for the slug, or null when none is drawn. */
export function ArticleArt({ slug }: { slug: string }) {
  const Scene = art[slug];
  if (!Scene) return null;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <Scene />
    </svg>
  );
}

export const hasArticleArt = (slug: string) => slug in art;
