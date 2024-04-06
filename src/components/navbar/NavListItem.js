import React from 'react'

export default function NavListItem(props) {
  return (
    <div className='nav-listItem'>
      <span className='nav-icon'>{props.icon}</span>
      <span className='nav-text'>{props.text}</span>
      {props.cart}
    </div>
  )
}
