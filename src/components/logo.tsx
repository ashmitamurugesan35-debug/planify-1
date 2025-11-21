import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-auto h-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="hsl(var(--primary))"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10ZM41 35C37.6863 35 35 37.6863 35 41V67H43V51H55.5C60.1944 51 64 47.1944 64 42.5C64 37.8056 60.1944 34 55.5 34L41 35ZM52.7915 67.2085L47 61.417L49.1213 59.2957L52.7915 62.9659L66.9334 48.824L69.0547 50.9453L52.7915 67.2085Z"
        fill="hsl(var(--primary))"
      />
    </svg>
  );
}
