import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavorite } from '../actions'
import Favorites from '../components/Favorites/Favorites'

const mapStateToProps = (state) => {
  return { favorites: state.mainReducer.favorites}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (deletedFav, e) => {
      console.log(e);
      dispatch(deleteFavorite(deletedFav, e))
        e.target.classList.add('clicked-delete')
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
