import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={cn("w-auto h-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#38bdf8', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="book-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#fde047', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main container */}
      <g transform="translate(80, 80)">
        {/* Book */}
        <g transform="translate(0, 30)">
          <path
            d="M -60 0 C -60 -20, -20 -30, 0 -30 C 20 -30, 60 -20, 60 0 L 60 40 L -60 40 Z"
            fill="#fff"
            stroke="#d1d5db"
            strokeWidth="3"
          />
          <path
            d="M -55 35 L 55 35"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 0 -30 V 40"
            stroke="#d1d5db"
            strokeWidth="3"
          />
        </g>
        
        {/* Brain */}
        <g transform="translate(0, -20)" filter="url(#glow)">
          <path
            fill="url(#brain-gradient)"
            d="M1.52,27.93c-2.45-1.15-2.73-3.23-2.88-5.43-0.2-2.93,0.3-5.83,0.4-8.75c0.08-2.33-0.58-4.7-1.85-6.55c-1.39-2-3.55-3.3-5.83-3.95C-10.29,2.62-12.06,0.3-11.51-1.92c0.43-1.75,2.15-3.08,3.95-3.68c3.2-1.08,6.6-1.05,9.93-1.5c2.4-0.33,4.95-1.25,6.5-3.2c1.33-1.68,1.75-3.83,1.38-5.83c-0.3-1.63,0.28-3.48,1.83-4.3c1.5-0.8,3.35-0.45,4.8,0.45c2.25,1.38,3.53,3.83,3.9,6.4c0.28,1.95,1.3,3.75,2.93,4.88c2.2,1.55,5,1.8,7.65,1.58c2.1-0.18,4.28-0.95,5.93-2.43c1.6-1.43,2.4-3.48,2.78-5.5c0.3-1.63,1.35-3.05,2.85-3.73c1.48-0.65,3.23-0.43,4.63,0.4c2.15,1.28,3.33,3.58,3.53,5.93c0.15,1.8-0.2,3.65-0.3,5.45c-0.15,2.7-1.08,5.3-2.53,7.43c-1.23,1.8-2.98,3.15-4.95,3.9c-2.7,1-5.63,0.85-8.45,0.7c-2.4-0.13-4.75,0.73-6.5,2.4c-1.78,1.7-2.6,4.1-2.83,6.5c-0.18,1.93,0.05,3.9-0.38,5.75c-0.5,2.15-1.95,3.98-3.9,5.03c-2.1,1.13-4.6,1.2-6.85,0.5C5.45,29.98,3.47,28.78,1.52,27.93z"
          />
        </g>

        {/* Graduation Cap */}
        <g transform="translate(35, -55)">
           <path d="M-15 5 L15 5 L0 15 Z" fill="#4b5563"/>
           <rect x="-20" y="-2" width="40" height="7" rx="2" fill="#4b5563"/>
           <path d="M12 -2 L12 -12 L16 -12 L16 -2 Z" fill="#f59e0b"/>
           <circle cx="16" cy="-12" r="3" fill="#f59e0b" />
        </g>
        
        {/* Pencil */}
        <g transform="translate(-45, -50) rotate(-30)">
            <rect x="-15" y="-3" width="30" height="6" fill="#f97316"/>
            <polygon points="15,-6 15,6 22,0" fill="#292524"/>
            <polygon points="-15,-3 -20,0 -15,3" fill="#fef3c7"/>
        </g>
      </g>
    </svg>
  );
}
