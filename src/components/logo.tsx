import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(180, 100%, 35%)" />
          <stop offset="100%" stopColor="hsl(210, 100%, 25%)" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(35, 100%, 60%)" />
        </linearGradient>
         <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* <!-- Icon Group --> */}
      <g transform="translate(10, 30)">
        {/* <!-- Stylized P / Book --> */}
        <path 
          d="M 30 10 C 20 10, 10 20, 10 40 L 10 100 C 10 105, 15 110, 20 110 L 50 110 C 85 110, 95 80, 95 60 C 95 30, 80 10, 50 10 L 30 10 Z"
          fill="url(#grad1)"
        />
        <path d="M 50 10 L 50 110" stroke="hsl(190, 80%, 70%)" strokeWidth="2" />
        
        {/* <!-- Abstract Flow Lines --> */}
        <path d="M 55 30 Q 75 40, 95 35" stroke="hsl(190, 80%, 60%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 55 50 Q 85 50, 105 60" stroke="hsl(190, 80%, 60%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 55 70 Q 70 85, 90 90" stroke="hsl(190, 80%, 60%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* <!-- Glowing Node (Brain/Idea) --> */}
        <circle cx="105" cy="35" r="5" fill="url(#grad2)" filter="url(#glow)" />
        <circle cx="115" cy="60" r="3" fill="url(#grad2)" filter="url(#glow)" />
      </g>
      
      {/* <!-- Text --> */}
      <g transform="translate(130, 45)">
        <text
            x="0"
            y="35"
            fontFamily="Inter, sans-serif"
            fontSize="42"
            fontWeight="700"
            fill="hsl(var(--foreground))"
            letterSpacing="-1"
        >
            PLANIFY
        </text>
        <text
            x="0"
            y="65"
            fontFamily="Inter, sans-serif"
            fontSize="18"
            fontWeight="500"
            fill="hsl(var(--muted-foreground))"
            letterSpacing="0.5"
        >
            Smart Timetable
        </text>
      </g>
      
    </svg>
  );
}
