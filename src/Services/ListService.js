import { API_URL, API_KEY } from "../Config/config";

export const fetchListData = id => {
  const url = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
  return fetch(url).then(response => response.json());
};
