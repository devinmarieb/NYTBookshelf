export const addBooks = (books) => {
  return {
    type: 'ADD_BOOKS',
      books
  }
}

export const saveFavorites = (favorite) => {
  return {
    type: 'ADD_FAVORITES',
    favorite
  }
}

export const deleteFavorite = (deletedFav, e) => {
  return {
    type: 'DELETE_FAVORITE',
    deletedFav
  }
}
