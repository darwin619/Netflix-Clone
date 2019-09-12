import { createSelector } from "reselect";
import { FixString } from "../../Utils/FixString";

const selectMovie = state => state.movie;

export const selectMovieItems = createSelector(
  [selectMovie],
  movie => movie.movieItems
);

export const selectMovieGridItems = createSelector(
  [selectMovie],
  movie => movie.movieGridItems
);

export const selectMovieCast = createSelector(
  [selectMovie],
  movie => movie.movieCast
);

export const selectMovieVideos = createSelector(
  [selectMovie],
  movie => movie.movieVideos
);

export const selectIsMovieFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);

export const selectIsAdditionalMovieFetching = createSelector(
  [selectMovie],
  movie => movie.isAdditionalFetching
);


export const selectMovieByTitle = params =>
  createSelector(
    [selectMovieItems],
    movieItems => movieItems.filter(items => FixString(items.title) === params)
  );
