import { FiCalendar, FiDownload, FiHeart } from "react-icons/fi";
import Button from "./Button";
import { useApp } from "../context/AppContext";
import { FaHeart } from "react-icons/fa";

export const APODCard = ({ picture }) => {
  const { toggleFavorite, isFavorite } = useApp();

  const favorite = isFavorite(picture.date);

  const isImage = picture.media_type === "image";

  return (
    <>
      <section className="relative h-[85vh] overflow-hidden rounded-[40px]">
        {isImage ? (
          <img
            src={picture.hdurl ?? picture.url}
            alt={picture.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <iframe
            src={picture.url}
            title={picture.title}
            className="absolute inset-0 h-full w-full"
            allowFullScreen
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0  right-0 p-12">
          <p className="mb-3 uppercase tracking-[0.35em] text-primary">
            NASA APOD
          </p>

          <h1 className="max-w-4xl font-title text-6xl">{picture.title}</h1>

          <p className="mt-3 text-muted">{picture.date}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" onClick={toggleFavorite}>
              {favorite ? <FaHeart /> : <FiHeart />}

              {favorite ? "Saved" : "Favorite"}
            </Button>
            <Button variant="secondary">
              <FiCalendar />
            </Button>
            <Button variant="secondary">
              <FiDownload />
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-4xl">
        <h2 className="mb-6 font-title text-4xl">About Today's Picture</h2>

        <p className="leading-9 text-muted">{picture.explanation}</p>
      </section>
    </>
  );
};
