"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Browsers block autoplay for audio unless the user has interacted.
    // We listen to the first interaction (click, scroll, keydown) to start playing.
    const startAudio = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.5; // Set volume to 50%
        audioRef.current.play().then(() => {
          setHasInteracted(true);
        }).catch((err) => {
          console.log("Audio play blocked by browser:", err);
        });
      }
    };

    // Attach interaction listeners
    window.addEventListener("click", startAudio);
    window.addEventListener("scroll", startAudio);
    window.addEventListener("keydown", startAudio);
    window.addEventListener("touchstart", startAudio);

    return () => {
      // Cleanup listeners
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("keydown", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };
  }, [hasInteracted]);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src="/bg-music.mp3" type="audio/mpeg" />
    </audio>
  );
}
