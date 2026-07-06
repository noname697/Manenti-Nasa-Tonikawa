import { useEffect, useState } from "react";
import { getPictureByDate, getTodayPicture } from "../services/nasaApi";

export const useApod = (selectedDate) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return { picture, loading, error };
};
