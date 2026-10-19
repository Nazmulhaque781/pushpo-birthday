import { ArrowRight, Sparkles } from "lucide-react";

const Opening = ({ onOpen }) => {
  return (
    <section className="opening-section relative min-h-screen overflow-hidden flex items-center justify-center px-5">
      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/opening-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#07040d]/65" />

      {/* Soft Center Glow */}
      <div className="opening-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* =========================
          FLOATING STARS
      ========================== */}
      <div className="opening-star star-1">✦</div>
      <div className="opening-star star-2">✧</div>
      <div className="opening-star star-3">✦</div>
      <div className="opening-star star-4">✧</div>
      <div className="opening-star star-5">·</div>
      <div className="opening-star star-6">✦</div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Top Label */}
        <div className="opening-label flex items-center justify-center gap-3 mb-7">
          <div className="opening-line w-10 h-[1px] bg-pink-300/30" />

          <p className="text-pink-200/90 tracking-[5px] text-[10px] md:text-xs">
            A LITTLE SOMETHING FOR YOU
          </p>

          <div className="opening-line w-10 h-[1px] bg-pink-300/30" />
        </div>

        {/* =========================
            FLOWER
        ========================== */}
        <div className="opening-flower relative w-32 h-32 mx-auto mb-7 flex items-center justify-center">
          <div className="flower-glow absolute inset-0 rounded-full bg-pink-500/10" />

          <div className="flower-ring absolute inset-3 rounded-full border border-pink-300/10" />

          <div className="relative text-7xl">🌸</div>
        </div>

        {/* Hey */}
        <p className="opening-hey text-gray-400 text-sm tracking-[4px] mb-4">
          HEY
        </p>

        {/* Name */}
        <h1 className="opening-title text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-white">Pushpo</span>

          <span className="gradient-text">...</span>
        </h1>

        {/* Divider */}
        <div className="opening-divider flex items-center justify-center gap-3 my-7">
          <div className="w-12 md:w-20 h-[1px] bg-white/10" />

          <Sparkles size={14} className="text-pink-300/70 sparkle-icon" />

          <div className="w-12 md:w-20 h-[1px] bg-white/10" />
        </div>

        {/* =========================
            MESSAGE
        ========================== */}
        <div className="opening-message mb-10">
          {/* First Message */}
          <div className="space-y-2">
            <p className="text-gray-100 text-lg md:text-xl font-light">
              I know I'm a little late.
            </p>

            <p className="text-gray-400 text-sm md:text-base">
              But some wishes are worth taking a little extra time for.
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-pink-300/40" />

            <span className="text-pink-300/60 text-[10px]">✦</span>

            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-pink-300/40" />
          </div>

          {/* Second Message */}
          <div className="opening-extra-message space-y-2">
            <p className="text-gray-200 text-base md:text-lg">
              I wanted to make something
              <span className="text-pink-200"> a little different </span>
              for you.
            </p>

            <p className="text-gray-400 text-sm italic">Nothing too fancy...</p>

            <p className="text-gray-300 text-sm md:text-base">
              just a little something
              <span className="text-white"> made with you in mind.</span>
            </p>
          </div>
        </div>

        {/* =========================
            MAIN BUTTON
        ========================== */}
        <div className="opening-button-wrapper">
          <button onClick={onOpen} className="opening-main-button group">
            {/* Shine */}
            <span className="button-shine" />

            {/* Jumping Teddy */}
            <span
              className="jumping-teddy relative z-10 text-xl"
              aria-hidden="true"
            >
              🧸
            </span>

            <span className="relative z-10 font-medium tracking-wide">
              I made something for you
            </span>

            <ArrowRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Bottom Hint */}
        <p className="opening-hint text-gray-500 text-xs mt-7 tracking-wide">
          take a little look inside ✦
        </p>
      </div>

      {/* Bottom Pulse */}
      <div className="opening-bottom-pulse absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-1 h-1 bg-pink-300/50 rounded-full" />
      </div>
    </section>
  );
};

export default Opening;
