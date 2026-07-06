const InfoCard = ({ label, value }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">
        {label}
      </p>
      <p className="mt-2 text-lg font-medium text-text wrap-break-word">
        {value}
      </p>
    </div>
  );
};

export default InfoCard;
