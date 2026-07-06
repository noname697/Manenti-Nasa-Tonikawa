const DatePicker = ({ value, onChange }) => {
  return (
    <input
      type="date"
      value={value}
      max={new Date().toISOString().split("T")[0]}
      onChange={onChange}
      className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-text backdrop-blur-md transition hover:bg-white/20"
    />
  );
};

export default DatePicker;
