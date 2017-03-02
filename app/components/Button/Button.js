import React from 'react'
import { Link } from 'react-router';

import './button-styles.scss'


const Button = (props) => {
  return(
    <Link to={props.link} className='link'>
      <button className={ props.className } onClick={ props.onClick }>{ props.name }</button>
    </Link>
  )
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  name: React.PropTypes.string,
  link: React.PropTypes.string,
  className: React.PropTypes.string
}


export default Button;
