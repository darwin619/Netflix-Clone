import { API_URL, API_KEY } from '../Config/config';

const urls = [
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=avengers%20infinity`,
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=The%20Lion%20King`,
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=aladdin`,
];

export function fetchGrid() {
  return Promise.all(urls.map(items => {
    return fetch(items).then(response => response.json());
  }));
}

