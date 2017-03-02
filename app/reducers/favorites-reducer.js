const favoritesReducer = (state.favorites, action) => {
  switch(action.type) {
    case 'DELETE_FAVORITE',
      return Object.assign({}, state, {favorites: action.deletedFav})
  }
}
