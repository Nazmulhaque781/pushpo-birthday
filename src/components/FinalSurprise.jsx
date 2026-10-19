import { useState } from "react";

const FinalSurprise = () => {
  const [opened, setOpened] = useState(false);

  const restartWebsite = () => {
    window.location.reload();
  };

  return (
    <section className="final-page relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="final-page-bg" />
      <div className="final-page-overlay" />

      {/* Floating decorations */}
      <span className="final-float final-float-1">✦</span>
      <span className="final-float final-float-2">✧</span>
      <span className="final-float final-float-3">🌸</span>
      <span className="final-float final-float-4">♡</span>
      <span className="final-float final-float-5">✦</span>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-16">
        <div className={`surprise-wrapper ${opened ? "is-open" : ""}`}>
          {/* Top heading */}
          <div className="surprise-heading">
            <p>ONE LAST THING</p>

            <h1>
              Before you go<span>...</span>
            </h1>

            <div className="heading-line">
              <span />
              <b>✦</b>
              <span />
            </div>
          </div>

          {/* Card */}
          <div className="surprise-card">
            {/* Glow */}
            <div className="card-glow" />

            {/* Letter that comes out */}
            <div className="secret-letter">
              <div className="letter-top">
                <span>JUST FOR YOU</span>
                <span>🌸</span>
              </div>

              <div className="letter-content">
                <p className="letter-small">
                  A little something I wanted to say...
                </p>

                <h2>
                  You were worth
                  <span>making all of this for.</span>
                </h2>

                <div className="letter-divider">
                  <span />
                  <b>♡</b>
                  <span />
                </div>

                <p className="letter-text">
                  Maybe someday you'll understand why I spent this much time
                  making something like this just for you.
                </p>

                <p className="letter-birthday">Happy Birthday, Pushpo. 🌷</p>

                <p className="letter-signature">— Nazmul</p>
              </div>
            </div>

            {/* Card inside */}
            <div className="card-inside">
              <div className="inside-glow" />

              <div className="inside-icon">💌</div>

              <p className="inside-small">SOMETHING I SAVED</p>

              <h2>
                Open Me
                <span>when you're ready...</span>
              </h2>

              <p className="inside-text">
                There's a little something waiting inside.
              </p>
            </div>

            {/* Card front */}
            <div className="card-front">
              <div className="front-shine" />

              <div className="front-decoration top">✦</div>

              <div className="front-icon">🎁</div>

              <p className="front-label">A LITTLE SURPRISE</p>

              <h2>
                Just for
                <span>you.</span>
              </h2>

              <div className="front-divider">
                <span />
                <b>♡</b>
                <span />
              </div>

              <button
                type="button"
                onClick={() => setOpened(true)}
                className="open-surprise-btn"
              >
                <span>Open Me</span>
                <span className="open-arrow">→</span>
              </button>

              <div className="front-decoration bottom">✧</div>
            </div>
          </div>

          {/* Back to beginning */}
          <div className="surprise-bottom">
            <span />

            <button
              type="button"
              onClick={restartWebsite}
              className="restart-button"
            >
              <span>↻</span>
              Back to the Beginning
            </button>

            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSurprise;
