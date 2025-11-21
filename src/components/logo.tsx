import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
        <rect width="100" height="100" rx="24" fill="currentColor" className="text-primary/10" />
        <path d="M35 30H50C58.2843 30 65 36.7157 65 45V45C65 53.2843 58.2843 60 50 60H35V30Z" stroke="currentColor" strokeWidth="8" className="text-primary" />
        <path d="M35 60V70" stroke="currentColor" strokeWidth="8" className="text-primary" />
    </svg>
  );
}
