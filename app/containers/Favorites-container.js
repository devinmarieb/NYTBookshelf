import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from '../components/Favorites/Favorites'

const mapStateToProps = (state) => {
  return { favorites: state.mainReducer.favorites}
}

export default connect(mapStateToProps)(Favorites)
