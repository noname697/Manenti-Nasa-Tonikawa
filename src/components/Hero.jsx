import { useApod } from "../hooks/useAPOD";
import { APODCard } from "./APODCard";

export const Hero = () => {
  const { picture, loading, error } = useApod();

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
    <section className="mx-auto max-w-7xl px-8 py-20">
      <APODCard picture={picture} />
    </section>
  );
};
