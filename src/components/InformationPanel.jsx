import InfoCard from "./InfoCard";

const InformationPanel = ({ picture }) => {
  return (
    <section>
      <div>
        <h2 className="font-title text-4xl">About Today's Picture</h2>

        <p className="mt-6 leading-8 text-muted">{picture.description}</p>
      </div>

      <div className="grid gap-4">
        <InfoCard label="Date" value={picture.date} />
        <InfoCard label="Media" value={picture.media_type} />
        <InfoCard label="Copyright" value={picture.copyright ?? "NASA"} />
        <InfoCard
          label="HD Image"
          value={picture.hdurl ? "Available" : "Unavailable "}
        />
      </div>
    </section>
  );
};

export default InformationPanel;
