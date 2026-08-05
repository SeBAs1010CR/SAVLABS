export default function PcbBoard({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      fill="none"
      strokeWidth="1"
      aria-hidden
    >
      {/* Board outline */}
      <rect
        x="16"
        y="16"
        width="288"
        height="288"
        rx="14"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
      />

      {/* Main chip */}
      <rect
        x="112"
        y="112"
        width="96"
        height="96"
        rx="6"
        stroke="#22d3ee"
        strokeWidth="2"
        fill="rgba(34,211,238,0.06)"
      />
      <circle cx="126" cy="126" r="3" fill="#22d3ee" />

      {/* Chip pins */}
      {[132, 152, 172, 192].map((y) => (
        <g key={y} stroke="rgba(255,255,255,0.5)">
          <line x1="106" y1={y} x2="112" y2={y} />
          <line x1="208" y1={y} x2="214" y2={y} />
        </g>
      ))}
      {[132, 152, 172, 192].map((x) => (
        <g key={x} stroke="rgba(255,255,255,0.5)">
          <line x1={x} y1="106" x2={x} y2="112" />
          <line x1={x} y1="208" x2={x} y2="214" />
        </g>
      ))}

      {/* Traces with 45° bends */}
      <path
        d="M112 152 H72 L52 132 V60 L64 48 H120"
        stroke="#22d3ee"
        strokeOpacity="0.7"
      />
      <path
        d="M208 152 H248 L268 132 V80"
        stroke="rgba(255,255,255,0.45)"
      />
      <path
        d="M208 172 H260 L272 184 V232"
        stroke="#22d3ee"
        strokeOpacity="0.7"
      />
      <path
        d="M152 208 V252 L140 264 H64"
        stroke="rgba(255,255,255,0.45)"
      />
      <path
        d="M152 106 V52 L164 40 H256 L280 64 V120"
        stroke="rgba(255,255,255,0.45)"
      />
      <path
        d="M192 106 V48"
        stroke="#22d3ee"
        strokeOpacity="0.6"
      />

      {/* Vias / pads */}
      {[
        [64, 48],
        [120, 48],
        [268, 80],
        [272, 232],
        [64, 264],
        [280, 120],
        [192, 48],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r="7"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
          />
          <circle cx={x} cy={y} r="2.5" fill="#22d3ee" />
        </g>
      ))}

      {/* Capacitor */}
      <g stroke="rgba(255,255,255,0.5)">
        <line x1="24" y1="272" x2="40" y2="272" />
        <line x1="46" y1="268" x2="46" y2="276" />
        <line x1="52" y1="268" x2="52" y2="276" />
        <line x1="58" y1="272" x2="74" y2="272" />
      </g>

      {/* Small component */}
      <rect
        x="276"
        y="252"
        width="16"
        height="10"
        rx="2"
        stroke="rgba(255,255,255,0.5)"
      />
      <circle cx="290" cy="257" r="1.5" fill="#22d3ee" />
    </svg>
  );
}
