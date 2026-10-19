const petals = [
  { left: "8%", delay: "0s", duration: "9s", emoji: "🌸" },
  { left: "20%", delay: "2s", duration: "11s", emoji: "✿" },
  { left: "35%", delay: "4s", duration: "8s", emoji: "🌸" },
  { left: "52%", delay: "1s", duration: "10s", emoji: "✿" },
  { left: "68%", delay: "3s", duration: "12s", emoji: "🌸" },
  { left: "82%", delay: "5s", duration: "9s", emoji: "✿" },
  { left: "94%", delay: "7s", duration: "11s", emoji: "🌸" },
];

const FloatingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal, index) => (
        <span
          key={index}
          className="floating-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingPetals;
