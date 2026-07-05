export const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-1 items-center px-8 py-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-primary uppercase tracking-[0.4em]">
          NASA APOD
        </p>

        <h2 className="font-title text-7xl leading-none">
          Discover
          <br />
          The universe
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
          Every day the universe reveals something new. Explore NASA's Astronomy
          Picture of the Day in a calm, elegant interface inspired by moonlit
          nights.
        </p>
      </div>
    </section>
  );
};
