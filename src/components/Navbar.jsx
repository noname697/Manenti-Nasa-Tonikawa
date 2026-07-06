import { FiHeart } from "react-icons/fi";
import { useApp } from "../context/AppContext";

export const Navbar = () => {
  const { favorites, setIsFavoritesOpen } = useApp();

  return (
    <header className="px-8 py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="font-title text-3xl text-accent">
          Manenti Nasa Tonikawa
        </h1>
        <button
          onClick={() => setIsFavoritesOpen(true)}
          className="cursor-pointer relative rounded-full bg-surface p-3 transition hover:bg-white/10"
        >
          <FiHeart size={22} />

          {favorites.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-background">
              {favorites.length}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};
