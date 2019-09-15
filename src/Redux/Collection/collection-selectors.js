import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectCollectionData = createSelector(
  [selectCollection],
  collection => collection.collection
);