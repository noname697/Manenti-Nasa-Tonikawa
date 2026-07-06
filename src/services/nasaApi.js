const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const BASE_URL = "https://api.nasa.gov/planetary/apod";

const fetchApod = async (params = "") => {
  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}${params}`);

  if (!response.ok) {
    throw new Error("Failed to fetch NASA APOD.");
  }

  return response.json();
};

export const getTodayPicture = () => {
  return fetchApod();
};

export const getPictureByDate = (date) => {
  return fetchApod(`&date=${date}`);
};
