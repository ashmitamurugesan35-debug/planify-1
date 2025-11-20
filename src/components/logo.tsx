import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PlanifyLogo(props: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'planify-logo');

  if (!logoImage) {
    return null;
  }

  return (
    <Image
      src={logoImage.imageUrl}
      alt="Planify Logo"
      width={300}
      height={300}
      className={cn("object-contain", props.className)}
      priority
    />
  );
}
