export const addItemToList = (listItems, listItemToAdd) => {
  const existingListItem = listItems.find(
    listItem => listItem.id === listItemToAdd.id
  );

  if (existingListItem) return listItems;
  else {
    return [...listItems, { ...listItemToAdd }];
  }
};

export const removeItemFromList = (listItems, listItemToRemove) => {
  return listItems.filter(items => items.id !== listItemToRemove.id);
};
