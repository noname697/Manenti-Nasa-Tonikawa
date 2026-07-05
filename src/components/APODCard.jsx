export const APODCard = ({ picture }) => {
  const isImage = picture.media_type === "image";

  return (
    <article className="overflow-hidden rounded-4xl border border-white/10 bg-surface shadow-2xl">
      {isImage ? (
        <img
          src={picture.url}
          alt={picture.title}
          className="h-125 w-full object-cover"
        />
      ) : (
        <iframe
          src={picture.url}
          title={picture.title}
          className="h-125 w-full"
          allowFullScreen
        />
      )}

      <div className="space-y-6 p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            NASA APOD
          </p>

          <h1 className="mt-2 font-title text-5xl">{picture.title}</h1>

          <p className="mt-2 text-muted">{picture.date}</p>
        </div>

        <p className="leading-8 text-muted">{picture.explanation}</p>
      </div>
    </article>
  );
};
