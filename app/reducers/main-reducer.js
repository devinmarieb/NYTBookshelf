let favoriteArray = JSON.parse(localStorage.getItem('userfavList'))
favoriteArray === null ?  favoriteArray = [] : favoriteArray = favoriteArray

const mainReducer = (state = {books: [], favorites: favoriteArray}, action) => {
  switch(action.type) {
    case 'ADD_BOOKS':
      return Object.assign({}, state, { books: action.books });

    case 'ADD_FAVORITES':
      let bookStatus = true
      state.favorites.map((favorite)=> {
        if(favorite.amazon_product_url === action.favorite.amazon_product_url) {
          bookStatus = false;
          state.favorites.splice(state.favorites.indexOf(favorite), 1)
        }
      })
      return bookStatus ? Object.assign({}, state, { favorites: [ ...state.favorites, action.favorite] }) : state
  }

  return state
}

export default mainReducer;


// Event Listener --> Dispatch Action(books) --> Format Action(books) --> Reduce Info To State(books) --> Return State With Books
