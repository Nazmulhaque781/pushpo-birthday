const Birthday = ({ onNext }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-10 bg-gradient-to-b from-[#090611] via-[#160b25] to-[#090611]">
      <div className="max-w-3xl w-full text-center">
        <div className="text-6xl mb-5 float">🎂</div>

        <p className="text-pink-300 tracking-[5px] text-sm mb-4">20 OCTOBER</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Happy Birthday,
          <span className="gradient-text block mt-2">Pushpita! 🌸</span>
        </h1>

        <p className="text-gray-400 text-lg">
          A little late, but made especially for you.
        </p>

        <div className="glass rounded-3xl p-6 md:p-9 mt-8 max-w-2xl mx-auto">
          <p className="text-xl mb-2">Late? Yes. 😅</p>

          <p className="text-xl mb-5">Forgotten? Never. 🤍</p>

          <div className="w-16 h-[1px] bg-pink-300/40 mx-auto mb-5" />

          <p className="text-gray-300 leading-7">
            I couldn't make this in time, and I'm really sorry for being late.
          </p>

          <p className="text-gray-400 leading-7 mt-3">
            So instead of sending just another late birthday wish, I wanted to
            make something a little more special for you.
          </p>
        </div>

        <button
          onClick={onNext}
          className="mt-8 glass px-8 py-3 rounded-full
          hover:scale-105 transition duration-300 cursor-pointer"
        >
          There's more... →
        </button>
      </div>
    </section>
  );
};

export default Birthday;
