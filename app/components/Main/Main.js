import React, { Component } from 'react'
import { Link } from 'react-router';
import $ from 'jquery'

import Header from '../Header/Header'
import Button from '../Button/Button'

import './main-styles.scss'


export default class Main extends Component {

  componentDidMount() {
    let bookListRequest =('https://api.nytimes.com/svc/books/v3/lists.json')
    bookListRequest += '?' + $.param({
      'api-key': "d7d1e070d64347eda225f068e97c8d21",
      'list': 'hardcover-fiction'
    })
    fetch(bookListRequest).then((result) => {
      return result.json()
    }).then((result) => {
      let books = result.results
      this.props.handleAPI(books)
    })
  }

  updateList(list, e) {
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
    })
    this.toggleListTab()
    e.target.classList.add('button-clicked')
  }

  toggleListTab() {
    let button = document.querySelectorAll('.button')
    var i
    for(i = 0; i < button.length; i++) {
      button[i].classList.remove('button-clicked')
    }
  }

  render() {
    let allBooks = this.props.bookList
    let books
    if(allBooks)
    books = allBooks.map((book)=> {
      return (
        book.amazon_product_url,
        book.book_details.map((info, i)=> {
          return(
            <article className='individual-book'>
              <div className='book-image-container'>
                <Button name='&#9733;' className='star-button' onClick={ (e)=> this.props.handleFavorites(book, e) } />
                <img src={`http://covers.openlibrary.org/b/isbn/${info.primary_isbn13}-L.jpg`} className='book-image'/>
                <a href={book.amazon_product_url} target='_blank' className='amazon-url'>Find on Amazon</a>
              </div>
              <div className='info-text'>
                <h1 className='book-title'>{ info.title }</h1>
                <h2 className='book-author'>{ info.author }</h2>
                <p className='book-description'>{ info.description }</p>
              </div>
            </article>
          )
        })
      )
    })

    return(
      <section>
        <Header />
        <article className='button-container'>
          <Button name='Hardcover Fiction' className='button button-clicked' onClick={ (e)=> this.updateList('hardcover-fiction', e) } link='hardcover-fiction' />
          <Button name='Paperback Fiction' className='button'  onClick={ (e)=> this.updateList('trade-fiction-paperback', e) } link='paperback-fiction' />
          <Button name='E-Book Fiction' className='button' onClick={ (e)=> this.updateList('e-book-fiction', e) } link='ebook-fiction' />
          <Button name='Hardcover NonFiction' className='button' onClick={ (e)=> this.updateList('hardcover-nonfiction', e) } link='hardcover-nonfiction' />
          <Button name='Paperback NonFiction' className='button' onClick={ (e)=> this.updateList('paperback-nonfiction', e) } link='paperback-nonfiction' />
          <Button name='E-Book NonFiction' className='button' onClick={ (e)=> this.updateList('e-book-nonfiction', e) } link='ebook-nonfiction' />
          <Button name='Young Adult Hardcover' className='button' onClick={ (e)=> this.updateList('young-adult-hardcover', e) } link='young-adult-hardcover' />
          <Button name='&#9733;' className='favorites-button' link='favorites' />
        </article>
        <section className='bookshelf'>
          <article className='info-container'>
            {books}
          </article>
        </section>
      </section>
    )
  }

}
