import { useEffect, useState } from "react";
import { getTodayPicture } from "../services/nasaApi";

export const useApod = () => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPicture = async () => {
      try {
        const data = await getTodayPicture();
        setPicture(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPicture();
  }, []);

  return { picture, loading, error };
};
