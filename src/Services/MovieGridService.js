import { API_URL, API_KEY } from '../Config/config';

const urls = [
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=infinity`,
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=The%20Lion%20King`,
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=Toy%20story%204`,
];

export function fetchGrid() {
  return Promise.all(urls.map(items => {
    return fetch(items).then(response => response.json());
  }));
}

