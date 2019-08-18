import { createSelector } from 'reselect';

const selectTV = state => state.tv;

export const selectTVItems = createSelector(
  [selectTV],
  tv => tv.tvItems
);

export const selectTVGridItems = createSelector(
  [selectTV],
  tv => tv.tvGridItems
);

