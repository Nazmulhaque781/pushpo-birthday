const things = [
  {
    emoji: "🌸",
    title: "Your Smile",
    text: "There's something about your smile that can make an ordinary moment feel a little better.",
  },
  {
    emoji: "✨",
    title: "The Way You Are",
    text: "You have your own way of being yourself, and somehow that's one of the nicest things about you.",
  },
  {
    emoji: "🤍",
    title: "Your Presence",
    text: "Sometimes a person's presence is enough to make a moment feel different. You're one of those people.",
  },
  {
    emoji: "🌷",
    title: "Simply, You",
    text: "I don't think everything needs an explanation. Some people just become a little more special than the rest.",
  },
];

const Special = ({ onNext }) => {
  return (
    <section className="min-h-screen flex items-center px-5 py-10 bg-gradient-to-b from-[#090611] via-[#160b25] to-[#090611]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🌷</div>

          <p className="text-pink-300 tracking-[4px] text-xs mb-3">
            JUST A FEW THINGS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="gradient-text">You</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Things you probably don't even realize.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {things.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl p-6 hover:-translate-y-1
              hover:scale-[1.01] transition duration-300"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-400 leading-7">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={onNext}
            className="glass px-8 py-3 rounded-full
            hover:scale-105 transition duration-300 cursor-pointer"
          >
            There's something for you... 💌
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
