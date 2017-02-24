import React from 'react'
import {Link} from 'react-router';

import './button-styles.scss'


const Button = (props) => {
  return(
    <Link to={props.link} className='link'>
      <button className={ props.className } onClick={ props.onClick }>{ props.name }</button>
    </Link>
  )
}


export default Button;
