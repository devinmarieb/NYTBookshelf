import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBooks, saveFavorites, checkFavorites } from '../actions'
import Main from '../components/Main/Main'
import Favorites from '../components/Favorites/Favorites'

const mapStateToProps = (state) => {
  localStorage.setItem('userFavList', JSON.stringify(state.mainReducer.favorites))
  return ({ bookList: state.mainReducer.books, favorites: JSON.parse(localStorage.getItem('userFavList'))})
}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleAPI: (books) => {
      dispatch(addBooks(books))
    },
    handleFavorites: (favorite, e) => {
      dispatch(saveFavorites(favorite))
      if(e.target.classList.contains('clicked-favorite')) {
        e.target.classList.remove('clicked-favorite')
      } else {
        e.target.classList.add('clicked-favorite')
      }
    }
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
