import { useState } from "react";
import { useApod } from "../hooks/useApod";
import { APODCard } from "./APODCard";
import DatePicker from "./DatePicker";

export const Hero = () => {
  const [selectedDate, setSelectedDate] = useState("");

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
  const handler = (e) => {
    console.log(e.target.value);
    
    setSelectedDate(e.target.value);
  };

  return (
    <section className="space-y-8">
      <div className="mx-auto flex max-w-7xl justify-end px-8">
        <DatePicker value={selectedDate} onChange={handler} />
      </div>
      <div className="max-auto max-w-7xl px-8">
        <APODCard picture={picture} />
      </div>
    </section>
  );
};
