import React from 'react'

export default function FooterLi(props) {
  return (
    <>
     <li className={`${props.class}`}>
        <div className='footer-text'>{props.text}</div>
     </li> 
    </>
  )
}
