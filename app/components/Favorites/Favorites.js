import React, { Component } from 'react'
import Header from '../Header/Header'
import Button from '../Button/Button'

import './favorites-styles.scss'


export default class Favorites extends Component {
  render() {
    let favoriteBooks = JSON.parse(localStorage.getItem('userFavList'))
    let favorites
    if(favoriteBooks)
    favorites = favoriteBooks.map((favorite)=> {
      return (
        favorite.amazon_product_url,
        favorite.book_details.map((info, i)=> {
          return(
            <article className='individual-book'>
              <div className='book-image-container'>
                <Button name='&#9733;' className='star-button' />
                <img src={`http://covers.openlibrary.org/b/isbn/${info.primary_isbn13}-L.jpg`} className='book-image'/>
                <a href={favorite.amazon_product_url} target='_blank' className='amazon-url'>Find on Amazon</a>
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
          <Button name='Back to NYT Bestseller Lists' className='button back' link='/' />
          <Button name='Update Prices' className='button update' />
        </article>
        <h1 className='favorites-info'>
          We will look at the prices of all your favorite books every midinight.
          If the price of one of your favorite books has dropped, the color will change from
          gold to green! <br></br> If you'd like to manually check for updates, click the Update Prices button above.
        </h1>
        {favorites}
      </section>
    )
  }

}
