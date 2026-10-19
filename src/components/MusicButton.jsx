import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicButton = ({ shouldStart }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !shouldStart) return;

    audio.volume = 0.25;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  }, [shouldStart]);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/birthday.mp3" loop />

      {shouldStart && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-[60] glass w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      )}
    </>
  );
};

export default MusicButton;
