import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-10", className)}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <g clipPath="url(#clip0_103_2)">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.1"
        />
        <path
          d="M20 12V20H28"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9289 12.9289C11.0536 14.8043 10 17.3478 10 20C10 22.6522 11.0536 25.1957 12.9289 27.0711C14.0374 28.1796 15.3484 29.0732 16.7925 29.702"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
         <path 
          d="M16.5 29.5C16.5 29.5 18 26 21 24C24 22 27.5 23 27.5 23"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="50"
        y="27"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="600"
        fill="hsl(var(--foreground))"
      >
        Planify
      </text>
      <defs>
        <clipPath id="clip0_103_2)">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}