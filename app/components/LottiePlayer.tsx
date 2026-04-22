"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottiePlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <DotLottieReact
      src={src}
      autoplay
      loop
      className={className ?? "w-full h-full"}
    />
  );
}
