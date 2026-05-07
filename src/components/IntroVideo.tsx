import { useEffect, useRef, useState } from "react";

interface IntroVideoProps {
  onEnd: () => void;
}

export function IntroVideo({ onEnd }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  const handleEnd = () => {
    setFading(true);
    setTimeout(onEnd, 700);
  };

  const handleSkip = () => {
    setFading(true);
    setTimeout(onEnd, 700);
  };

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
      />

      <button
        onClick={handleSkip}
        className="absolute bottom-10 right-10 rounded-full border border-white/30 bg-black/40 px-5 py-2.5 text-sm font-bold text-white/70 backdrop-blur-sm transition-colors hover:text-white"
      >
        Skip →
      </button>
    </div>
  );
}
