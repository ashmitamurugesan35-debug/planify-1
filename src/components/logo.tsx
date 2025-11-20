import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="pencil-grad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="trail-grad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#F472B6" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.1" />
        </filter>
      </defs>

      <g filter="url(#soft-shadow)">
        <g transform="translate(30, 20) scale(0.9)">
          <path
            d="M50 80 C 40 50, 60 30, 80 40 C 100 50, 110 70, 90 90 C 70 110, 55 100, 50 80 Z"
            fill="#1E40AF"
            opacity="0.8"
          />

          <g transform="translate(15, 10)">
            <circle cx="40" cy="40" r="30" fill="#3B82F6" />
            <circle cx="40" cy="40" r="25" fill="#60A5FA" />
            <path
              d="M30 40 A 10 10 0 0 1 40 30"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M50 40 A 10 10 0 0 0 40 50"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          <g filter="url(#glow)">
            <circle cx="85" cy="35" r="15" fill="#FBBF24" />
            <path
              d="M80 30 L85 22 L90 30"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        
        <path
          d="M100 85 Q 150 95, 180 70 T 230 60"
          stroke="url(#trail-grad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        <g transform="translate(70 55) rotate(-20)">
            <path d="M 0 0 L 30 0 L 25 -5 L 30 0 L 25 5 Z" fill="#4B5563"/>
            <path d="M 30 0 L 80 0" stroke="url(#pencil-grad)" strokeWidth="8" strokeLinecap="round"/>
            <path d="M 80 0 L 90 -4 L 90 4 Z" fill="#FDE68A"/>
        </g>
      </g>
      
      <text
        x="245"
        y="80"
        fontFamily="'Poppins', sans-serif"
        fontSize="50"
        fontWeight="bold"
        fill="#FFFFFF"
        textAnchor="middle"
        style={{
          letterSpacing: '0.05em',
          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        PLANIFY
      </text>
    </svg>
  );
}
