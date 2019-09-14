import { API_URL, API_KEY } from "../Config/config";

const urls = [
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=stranger`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=the%20walking%20dead`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=lucifer`
];

export function fetchTvShowsGrid() {
  return Promise.all(
    urls.map(items => {
      return fetch(items).then(response => response.json());
    })
  );
}
