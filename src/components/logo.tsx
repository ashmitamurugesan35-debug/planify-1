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
        <linearGradient id="path-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#437DFF" />
        </linearGradient>
        <linearGradient id="path-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F00FF" />
          <stop offset="50%" stopColor="#00C9FF" />
          <stop offset="100%" stopColor="#92FE9D" />
        </linearGradient>
         <linearGradient id="path-grad-3" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#007BFF" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="#92FE9D" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0A1931" stopOpacity="0" />
        </radialGradient>
        <filter id="logo-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>

      {/* -- Logo Icon Group -- */}
      <g transform="translate(10, 10)" filter="url(#logo-glow-filter)">
        {/* -- Central Glowing Orb (The AI Core) -- */}
        <circle cx="40" cy="40" r="15" fill="url(#core-glow)" />
        <circle cx="40" cy="40" r="6" fill="white" />
        
        {/* -- Star Glints -- */}
        <path d="M40 2 L42 8 L38 8 Z" fill="white" opacity="0.8"/>
        <path d="M78 40 L72 42 L72 38 Z" fill="white" opacity="0.8"/>
        <path d="M2 40 L8 42 L8 38 Z" fill="white" opacity="0.8"/>

        {/* -- Orbital Paths with Tapered Effect -- */}
        <path 
          d="M 50 12 A 28 28 0 0 1 76.7 23.3" 
          stroke="url(#path-grad-1)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none" 
        />
        <path 
          d="M 12 50 A 28 28 0 0 1 23.3 13.3" 
          stroke="url(#path-grad-2)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none" 
        />
        <path 
          d="M 60 75 A 35 35 0 0 0 75 30" 
          stroke="url(#path-grad-3)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none" 
        />
      </g>
      
      {/* -- Text -- */}
      <g transform="translate(100, 20)">
        <text
            x="0"
            y="45"
            fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
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
