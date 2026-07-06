import { FiCalendar, FiDownload, FiHeart } from "react-icons/fi";
import Button from "./Button";
import { useApp } from "../context/AppContext";
import { FaHeart } from "react-icons/fa";
import InformationPanel from "./InformationPanel";
import { motion } from "framer-motion";

export const APODCard = ({ picture, onOpenDatePicker }) => {
  const { toggleFavorite, isFavorite } = useApp();

  const favorite = isFavorite(picture.date);

  const isImage = picture.media_type === "image";

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[85vh] overflow-hidden rounded-[40px]"
      >
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
            <Button variant="secondary" onClick={onOpenDatePicker}>
              <FiCalendar />
            </Button>
            <Button variant="secondary">
              <FiDownload />
            </Button>
          </div>
        </div>
      </motion.section>

      <InformationPanel picture={picture} />
    </>
  );
};
