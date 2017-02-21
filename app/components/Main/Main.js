import React, { Component } from 'react'
import $ from 'jquery'

// import Button from './Button'

import './main-styles.css'


export default class Main extends Component {

  updateList(list) {
    let bookListRequest =('https://api.nytimes.com/svc/books/v3/lists.json')
    bookListRequest += '?' + $.param({
      'api-key': "d7d1e070d64347eda225f068e97c8d21",
      'list': list
    })
    fetch(bookListRequest).then((result) => {
      return result.json()
    }).then((result) => {
      let books = result.results
      this.props.handleAPI(books)
      console.log(books);
    })
  }

  render(){
    console.log(this.props.bookList);
    return(
      <div>
        <button onClick={ ()=> this.updateList('hardcover-nonfiction') }>Hardcover NonFiction</button>
        <button onClick={ ()=> this.updateList('hardcover-fiction') }>Hardcover Fiction</button>
      </div>
    )
  }

}
