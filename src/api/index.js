const KEY =
  "?client_id=728278d79c53f9aeb08b94535d8c0671d7138a3074d64832e6a07941a2ef6037";
const URL = `https://api.unsplash.com/photos/`;

export const fetchImage = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const fetchImageStats = async id => {
  // throw new Error("sorry");
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

// export { fetchImages, fetchImageStats };
