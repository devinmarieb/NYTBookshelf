//GET BOOK PHOTO
  // http://covers.openlibrary.org/b/isbn/9780385533225-L.jpg

  //with image https://ia800803.us.archive.org/zipview.php?zip=/32/items/olcovers642/olcovers642-L.zip&file=6429406-L.jpg
  //without image http://covers.openlibrary.org/b/isbn/9781250123114-L.jpg
  //http://www.webconfs.com/http-header-check.php


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

  //

  //checkImageSrc(xhr, isbn) {
  //   let client = new XMLHttpRequest();
  //   client.open("GET", `http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`, true);
  //   client.send();
  //   // client.onreadystatechange = function() {
  //     // if(this.readyState == this.HEADERS_RECEIVED) {
  //       console.log(client.getResponseHeader("Content-Type"));
  //       if(client.getResponseHeader("Content-Type") === 'image/jpeg') {
  //         return (<img src={require('../../../images/nobook.png')} />)
  //       } else {
  //         return (<img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} />)
  //       }
  //     // }
  //   // }
  // }
