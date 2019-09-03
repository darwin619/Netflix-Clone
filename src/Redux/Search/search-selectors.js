import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchItems = createSelector(
  [selectSearch],
  search => search.searchItems
);

export const selectSearchedMovieByTitle = (id) => createSelector(
  [selectSearchItems],
  searchItems => searchItems.filter(items => items.title ? (items.id === id) : null)
);

export const selectSearchedTVShowByTitle = (id) => createSelector(
  [selectSearchItems],
  searchItems => searchItems.filter(items => items.name ? (items.id === id) : null)
);


