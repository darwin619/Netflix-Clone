import { API_URL, API_KEY } from "../Config/config";

export const fetchSearchData = value => {
  value = value.split(" ").join("%20");
  const url = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;
  return fetch(url).then(response => response.json());
};
