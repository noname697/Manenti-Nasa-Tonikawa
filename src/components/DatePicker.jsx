import { forwardRef } from "react";

const DatePicker = forwardRef(({ value, onChange }, ref) => {
  return (
    <input
      ref={ref}
      type="date"
      value={value}
      max={new Date().toISOString().split("T")[0]}
      onChange={onChange}
      className="rounded-full border border-white/10 bg-surface/80 px-5 py-3 text-text backdrop-blur-md transition hover:bg-white/20 outline-none focus:border-primary"
    />
  );
});

export default DatePicker;
