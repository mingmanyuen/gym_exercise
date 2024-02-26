export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3edf59f985msh435d3e8ec47a3d5p1f7802jsne8aae9d5d24e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "174307dcd0msh0bba9c5d725f58dp1f83fajsna7e6bfd93e8d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options, limit = 2000, offset = 0) => {
  const apiUrl = `${url}?limit=${limit}&offset=${offset}`;

  const response = await fetch(apiUrl, options);
  const data = await response.json();
  return data;
};

export const fetchData2 = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
