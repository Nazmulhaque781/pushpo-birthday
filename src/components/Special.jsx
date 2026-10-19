const things = [
  {
    id: 1,
    emoji: "🌸",
    mini: "MAYBE YOU NEVER NOTICED",
    title: "That Little Smile",
    text: "There are smiles that look nice in a picture, and then there are smiles that somehow change the whole mood of a moment. Yours has always felt a little more like the second one.",
  },
  {
    id: 2,
    emoji: "✨",
    mini: "THE LITTLE THINGS",
    title: "The Way You Are",
    text: "It's funny how the smallest things can make someone memorable—the way you talk, the way you react, the random little expressions you make. I think those are the things people remember without even realizing it.",
  },
  {
    id: 3,
    emoji: "🤍",
    mini: "A THOUGHT I NEVER SAID",
    title: "Your Presence",
    text: "Some people are around, and that's all it is. But sometimes someone's presence makes an ordinary moment feel different. I've noticed that about you more than once.",
  },
  {
    id: 4,
    emoji: "🌷",
    mini: "THIS ONE IS HARD TO EXPLAIN",
    title: "Why You Feel Different",
    text: "I could probably list a hundred little reasons, but somehow none of them would explain it properly. Maybe that's the interesting part—some people don't become special because of one thing. They just slowly become impossible not to notice.",
  },
];

const Special = ({ onNext }) => {
  return (
    <section className="special-page relative min-h-screen overflow-hidden px-5 py-20">
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="special-bg" />

      <div className="special-overlay" />

      {/* Soft background glows */}
      <div className="special-glow special-glow-1" />
      <div className="special-glow special-glow-2" />
      <div className="special-glow special-glow-3" />

      {/* Floating decorations */}
      <span className="special-float special-float-1">🌸</span>
      <span className="special-float special-float-2">✦</span>
      <span className="special-float special-float-3">✧</span>
      <span className="special-float special-float-4">🌷</span>
      <span className="special-float special-float-5">♡</span>
      <span className="special-float special-float-6">✦</span>

      {/* Tiny background dots */}
      <span className="special-dot special-dot-1" />
      <span className="special-dot special-dot-2" />
      <span className="special-dot special-dot-3" />
      <span className="special-dot special-dot-4" />

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="special-header text-center">
          <div className="special-flower-wrap">
            <div className="special-flower-glow" />

            <span className="special-flower-ring" />

            <span className="special-main-flower">🌷</span>
          </div>

          <div className="special-label">
            <span />
            <p>JUST A FEW THINGS</p>
            <span />
          </div>

          <h2 className="special-title">
            About <span>You</span>
          </h2>

          <p className="special-subtitle">
            Some things are easier to notice
            <br className="hidden md:block" />
            when you're looking from a little distance.
          </p>

          <div className="special-divider">
            <span />
            <b>✦</b>
            <span />
          </div>
        </div>

        {/* ========================================
            CARDS
        ======================================== */}

        <div className="special-cards">
          {things.map((thing, index) => (
            <div
              key={thing.id}
              className={`special-card special-card-${index + 1}`}
            >
              {/* Card glow */}
              <div className="special-card-glow" />

              {/* Top shine */}
              <div className="special-card-shine" />

              {/* Number */}
              <div className="special-number">0{thing.id}</div>

              {/* Emoji */}
              <div className="special-icon-wrap">
                <div className="special-icon-ring" />

                <div className="special-icon">{thing.emoji}</div>
              </div>

              {/* Card Content */}
              <div className="special-card-content">
                <p className="special-card-mini">{thing.mini}</p>

                <h3>{thing.title}</h3>

                <div className="special-card-line">
                  <span />
                  <i>✦</i>
                  <span />
                </div>

                <p className="special-card-text">{thing.text}</p>
              </div>

              {/* Corner decoration */}
              <div className="special-card-corner">✧</div>
            </div>
          ))}
        </div>

        {/* ========================================
            LITTLE THOUGHT
        ======================================== */}

        <div className="special-thought">
          <div className="special-thought-line">
            <span />
            <span>✦</span>
            <span />
          </div>

          <p>
            Maybe you never really notice
            <span> the little things </span>
            that make you... you.
          </p>

          <div className="special-thought-flower">🌸</div>
        </div>

        {/* ========================================
            ENDING CARD
        ======================================== */}

        <div className="special-ending">
          <div className="special-ending-glow" />

          <div className="special-ending-inner">
            <div className="special-ending-icon">💌</div>

            <p className="special-ending-small">AND MAYBE...</p>

            <h3>
              There's something
              <span> I haven't said yet.</span>
            </h3>

            <p className="special-ending-text">
              Some things are better saved for the right moment. 🌸
            </p>

            <div className="special-ending-divider">
              <span />
              <b>♡</b>
              <span />
            </div>

            <button onClick={onNext} className="special-next-button group">
              <span className="special-button-shine" />

              <span className="special-button-icon">💌</span>

              <span className="special-button-text">
                There's something for you
              </span>

              <span className="special-button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
