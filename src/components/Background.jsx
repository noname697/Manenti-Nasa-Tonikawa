import Star from "./Star";

const stars = [
  { top: "8%", left: "15%", size: 2, delay: 0 },
  { top: "12%", left: "72%", size: 3, delay: 1 },
  { top: "22%", left: "40%", size: 2, delay: 2 },
  { top: "30%", left: "90%", size: 2, delay: 0.5 },
  { top: "45%", left: "20%", size: 3, delay: 1.5 },
  { top: "55%", left: "78%", size: 2, delay: 0.3 },
  { top: "65%", left: "12%", size: 3, delay: 2 },
  { top: "75%", left: "55%", size: 2, delay: 1 },
  { top: "82%", left: "88%", size: 3, delay: 0 },
  { top: "90%", left: "32%", size: 2, delay: 2.3 },
];

export const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#25386b_0%,#171e39_45%,#0b1021_100%)]" />

      <div
        className="absolute left-1/2 -top-50 h-150 w-150 -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]"
        style={{ animation: "pulseGlow 8s ease-in-out infinite" }}
      />

      <div
        className="absolute -bottom-50 -right-30 h-105 w-105 rounded-full bg-secondary/15 blur-[140px]"
        style={{ animation: "float 10s ease-in-out infinite" }}
      />

      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  );
};

export default Background;
