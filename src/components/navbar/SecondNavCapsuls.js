import React from 'react'

export default function SecondNavCapsuls(props) {
  return (
    <div className='capsul'>
      <div className={`capsul-container ${props.nogap}`}>
        <div className='capsul-name'>{props.name}</div>
        <div className='capsul-icon'>{props.svg}</div>
      </div>
    </div>
  )
}
