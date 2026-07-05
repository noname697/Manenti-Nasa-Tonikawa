import { useApod } from "../hooks/useAPOD";

export const Hero = () => {
  const { picture, loading, error } = useApod();

  if (loading) {
    return <section className="p-10">Loading...</section>;
  }

  if (error) {
    return <section className="p-10">{error}</section>;
  }

  return (
    <section className="mx-auto max-w-7xl items-center px-8 py-20">
      <h1 className="font-title text-6xl">{picture.title}</h1>

      <img
        src={picture.url}
        alt={picture.title}
        className="mt-10 rounded-3xl"
      />
    </section>
  );
};
