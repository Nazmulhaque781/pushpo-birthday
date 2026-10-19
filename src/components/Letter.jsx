import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const Letter = ({ onNext }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="letter-page relative min-h-screen overflow-hidden flex items-center justify-center px-5 py-16">
      {/* Background */}
      <div className="letter-bg" />
      <div className="letter-bg-overlay" />

      {/* Ambient glow */}
      <div className="letter-glow letter-glow-1" />
      <div className="letter-glow letter-glow-2" />

      {/* Floating particles */}
      <span className="letter-particle lp-1">✦</span>
      <span className="letter-particle lp-2">🌸</span>
      <span className="letter-particle lp-3">✧</span>
      <span className="letter-particle lp-4">♡</span>
      <span className="letter-particle lp-5">🌸</span>
      <span className="letter-particle lp-6">✦</span>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* ================= INTRO ================= */}

        {!open ? (
          <div className="letter-intro">
            {/* Envelope */}
            <div className="special-envelope">
              <div className="envelope-glow" />

              <div className="envelope">
                <div className="envelope-back" />

                <div className="envelope-paper">
                  <span>For You</span>
                </div>

                <div className="envelope-flap" />

                <div className="envelope-heart">♡</div>
              </div>
            </div>

            <p className="letter-label">A LITTLE NOTE</p>

            <h2 className="letter-title">
              Your birthday deserved
              <span>more than just a simple wish...</span>
            </h2>

            <div className="letter-intro-text">
              <p>So I made you a little something instead —</p>

              <p>
                a few memories, a few wishes,
                <br />
                and some little things I've always noticed about you. 🌸
              </p>
            </div>

            <div className="letter-divider">
              <span />
              <Sparkles size={14} />
              <span />
            </div>

            <p className="letter-mystery">
              Maybe you'll understand what I mean.
              <br />
              <span>Maybe you won't.</span>
            </p>

            <p className="letter-ending">Either way, I hope you like it. 🤍</p>

            <button
              onClick={() => setOpen(true)}
              className="secret-button group"
            >
              <span className="secret-button-glow" />

              <span className="secret-button-icon">💌</span>

              <span>Open the little secret</span>

              <span className="secret-button-arrow">✦</span>
            </button>

            <p className="letter-hint">
              tap gently... there's something waiting inside ✨
            </p>
          </div>
        ) : (
          /* ================= LETTER ================= */

          <div className="letter-open-wrapper">
            {/* Top heart */}
            <div className="letter-reveal-icon">
              <Heart size={27} />
            </div>

            <div className="letter-open-card">
              {/* Decorative elements */}
              <div className="letter-card-spark">✦</div>

              <div className="letter-card-spark second">✧</div>

              <div className="letter-card-flower">🌸</div>

              {/* Heading */}
              <div className="letter-heading">
                <p className="letter-for-you">JUST FOR YOU</p>

                <div className="letter-heading-line">
                  <span />
                  <Sparkles size={13} />
                  <span />
                </div>

                <h2>
                  Dear <span>Pushpo,</span>
                </h2>
              </div>

              {/* Letter content */}
              <div className="letter-content">
                <p className="letter-opening">
                  First of all, <strong>Happy Birthday.</strong> 🎂🤍
                </p>

                <p>
                  I hope this year brings you the kind of happiness that stays a
                  little longer than a moment — peaceful days, genuine smiles,
                  beautiful memories, and all the little things you've been
                  quietly wishing for.
                </p>

                <p>
                  I hope you keep growing into the person you want to become,
                  and that life gives you more reasons to be proud of yourself.
                  And whenever things don't go exactly the way you hoped, I hope
                  you always remember that better days can still be waiting
                  ahead.
                </p>

                <div className="letter-soft-break">
                  <span>✦</span>
                </div>

                <p className="letter-highlight-paragraph">
                  I could have simply wished you,
                  <em>“Happy Birthday, have a great day.”</em>
                </p>

                <p>But somehow, that felt a little too ordinary for you.</p>

                <p>
                  Maybe because, somewhere along the way, you became someone I
                  started noticing a little more than I usually notice people.
                </p>

                {/* Little things */}
                <div className="letter-little-things">
                  <p>The little things.</p>

                  <p>The way you smile.</p>

                  <p>The way you react to random things.</p>

                  <p>
                    The moments that probably mean nothing to you, but somehow
                    stay in my mind a little longer.
                  </p>
                </div>

                <p>I don't really know when that happened.</p>

                <p>And maybe I don't even need to explain it.</p>

                {/* Main feelings */}
                <div className="letter-feeling">
                  <div className="letter-feeling-glow" />

                  <span className="letter-feeling-quote">“</span>

                  <p>
                    I just know that{" "}
                    <strong>
                      you're a little more special to me than I usually let
                      people know.
                    </strong>{" "}
                    🌸
                  </p>

                  <span className="letter-feeling-quote closing">”</span>
                </div>

                <p>
                  I don't know what the future looks like, or where life takes
                  either of us.
                </p>

                <p>
                  But if I get to keep a few more conversations, a few more
                  laughs, a few more memories, and maybe a few more moments with
                  you along the way...
                </p>

                <p className="letter-soft-highlight">
                  I'd honestly be happy about that.
                </p>

                <div className="letter-soft-break">
                  <span>♡</span>
                </div>

                <p>
                  For now, I just hope you have a beautiful birthday and an even
                  more beautiful year ahead.
                </p>

                <p className="letter-stay">
                  <strong>Stay happy.</strong>
                  <br />
                  <span>Stay the way you are.</span>
                </p>

                <p>
                  And maybe someday, you'll understand why I spent this much
                  time making something like this just for you. 🤍
                </p>

                <p className="letter-final-wish">
                  <strong>Happy Birthday once again, Pushpo.</strong> 🌷
                </p>
              </div>

              {/* Signature */}
              <div className="letter-signature">
                <div className="signature-line">
                  <span />
                  <span>✦</span>
                  <span />
                </div>

                <p>
                  A little late, but with more thought than a simple wish could
                  ever hold,
                </p>

                <span className="signature-name">— Nazmul</span>
              </div>

              {/* Final button */}
              <button onClick={onNext} className="final-letter-button group">
                <span>One last thing...</span>

                <span className="final-letter-icon">🎁</span>

                <span className="final-letter-arrow">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Letter;
