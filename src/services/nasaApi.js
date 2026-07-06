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

export const getRandomDate = () => {
  const start = new Date("1995-06-16").getTime();
  const end = new Date().getTime();

  const randomTime = start + Math.random() * (end - start);

  return new Date(randomTime).toISOString().split("T")[0];
};
