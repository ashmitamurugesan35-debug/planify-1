import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 120 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15" />
        </filter>
        <linearGradient id="body-gradient" x1="60" y1="20" x2="60" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FC3F7"/>
          <stop offset="1" stopColor="#00A5F7"/>
        </linearGradient>
         <linearGradient id="cap-gradient" x1="60" y1="5" x2="60" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3D4A5A"/>
          <stop offset="1" stopColor="#2C3745"/>
        </linearGradient>
      </defs>
      
      <g filter="url(#shadow)">
        <circle cx="60" cy="70" r="50" fill="url(#body-gradient)" />
        <circle cx="60" cy="70" r="45" fill="white" />
      </g>
      
      <path d="M45 70a5 5 0 0 1 10 0 5 5 0 0 1-10 0zM75 70a5 5 0 0 1 10 0 5 5 0 0 1-10 0z" fill="#2C3745" />
      
      <path d="M40 85 C 50 100, 70 100, 80 85" stroke="#2C3745" strokeWidth="4" strokeLinecap="round" fill="none" />

      <g transform="translate(60 70)">
        <line x1="0" y1="0" x2="0" y2="-20" stroke="#F44336" strokeWidth="4" strokeLinecap="round">
           <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="0" x2="28" y2="0" stroke="#2C3745" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="60s" repeatCount="indefinite" />
        </line>
      </g>

      <circle cx="60" cy="70" r="4" fill="#FBC02D" />

      <g>
        <path d="M 30 30 L 90 30 L 60 10 Z" fill="url(#cap-gradient)" />
        <rect x="25" y="30" width="70" height="5" fill="#3D4A5A" rx="2" />
        <path d="M 88 18 L 98 22" stroke="#FBC02D" strokeWidth="3" strokeLinecap="round"/>
         <path d="M 98 22 L 96 18" stroke="#FBC02D" strokeWidth="3" strokeLinecap="round"/>
         <path d="M 98 22 L 102 22" stroke="#FBC02D" strokeWidth="3" strokeLinecap="round"/>
      </g>

      <text
        x="60"
        y="128"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#2C3745"
        textAnchor="middle"
      >
        PLANIFY
      </text>
    </svg>
  );
}
