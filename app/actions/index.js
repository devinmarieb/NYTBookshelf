export const addBooks = (books) => {
  return {
    type: 'ADD_BOOKS',
      books: books.map((book)=> {
        return(
          book.book_details.map((info)=> {
            return console.log(info.title, info.author, info.description, info.primary_isbn13);
              //Making this an object or array saves only the info I want in store.
              //HOWEVER
              //Returning this as an array or as an object with key value pairs doesn't
              //get me any closer to being able to render it on the screen
          })
        )
      })
  }
}
