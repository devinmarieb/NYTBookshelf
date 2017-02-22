//GET BOOK PHOTO
  // http://covers.openlibrary.org/b/isbn/9780385533225-L.jpg


//OLD API REQUEST

// componentWillMount() {
//   // console.log(this.props);
//   var url = "https://api.nytimes.com/svc/books/v3/lists.json"
//   url += '?' + $.param({
//     'api-key': "d7d1e070d64347eda225f068e97c8d21",
//     'list': this.state.bookList
//   });
//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {
//     let books = result.results
//     console.log(books);
//     // this.props.handleAPI(books)
//   }).fail(function(err) {
//     throw err;
//   });
// }


//THERE SHOULD BE 11 BOOK CATEGORIES

//VERIFIED
  //hardcover-fiction
  //hardcover-nonfiction
  //young-adult-hardcover
  //e-book-fiction
  //e-book-nonfiction
  //trade-fiction-paperback
  //paperback-nonfiction

//NONVERIFIED
  //combined-print-ebook-fiction
  //combined-print-ebook-nonfiction
  //childrens-middle-grade-hardcover
  //childrens-picture-books
  //childrens-series

  //advide-how-to-misc
