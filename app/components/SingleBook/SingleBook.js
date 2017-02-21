import React, { Component } from 'react'

const SingleBook = ({book}) => {
  return(
    <article key={book.display_name}>
      <h1>{book.display_name}</h1>
    </article>
  )
}

export default SingleBook;
