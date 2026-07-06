import { useApp } from "../context/AppContext";
import { APODCard } from "./APODCard";
import DatePicker from "./DatePicker";
import RandomButton from "./RandomButton";

export const Hero = () => {
  const {
    picture,
    loading,
    error,
    selectedDate,
    setSelectedDate,
    randomPicture,
  } = useApp();

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-8 py-20">
        <p className="text-muted">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-8 py-20">
        <p className="text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-8">
        <RandomButton onClick={randomPicture} />
        <DatePicker
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="mx-auto max-w-7xl px-8">
        <APODCard key={picture.date} picture={picture} />
      </div>
    </section>
  );
};
