import { createContext, use, useEffect, useMemo, useState } from "react";
import {
  getPictureByDate,
  getRandomDate,
  getTodayPicture,
} from "../services/nasaApi";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [picture, setPicture] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    const loadPicture = async () => {
      try {
        setLoading(true);

        const data = selectedDate
          ? await getPictureByDate(selectedDate)
          : await getTodayPicture();

        setPicture(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPicture();
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const randomPicture = () => {
    let date;

    do {
      date = getRandomDate();
    } while (date === selectedDate);

    setSelectedDate(date);
  };

  const isFavorite = (date) => {
    return favorites.some((picture) => picture.date === date);
  };

  const toggleFavorite = () => {
    if (!picture) return;

    setFavorites((prev) => {
      if (isFavorite(picture.date)) {
        return prev.filter((item) => item.date !== picture.date);
      }

      return [...prev, picture];
    });
  };

  const value = useMemo(
    () => ({
      picture,
      loading,
      error,
      selectedDate,
      setSelectedDate,
      randomPicture,
      favorites,
      toggleFavorite,
      isFavorite,
      isFavoritesOpen,
      setIsFavoritesOpen
    }),
    [picture, loading, error, selectedDate, favorites],
  );

  return <AppContext value={value}>{children}</AppContext>;
};

export const useApp = () => {
  const context = use(AppContext);

  return context;
};
