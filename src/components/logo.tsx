import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-24 h-24", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 33.3333H75V75C75 79.6024 71.269 83.3333 66.6667 83.3333H33.3333C28.731 83.3333 25 79.6024 25 75V33.3333Z"
        fill="hsl(var(--primary))"
        fillOpacity="0.2"
      />
      <path
        d="M25 33.3333H75V41.6667H25V33.3333Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M66.6667 16.6667V33.3333M33.3333 16.6667V33.3333"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect
        x="25"
        y="33.3333"
        width="50"
        height="50"
        rx="8.33333"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
      />
    </svg>
  );
}
