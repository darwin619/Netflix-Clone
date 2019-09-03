import ListActionTypes from './list-types';

export const addItem = item => ({
   type: ListActionTypes.ADD_ITEM,
   payload: item
});

export const removeItem = item => ({
   type: ListActionTypes.REMOVE_ITEM,
   payload: item
});