"use client";
import React from "react";

import styles from "./MusicPlayer.module.css";

import { Play, Pause } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef();
  const src = "/assets/recordings/guitar-payana.mp3";

  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const keyCode = event.code;
      if (keyCode == "Space") {
        setIsPlaying(!isPlaying);
      }
    });

    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [isPlaying]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.media_player}>
        <button
          className={styles.action}
          onClick={() => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }

            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
