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
        <linearGradient id="thread-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#4C67F8" />
        </linearGradient>
        <linearGradient id="thread-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7F00FF" />
          <stop offset="100%" stopColor="#E100FF" />
        </linearGradient>
        <linearGradient id="thread-grad-3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#92FE9D" />
          <stop offset="100%" stopColor="#00C9FF" />
        </linearGradient>
        <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="#92FE9D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0A1931" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* -- Logo Icon Group -- */}
      <g transform="translate(10, 0)" filter="url(#glow-filter)">
        {/* -- Weaving Threads -- */}
        <path 
            d="M 20 80 C 40 20, 60 20, 80 80" 
            stroke="url(#thread-grad-1)" 
            strokeWidth="5" 
            strokeLinecap="round"
            fill="none" 
        />
        <path 
            d="M 20 20 C 40 80, 60 80, 80 20" 
            stroke="url(#thread-grad-2)" 
            strokeWidth="5" 
            strokeLinecap="round"
            fill="none" 
        />
        <path 
            d="M 50 10 C 10 50, 90 50, 50 90" 
            stroke="url(#thread-grad-3)" 
            strokeWidth="4"
            strokeDasharray="4 4"
            strokeLinecap="round"
            fill="none" 
        />

        {/* -- Glowing Nodes -- */}
        <circle cx="50" cy="50" r="6" fill="url(#node-glow)" />
        <circle cx="33" cy="50" r="3" fill="url(#node-glow)" opacity="0.7"/>
        <circle cx="67" cy="50" r="3" fill="url(#node-glow)" opacity="0.7"/>
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
