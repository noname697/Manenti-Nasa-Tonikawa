import { AnimatePresence } from "framer-motion";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FiHeart, FiX } from "react-icons/fi";

const FavoritesDrawer = () => {
  const { favorites, isFavoritesOpen, setIsFavoritesOpen, setSelectedDate } =
    useApp();

  return (
    <AnimatePresence>
      {isFavoritesOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsFavoritesOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border border-white/10 bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <FiHeart />

                <h2 className="font-title text-3xl">Favorites</h2>
              </div>
              <button onClick={() => setIsFavoritesOpen(false)}>
                <FiX size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {favorites.length === 0 && (
                <p className="mt-10 text-center text-muted">
                  No favorites yet.
                </p>
              )}

              <div className="space-y-4">
                {favorites.map((picture) => (
                  <button
                    key={picture.date}
                    onClick={() => {
                      setSelectedDate(picture.date);
                      setIsFavoritesOpen(false);
                    }}
                    className="flex w-full gap-4 rounded-2xl bg-surface p-3 text-left transition hover:bg-white/10"
                  >
                    <img
                      src={picture.url}
                      alt={picture.title}
                      className="h-20 w-20 rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="line-clamp-2">{picture.title}</h3>
                      <p className="mt-2 text-sm text-muted">{picture.date}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default FavoritesDrawer;
