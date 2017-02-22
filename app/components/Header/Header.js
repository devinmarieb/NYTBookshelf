import React from 'react'

import './header-styles.scss'


const Header = (props) => {
  return(
    <section className={ props.className }>
      <h1 className={ props.textClass }> { props.title } </h1>
    </section>
  )
}


export default Header;
