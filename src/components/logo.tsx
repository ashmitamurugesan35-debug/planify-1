import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A7B5" />
          <stop offset="100%" stopColor="#0052D4" />
        </linearGradient>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* <!-- Icon Group --> */}
      <g transform="translate(10, 10)" filter="url(#logo-glow)">
        {/* <!-- Abstract 'P' Monogram --> */}
        {/* <!-- Stem of the 'P' --> */}
        <path d="M 20 0 H 40 C 51.0457 0 60 8.9543 60 20 V 60 C 60 71.0457 51.0457 80 40 80 H 20 C 8.9543 80 0 71.0457 0 60 V 20 C 0 8.9543 8.9543 0 20 0 Z" fill="url(#logo-gradient)" />
        
        {/* <!-- Flowing element, creating the counter of the 'P' --> */}
        <path d="M 40 20 H 50 C 55.5228 20 60 24.4772 60 30 V 50 C 60 55.5228 55.5228 60 50 60 H 40 V 20 Z" fill="#0E1A35" opacity="0.5" />

        {/* <!-- Small accent shape --> */}
         <circle cx="75" cy="10" r="5" fill="url(#logo-gradient)" opacity="0.8" />
      </g>
      
      {/* <!-- Text --> */}
      <g transform="translate(100, 20)">
        <text
            x="0"
            y="45"
            fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="48"
            fontWeight="800"
            fill="hsl(var(--foreground))"
            letterSpacing="-2"
        >
            PLANIFY
        </text>
      </g>
    </svg>
  );
}
