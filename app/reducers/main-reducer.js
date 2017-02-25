const mainReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_BOOKS':
      return Object.assign({}, state, { books: action.books });
    case 'ADD_FAVORITES':
      return Object.assign({}, state, { favorites: action.favorites })
  }
  return state
}

export default mainReducer;


// Event Listener --> Dispatch Action(books) --> Format Action(books) --> Reduce Info To State(books) --> Return State With Books
