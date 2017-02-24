import React, { Component } from 'react'
import {Link} from 'react-router';
import $ from 'jquery'

import Header from '../Header/Header'
import Button from '../Button/Button'

import './main-styles.scss'


export default class Main extends Component {

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
        book.book_details.map((info, i)=> {
          return(
            <article className='individual-book'>
              <div className='book-image-container'>
                <Button name='&#9733;' className='star-button' onClick={()=> console.log('click')} />
                <img src={`http://covers.openlibrary.org/b/isbn/${info.primary_isbn13}-L.jpg`} className='book-image' />
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
          <Link to='/hardcover-fiction'>
            <Button name='Hardcover Fiction' className='button' onClick={ (e)=> this.updateList('hardcover-fiction', e) } />
          </Link>
          <Link to='/paperback-fiction'>
            <Button name='Paperback Fiction' className='button' onClick={ (e)=> this.updateList('trade-fiction-paperback', e) } />
          </Link>
          <Link to='/ebook-fiction'>
            <Button name='E-Book Fiction' className='button' onClick={ (e)=> this.updateList('e-book-fiction', e) } />
          </Link>
          <Link to='/hardcover-nonfiction'>
            <Button name='Hardcover NonFiction' className='button' onClick={ (e)=> this.updateList('hardcover-nonfiction', e) } />
          </Link>
          <Link to='/paperback-nonfiction'>
            <Button name='Paperback NonFiction' className='button' onClick={ (e)=> this.updateList('paperback-nonfiction', e) } />
          </Link>
          <Link to='/ebook-nonfiction'>
            <Button name='E-Book NonFiction' className='button' onClick={ (e)=> this.updateList('e-book-nonfiction', e) } />
          </Link>
          <Link to='/young-adult-hardcover'>
            <Button name='Young Adult Hardcover' className='button' onClick={ (e)=> this.updateList('young-adult-hardcover', e) } />
          </Link>
          {/* Link to Favorites component */}
          <Button name='&#9733;' className='favorites-button' />
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
