const Button = ({ children, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-primary text-background hover:brightness-110",
    secondary: "bg-white/10 border border-white/10 text-text hover:bg-white/20",
  };

  return (
    <button
      className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
