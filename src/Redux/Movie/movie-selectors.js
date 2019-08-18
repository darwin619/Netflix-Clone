import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovieItems = createSelector(
  [selectMovie],
  movie => movie.movieItems
);

export const selectMovieGridItems = createSelector(
  [selectMovie],
  movie => movie.movieGridItems
);
