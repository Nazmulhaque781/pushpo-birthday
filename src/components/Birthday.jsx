import { ArrowRight, Sparkles } from "lucide-react";

const Birthday = ({ onNext }) => {
  return (
    <section className="birthday-page relative min-h-screen overflow-hidden flex items-center justify-center px-5 py-16">
      {/* Background */}
      <div
        className="birthday-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/photos/birthday-bg.jpeg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#07040d]/55" />

      {/* Background glows */}
      <div className="birthday-glow birthday-glow-1" />
      <div className="birthday-glow birthday-glow-2" />

      {/* Floating decorations */}
      <span className="birthday-particle bp-1">✦</span>
      <span className="birthday-particle bp-2">✧</span>
      <span className="birthday-particle bp-3">🌸</span>
      <span className="birthday-particle bp-4">✦</span>
      <span className="birthday-particle bp-5">♡</span>
      <span className="birthday-particle bp-6">✧</span>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Date */}
        <div className="birthday-date flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-[1px] bg-pink-300/30" />

          <p className="text-pink-200 tracking-[5px] text-xs">20 · OCTOBER</p>

          <span className="w-10 h-[1px] bg-pink-300/30" />
        </div>

        {/* Cake */}
        <div className="birthday-cake-wrapper">
          <div className="birthday-cake-glow" />

          <div className="birthday-cake">🎂</div>

          <span className="cake-spark cake-spark-1">✦</span>
          <span className="cake-spark cake-spark-2">✦</span>
          <span className="cake-spark cake-spark-3">✧</span>
        </div>

        {/* Small heading */}
        <p className="birthday-small-title text-gray-400 text-xs tracking-[4px] mt-5 mb-3">
          TODAY IS ABOUT YOU
        </p>

        {/* Main heading */}
        <h1 className="birthday-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-white block">Happy Birthday,</span>

          <span className="gradient-text block mt-2">Pushpita 🌸</span>
        </h1>

        {/* Divider */}
        <div className="birthday-divider flex items-center justify-center gap-3 my-7">
          <span className="w-14 md:w-20 h-[1px] bg-white/10" />

          <Sparkles size={15} className="text-pink-300 birthday-sparkle" />

          <span className="w-14 md:w-20 h-[1px] bg-white/10" />
        </div>

        {/* Wish card */}
        <div className="birthday-card max-w-2xl mx-auto">
          <div className="birthday-card-shine" />

          <p className="text-xl md:text-2xl text-white font-light">
            Late? Maybe a little. 😅
          </p>

          <p className="text-pink-200 text-lg md:text-xl mt-2">
            Forgotten? Never. 🤍
          </p>

          <div className="flex items-center justify-center gap-3 my-6">
            <span className="w-8 h-[1px] bg-pink-300/20" />
            <span className="text-pink-300/50 text-xs">✦</span>
            <span className="w-8 h-[1px] bg-pink-300/20" />
          </div>

          <p className="text-gray-300 leading-7 md:leading-8">
            I couldn't make this in time, and I'm really sorry for being a
            little late.
          </p>

          <p className="text-gray-400 leading-7 md:leading-8 mt-3">
            But I didn't want your birthday wish to be just another message on a
            screen.
          </p>

          <p className="text-gray-300 leading-7 md:leading-8 mt-3">
            So I made this little place for you —
            <span className="text-pink-200">
              {" "}
              with a bit of time, a bit of code,
            </span>{" "}
            and a genuine wish that this year brings you plenty of reasons to
            smile. 🌷
          </p>
        </div>

        {/* Next button */}
        <div className="birthday-button-wrapper mt-9">
          <button onClick={onNext} className="birthday-next-button group">
            {/* Moving Shine */}
            <span className="birthday-button-shine" />

            <span className="relative z-10">There's more</span>

            <span className="relative z-10 text-lg">🌸</span>

            <ArrowRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <p className="birthday-hint text-gray-600 text-xs mt-5">
          we're only getting started ✦
        </p>
      </div>
    </section>
  );
};

export default Birthday;
