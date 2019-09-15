// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=9f1ffd64abd4bde18614fd9087d87d71
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "9f1ffd64abd4bde18614fd9087d87d71";

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";

// w92, w154, w185, w342, w500, w780, original
const GRID_IMAGE_SIZE = "w500";

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

// w92, w154, w185, w342, w500, w780, original
const PROFILE_SIZE = "w92";

const TRAILER_LINK = "https://www.youtube.com/watch?v=";

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  GRID_IMAGE_SIZE,
  POSTER_SIZE,
  PROFILE_SIZE,
  TRAILER_LINK
};
