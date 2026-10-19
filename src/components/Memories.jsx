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
    <section className="min-h-screen relative overflow-hidden px-5 py-16 bg-gradient-to-b from-[#090611] via-[#12091f] to-[#090611]">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
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

          <p className="text-gray-400 mt-5 max-w-md mx-auto leading-7">
            Just a few pictures that I thought deserved a little place here. 🌸
          </p>
        </div>

        {/* Photo Gallery */}
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

                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Number */}
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

        {/* Bottom message */}
        <div className="text-center mt-14">
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="w-16 h-[1px] bg-pink-300/20" />
            <span className="text-pink-300/60">✦</span>
            <div className="w-16 h-[1px] bg-pink-300/20" />
          </div>

          <button onClick={onNext} className="memory-next-button">
            <span>Keep going...</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Memories;
