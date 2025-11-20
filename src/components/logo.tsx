import { cn } from "@/lib/utils";
import Image from "next/image";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/planify-logo.png"
      alt="Planify Logo"
      width={300}
      height={300}
      className={cn("object-contain", className)}
      priority
    />
  );
}
