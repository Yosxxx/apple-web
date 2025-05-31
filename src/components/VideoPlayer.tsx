"use client";

type VideoPlayerProps = {
  src: string;
};

export default function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
