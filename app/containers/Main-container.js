import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBooks } from '../actions'
import Main from '../components/Main/Main'

const mapStateToProps = (state) => {
  // console.log(state);
  return { bookList: state.mainReducer.books }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAPI: (books) => {
      dispatch(addBooks(books))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
