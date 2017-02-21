import React, { Component } from 'react'
import $ from 'jquery'

import Button from '../Button/Button'

import './main-styles.scss'


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
        <Button name='Hardcover Fiction' className='button' onClick={ ()=> this.updateList('hardcover-fiction') } />
        <Button name='Paperback Fiction' className='button' onClick={ ()=> this.updateList('trade-fiction-paperback') } />
        <Button name='E-Book Fiction' className='button' onClick={ ()=> this.updateList('e-book-fiction') } />
        <Button name='Hardcover NonFiction' className='button' onClick={ ()=> this.updateList('hardcover-nonfiction') } />
        <Button name='Paperback NonFiction' className='button' onClick={ ()=> this.updateList('paperback-nonfiction') } />
        <Button name='E-Book NonFiction' className='button' onClick={ ()=> this.updateList('e-book-nonfiction') } />
        <Button name='Young Adult Hardcover' className='button' onClick={ ()=> this.updateList('young-adult-hardcover') } />
      </div>
    )
  }

}
