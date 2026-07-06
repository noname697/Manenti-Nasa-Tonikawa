import { useState } from "react";
import { useApod } from "../hooks/useApod";
import { APODCard } from "./APODCard";
import DatePicker from "./DatePicker";
import { getRandomDate } from "../services/nasaApi";
import RandomButton from "./RandomButton";

export const Hero = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleRandomDate = () => {
    let randomDate;

    do {
      randomDate = getRandomDate();
    } while (randomDate === selectedDate);
    setSelectedDate(randomDate);
  };

  const { picture, loading, error } = useApod(selectedDate);

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
  const handleChangeDate = (e) => {
    console.log(e.target.value);

    setSelectedDate(e.target.value);
  };

  return (
    <section className="space-y-8">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-8">
        <RandomButton onCLick={handleRandomDate} />
        <DatePicker value={selectedDate} onChange={handleChangeDate} />
      </div>
      <div className="max-auto max-w-7xl px-8">
        <APODCard picture={picture} />
      </div>
    </section>
  );
};
