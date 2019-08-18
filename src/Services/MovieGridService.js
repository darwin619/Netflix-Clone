import { API_URL, API_KEY } from '../Config/config';

const urls = [
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=avengers%20endgame`,
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=The%20Lion%20King`,
`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=once%20upon%20a%20time%20in%20hollywood`,
];

export function fetchGrid() {
  return Promise.all(urls.map(items => {
    return fetch(items).then(response => response.json());
  }));
}

