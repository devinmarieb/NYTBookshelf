import React from 'react'

import './header-styles.scss'


const Header = () => {
  return(
    <section className='header'>
      <h1 className='nyt-title'> NYT Bookshelf </h1>
      <img src={require('../../../images/65px.png')} className='nyt-logo' />
    </section>
  )
}

Header.propTypes = {
  className: React.PropTypes.string,
}


export default Header;
