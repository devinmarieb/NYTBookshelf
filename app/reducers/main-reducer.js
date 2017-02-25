const mainReducer = (state = {books: [], favorites: []}, action) => {
  switch(action.type) {
    case 'ADD_BOOKS':
      return Object.assign({}, state, { books: action.books });
    case 'ADD_FAVORITES':
    console.log('favorite', action.favorite, 'favarray', state.favorites);
      return Object.assign({}, state, { favorites: [ ...state.favorites, action.favorite] })
    // !state.favorites.includes(action.favorite) ? state.favorites.push(action.favorite) : state.favorites.splice(action.favorite, 1)
  }
  return state
}

export default mainReducer;


// Event Listener --> Dispatch Action(books) --> Format Action(books) --> Reduce Info To State(books) --> Return State With Books
