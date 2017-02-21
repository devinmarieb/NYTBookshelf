const mainReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_BOOKS':
      return Object.assign({}, state, {books: action.books})
  }
  return state
}

export default mainReducer;
