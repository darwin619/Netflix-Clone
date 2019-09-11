import { API_URL, API_KEY } from "../Config/config";

const urls = [
  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=3`
];

export const fetchData = () => {
  return Promise.all(
    urls.map(items => {
      return fetch(items).then(response => response.json());
    })
  );
};

export const fetchAdditionalMovieData = id => {
  const url = `${API_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits&language=en-US`;
  return fetch(url).then(response => response.json());
};
