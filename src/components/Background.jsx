export const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#243b74_0%,#171e30_40%,#0b1021_100%)]" />

      <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
};
