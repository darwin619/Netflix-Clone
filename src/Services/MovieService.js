import { API_URL, API_KEY } from '../Config/config';

const urls = [
`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=4`,
];

export function fetchData() {
  return Promise.all(urls.map(items => {
    return fetch(items).then(response => response.json());
  }));
}

