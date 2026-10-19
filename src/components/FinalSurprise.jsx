import { useState } from "react";
import confetti from "canvas-confetti";

const FinalSurprise = ({ onRestart }) => {
  const [revealed, setRevealed] = useState(false);

  const handleSurprise = () => {
    setRevealed(true);

    confetti({
      particleCount: 180,
      spread: 100,
      startVelocity: 35,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 130,
        origin: { x: 0.2, y: 0.6 },
      });

      confetti({
        particleCount: 120,
        spread: 130,
        origin: { x: 0.8, y: 0.6 },
      });
    }, 500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-24 bg-gradient-to-b from-[#090611] via-[#160b25] to-[#090611]">
      <div className="max-w-2xl w-full text-center">
        {!revealed ? (
          <div>
            <div className="text-7xl mb-8 float">🎁</div>

            <p className="text-pink-300 tracking-[4px] text-sm mb-4">
              BEFORE YOU GO...
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              One last thing...
            </h2>

            <p className="text-gray-400 mb-10">
              Because a birthday surprise needs a proper ending.
            </p>

            <button
              onClick={handleSurprise}
              className="glass px-8 py-4 rounded-full hover:scale-105 transition duration-300 cursor-pointer"
            >
              One Last Surprise ✨
            </button>
          </div>
        ) : (
          <div className="final-reveal">
            <div className="text-7xl md:text-8xl mb-8">🎂🌷</div>

            <p className="text-pink-300 tracking-[4px] text-sm mb-5">
              ONCE AGAIN
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-7">
              Happy Birthday,
              <span className="gradient-text block mt-3">Pushpo! 🌸</span>
            </h1>

            <div className="glass rounded-3xl p-7 md:p-10 mt-10">
              <p className="text-xl text-gray-200 mb-4">
                You deserve beautiful things.
              </p>

              <p className="text-gray-400 leading-7">
                I may have been late with this, but the wish was never any less
                genuine.
              </p>

              <p className="text-gray-400 leading-7 mt-4">
                I hope the days ahead give you plenty of reasons to smile. 🤍
              </p>
            </div>

            <div className="w-20 h-[1px] bg-pink-300/40 mx-auto my-10" />

            <p className="text-gray-500 text-sm">Made with a little code</p>

            <p className="text-gray-500 text-sm mt-1">and a lot of care :)</p>

            <p className="gradient-text text-lg font-semibold mt-5">— Nazmul</p>

            <button
              onClick={onRestart}
              className="mt-10 glass px-7 py-3 rounded-full hover:scale-105 transition duration-300 cursor-pointer"
            >
              ↻ Start Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalSurprise;
