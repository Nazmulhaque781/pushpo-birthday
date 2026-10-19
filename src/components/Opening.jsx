import { Gift } from "lucide-react";

const Opening = ({ onOpen }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 bg-gradient-to-b from-[#090611] via-[#160b25] to-[#090611]">
      <div className="text-center max-w-xl">
        <div className="text-6xl mb-7 float">🌸</div>

        <p className="text-pink-300 tracking-[4px] text-sm mb-5">
          FOR SOMEONE SPECIAL
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hey <span className="gradient-text">Pushpo...</span>
        </h1>

        <p className="text-gray-300 text-lg mb-2">I know I'm a little late.</p>

        <p className="text-gray-400 mb-10">
          But some wishes deserve more than just a text.
        </p>

        <button
          onClick={onOpen}
          className="glass px-7 py-4 rounded-full hover:scale-105 transition duration-300 flex items-center gap-3 mx-auto cursor-pointer"
        >
          <Gift size={20} />I made this for you
        </button>
      </div>
    </section>
  );
};

export default Opening;
