import React from 'react'

import './button-styles.scss'


const Button = (props) => {
  return(
    <button className={ props.className } onClick={ props.onClick }>{ props.name }</button>
  )
}


export default Button;
