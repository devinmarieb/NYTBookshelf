export const addBooks = (books) => {
  return {
    type: 'ADD_BOOKS',
      books
  }
}


export const saveFavorites = (favorites) => {
  return {
    type: 'ADD_FAVORITES',
    favorites
  }
}
