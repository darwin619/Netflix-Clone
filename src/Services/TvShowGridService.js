import { API_URL, API_KEY } from '../Config/config';

const urls = [
`${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=stranger%20things`,
`${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=GAME%20OF%20THRONES`,
`${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=13%20reasons`,
];

export function fetchTvShowsGrid() {
  return Promise.all(urls.map(items => {
    return fetch(items).then(response => response.json());
  }));
}

