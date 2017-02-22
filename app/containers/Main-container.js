import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBooks } from '../actions'
import Main from '../components/Main/Main'

const mapStateToProps = (state) => {
  // console.log(state);
  return { bookList: state.mainReducer.books }
}

const getBookDetails = (books) => {
  let nbooks = books.map((book)=> {
    return(
      book.book_details.map((info)=> {
        return(
          console.log(info.title, info.author, info.description, info.primary_isbn13)
        )
      })
    )
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAPI: (books) => {
      dispatch(addBooks(getBookDetails(books)))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
