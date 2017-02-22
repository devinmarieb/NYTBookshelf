import React, { Component } from 'react'
import $ from 'jquery'

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
    //WIP change button color on click
    // e.target.classList.toggle('button-clicked')
  }

  // getInfo() {
  //   console.log(this.props.bookList);
  //   // this.props.bookList.map((book)=> {
  //   //   return(
  //   //     <article>
  //   //       { book.book_details.author }
  //   //     </article>
  //   //   )
  //   // })
  // }



  render(){
    // console.log(this.props.bookList);
    return(
      <div>
        <Button name='Hardcover Fiction' className='button' onClick={ (e)=> this.updateList('hardcover-fiction', e) } />
        <Button name='Paperback Fiction' className='button' onClick={ (e)=> this.updateList('trade-fiction-paperback', e) } />
        <Button name='E-Book Fiction' className='button' onClick={ (e)=> this.updateList('e-book-fiction', e) } />
        <Button name='Hardcover NonFiction' className='button' onClick={ (e)=> this.updateList('hardcover-nonfiction', e) } />
        <Button name='Paperback NonFiction' className='button' onClick={ (e)=> this.updateList('paperback-nonfiction', e) } />
        <Button name='E-Book NonFiction' className='button' onClick={ (e)=> this.updateList('e-book-nonfiction', e) } />
        <Button name='Young Adult Hardcover' className='button' onClick={ (e)=> this.updateList('young-adult-hardcover', e) } />

        {/* <section>
          { this.getInfo() }
        </section> */}

      </div>
    )
  }

}
