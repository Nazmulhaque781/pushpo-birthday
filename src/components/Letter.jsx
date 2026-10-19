import { useState } from "react";
import { Heart } from "lucide-react";

const Letter = ({ onNext }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-10 bg-gradient-to-b from-[#090611] via-[#12091f] to-[#090611]">
      <div className="max-w-2xl w-full text-center">
        {!open ? (
          <div>
            <div className="text-7xl mb-8 float">💌</div>

            <p className="text-pink-300 tracking-[4px] text-sm mb-4">
              A LITTLE NOTE
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              There's something
              <span className="gradient-text"> I wanted to say...</span>
            </h2>

            <p className="text-gray-400 mb-10">
              This one's just for you, Pushpo.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="glass px-8 py-4 rounded-full hover:scale-105 transition duration-300 cursor-pointer"
            >
              Open My Letter 💌
            </button>
          </div>
        ) : (
          <div className="glass rounded-3xl p-7 md:p-10 text-left letter-open">
            <Heart size={30} className="text-pink-300 mb-5" />

            <p className="text-pink-300 text-sm tracking-[3px] mb-3">FOR YOU</p>

            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Dear Pushpo,
            </h2>

            <div className="space-y-4 text-gray-300 leading-7">
              <p>
                I know this came a little late, and I'm genuinely sorry for
                that.
              </p>

              <p>
                I could have just sent you a simple “Happy Birthday” message,
                but somehow that didn't feel enough. So I wanted to make
                something that took a little more time, thought, and effort.
              </p>

              <p>
                I hope this new year of your life brings you peaceful days,
                genuine happiness, lots of reasons to smile, and everything
                you're quietly wishing for.
              </p>

              <p>
                No matter where life takes you, I hope you always find people,
                places, and moments that make you genuinely happy.
              </p>

              <p className="text-white">
                And maybe... somewhere among all those good moments, I hope I
                get to be a small part of a few of them too. 🌸
              </p>

              <p>Happy Birthday once again, Pushpo. 🤍</p>
            </div>

            <div className="mt-7 pt-5 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                A little late, but sincerely,
              </p>

              <p className="gradient-text text-xl font-semibold mt-2">
                — Nazmul
              </p>
            </div>

            {/* Final page button */}
            <div className="text-center mt-7">
              <button
                onClick={onNext}
                className="glass px-8 py-3 rounded-full hover:scale-105 transition duration-300 cursor-pointer"
              >
                One last thing... 🎁
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Letter;
