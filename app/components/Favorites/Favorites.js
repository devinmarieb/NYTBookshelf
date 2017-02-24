import React, { Component } from 'react'
import Header from '../Header/Header'
import Button from '../Button/Button'

import './favorites-styles.scss'



export default class Bookshelf extends Component {
  render() {
    return(
      <section>
        <Header />
        <article className='button-container'>
          <Button name='Back to NYT Bestseller Lists' className='button back' link='/' />
          <Button name='Update Prices' className='button update' />
        </article>
        <h1 className='favorites-info'>
          NYT Bookshelf looks at the prices of all your favorite books every midinight.
          If the price of one of your favorite books has dropped, the color will change from
          gold to green! If you'd like to manually check the prices of the books, click the
          Update Prices button above.
        </h1>
        <h1>favorites</h1>
      </section>
    )
  }

}
