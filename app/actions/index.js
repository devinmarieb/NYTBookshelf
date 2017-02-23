export const addBooks = (books) => {
  return {
    type: 'ADD_BOOKS',
      books
      //   books.map((book)=> {
      //   return(
      //     book.book_details.map((info)=> {
      //       return [info.title, info.author, info.description, info.primary_isbn13]
      //     })
      //   )
      // })
  }
}


export const saveFavorites = (favorites) => {
  return {
    type: 'ADD_FAVORITES',
    favorites
  }
}
