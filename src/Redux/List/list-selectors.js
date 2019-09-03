import { createSelector } from 'reselect';

const selectList = state => state.list;

export const selectListItems = createSelector(
  [selectList],
  list => list.listItems
);

export const selectListMovieByTitle = (id) => createSelector(
  [selectListItems],
  listItems => listItems.filter(items => items.title ? (items.id === id) : null)
);

export const selectListTVShowByTitle = (id) => createSelector(
  [selectListItems],
  listItems => listItems.filter(items => items.name ? (items.id === id) : null)
);


