import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-auto h-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary) / 0.1)' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary) / 0.2)' }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="100" height="100" rx="24" fill="url(#badge-gradient)" />
      <rect width="100" height="100" rx="24" fill="transparent" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />

      {/* Icon: Open book with a checkmark */}
      <g transform="translate(25, 28) scale(2.5)">
        <path 
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4.5A2.5 2.5 0 0 1 6.5 2z" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="m9 10 2 2 4-4" 
          stroke="hsl(var(--primary) / 0.8)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
