const memories = [
  {
    id: 1,
    photo: "/photos/p1.jpeg",
    caption: "A picture that simply looks beautiful 🌸",
    rotate: "-rotate-3",
    delay: "0s",
  },
  {
    id: 2,
    photo: "/photos/p2.jpeg",
    caption: "You looked really nice here 🤍",
    rotate: "rotate-2",
    delay: "0.15s",
  },
  {
    id: 3,
    photo: "/photos/p3.jpeg",
    caption: "This one has a really nice vibe ✨",
    rotate: "-rotate-2",
    delay: "0.3s",
  },
  {
    id: 4,
    photo: "/photos/p4.jpeg",
    caption: "Just a lovely picture 🌷",
    rotate: "rotate-3",
    delay: "0.45s",
  },
  {
    id: 5,
    photo: "/photos/p5.jpeg",
    caption: "This one stood out to me 💫",
    rotate: "-rotate-2",
    delay: "0.6s",
  },
  {
    id: 6,
    photo: "/photos/p6.jpeg",
    caption: "A simple picture, but really pretty 🤍",
    rotate: "rotate-2",
    delay: "0.75s",
  },
];

const Memories = ({ onNext }) => {
  return (
    <section className="memories-page min-h-screen relative overflow-hidden px-5 py-16">
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div
        className="memories-bg"
        style={{
          backgroundImage: "url('/photos/memories-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="memories-bg-overlay" />

      {/* Soft Animated Background Glow */}
      <div className="memories-page-glow memories-page-glow-1" />
      <div className="memories-page-glow memories-page-glow-2" />

      {/* Background Sparkles */}
      <span className="memories-sparkle memories-sparkle-1">✦</span>
      <span className="memories-sparkle memories-sparkle-2">✧</span>
      <span className="memories-sparkle memories-sparkle-3">✦</span>
      <span className="memories-sparkle memories-sparkle-4">✧</span>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 page-enter">
          <div className="text-5xl mb-5 float">📸</div>

          <p className="text-pink-300 tracking-[5px] text-xs mb-4">
            A LITTLE GALLERY
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Some <span className="gradient-text">Beautiful</span>
            <br />
            Moments
          </h2>

          <p className="text-gray-300 mt-5 max-w-md mx-auto leading-7">
            Just a few pictures that I thought deserved a little place here. 🌸
          </p>
        </div>

        {/* =========================================
            PHOTO GALLERY
        ========================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-10 max-w-5xl mx-auto">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`memory-card ${memory.rotate}`}
              style={{
                animationDelay: memory.delay,
              }}
            >
              <div className="memory-card-inner">
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-900">
                  <img
                    src={memory.photo}
                    alt={`Memory ${memory.id}`}
                    className="w-full h-full object-cover memory-image"
                  />

                  {/* Soft Photo Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Number */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-[10px] text-white/80">
                      {String(memory.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="pt-4 pb-2 px-2">
                  <p className="text-gray-600 text-sm md:text-base text-center leading-5">
                    {memory.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            PERSONAL NOTE
        ========================================== */}
        <div className="gallery-note-wrapper mt-20">
          {/* Background Glow */}
          <div className="gallery-note-glow" />

          <div className="gallery-note-card">
            {/* Decorative Quote */}
            <span className="gallery-big-quote">“</span>

            {/* Small Heading */}
            <div className="gallery-note-heading">
              <span className="gallery-heading-line" />

              <p>A SMALL THOUGHT</p>

              <span className="gallery-heading-line" />
            </div>

            {/* Animated Flower */}
            <div className="gallery-note-flower-wrap">
              <span className="gallery-flower-glow" />
              <span className="gallery-main-flower">🌸</span>
            </div>

            {/* Message */}
            <div className="gallery-message">
              {/* Line 1 */}
              <p className="gallery-line gallery-line-1">
                I don't know if I've ever told you this,
                <br className="hidden md:block" />
                but I really like your{" "}
                <span className="gallery-special-text">pictures.</span>
              </p>

              {/* Line 2 */}
              <p className="gallery-line gallery-line-2">
                Somehow, whenever I see one, I end up looking at it
                <br className="hidden md:block" />
                <span className="gallery-highlight">
                  {" "}
                  a little longer than I probably should.
                </span>{" "}
                😅
              </p>

              {/* Line 3 */}
              <p className="gallery-line gallery-line-3">
                Maybe it's your smile,
                <br className="md:hidden" /> maybe it's the way you look in
                them...
              </p>

              {/* Line 4 */}
              <p className="gallery-line gallery-line-4">
                or maybe it's{" "}
                <span className="gallery-special-text">just you</span>
                <br className="hidden md:block" /> that makes every picture feel{" "}
                <span className="gallery-highlight">
                  a little more special.
                </span>{" "}
                🌸
              </p>

              {/* Middle Decoration */}
              <div className="gallery-middle-decoration">
                <span />
                <span>✦</span>
                <span />
              </div>

              {/* Final Message */}
              <p className="gallery-line gallery-line-5 gallery-final-message">
                And honestly, choosing only a few for this page
                <br className="hidden md:block" /> was harder than I expected.{" "}
                <span>🤍</span>
              </p>
            </div>

            {/* Bottom Decoration */}
            <div className="gallery-note-ending">
              <span className="gallery-ending-dot" />
              <span className="gallery-ending-star">✦</span>
              <span className="gallery-ending-dot" />
            </div>
          </div>
        </div>

        {/* =========================================
            NEXT BUTTON
        ========================================== */}
        <div className="text-center mt-14">
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="w-16 h-[1px] bg-pink-300/20" />

            <span className="text-pink-300/60">✦</span>

            <div className="w-16 h-[1px] bg-pink-300/20" />
          </div>

          <button onClick={onNext} className="memory-next-button group">
            <span className="memory-button-shine" />

            <span className="memory-button-star">✦</span>

            <span className="memory-button-text">A little more awaits</span>

            <span className="memory-button-arrow">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Memories;
