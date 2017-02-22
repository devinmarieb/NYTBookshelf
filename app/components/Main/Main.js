import React, { Component } from 'react'
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
      // console.log(books);
    })
    // this.toggleListTab()
    // setTimeout(function(){ e.target.classList.add('button-clicked') }, 1000)
  }

  // toggleListTab() {
  //   debugger
  //   let buttons = document.querySelectorAll('.button')
  //   console.log(buttons);
  // }

  render() {
    let allBooks = this.props.bookList
    let books
    if(allBooks)
    books = allBooks.map((book)=> {
      return (
        book.book_details.map((info, i)=> {
          return(
            <article>
              {/* <img src="http://covers.openlibrary.org/b/isbn/9780385533225-L.jpg" /> */}
              <h1 className='book-title'>{ info.title }</h1>
              <h2 className='book-author'>{ info.author }</h2>
              <p className='book-description'>{ info.description }</p>
            </article>
          )
        })
      )
    })

    return(
      <section>

        <Header />

        <article className='button-container'>
          <Button name='Hardcover Fiction' className='button' onClick={ (e)=> this.updateList('hardcover-fiction', e) } />
          <Button name='Paperback Fiction' className='button' onClick={ (e)=> this.updateList('trade-fiction-paperback', e) } />
          <Button name='E-Book Fiction' className='button' onClick={ (e)=> this.updateList('e-book-fiction', e) } />
          <Button name='Hardcover NonFiction' className='button' onClick={ (e)=> this.updateList('hardcover-nonfiction', e) } />
          <Button name='Paperback NonFiction' className='button' onClick={ (e)=> this.updateList('paperback-nonfiction', e) } />
          <Button name='E-Book NonFiction' className='button' onClick={ (e)=> this.updateList('e-book-nonfiction', e) } />
          <Button name='Young Adult Hardcover' className='button' onClick={ (e)=> this.updateList('young-adult-hardcover', e) } />
          <Button name='&#9733;' className='favorites-button' />
        </article>

        <section className='bookshelf'>
          <article>
            <div>
              <Button name='&#9733;' className='star-button' />
            </div>
            {/* <article className='info-container'> */}
              {books}
            {/* </article> */}
          </article>
        </section>

        <img src={require('../../../images/150pxB.png')} className='nyt-logo' />

      </section>
    )
  }

}
