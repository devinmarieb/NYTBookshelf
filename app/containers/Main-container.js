import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBooks, saveFavorites } from '../actions'
import Main from '../components/Main/Main'
import Favorites from '../components/Favorites/Favorites'

const mapStateToProps = (state) => {
  // console.log(state);
  return ({ bookList: state.mainReducer.books, favorites: state.mainReducer.favorite })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleAPI: (books) => {
      dispatch(addBooks(books))
    },
    handleFavorites: (favorite) => {
      dispatch(saveFavorites(favorite))
    }
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
