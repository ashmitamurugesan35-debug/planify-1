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
      <g clipPath="url(#clip0_101_2)">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="currentColor" className="text-primary/10" />
        <path d="M66.5 60.5C65.3 60.5 64.5 61.3 64.5 62.5C64.5 69.9 58.9 75.5 51.5 75.5H39.5C38.3 75.5 37.5 76.3 37.5 77.5C37.5 78.7 38.3 79.5 39.5 79.5H51.5C60.7 79.5 68.5 71.7 68.5 62.5C68.5 61.3 67.7 60.5 66.5 60.5Z" fill="currentColor" className="text-primary/40" />
        <path d="M39.5 20.5H51.5C60.7 20.5 68.5 28.3 68.5 37.5C68.5 46.7 60.7 54.5 51.5 54.5H39.5C30.3 54.5 22.5 46.7 22.5 37.5C22.5 28.3 30.3 20.5 39.5 20.5ZM39.5 24.5C32.5 24.5 26.5 30.4 26.5 37.5C26.5 44.6 32.5 50.5 39.5 50.5H51.5C58.5 50.5 64.5 44.6 64.5 37.5C64.5 30.4 58.5 24.5 51.5 24.5H39.5Z" fill="currentColor" className="text-primary" />
        <path d="M39.5 32.5H51.5C54.8137 32.5 57.5 35.1863 57.5 38.5C57.5 41.8137 54.8137 44.5 51.5 44.5H39.5V32.5Z" fill="currentColor" className="text-primary" />
      </g>
      <defs>
        <clipPath id="clip0_101_2">
          <rect width="100" height="100" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
