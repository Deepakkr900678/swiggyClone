import React from 'react'

export default function BestResItem(props) {
    return (
        <a href='/' className='best-res-link'>
            <div className='best-res-item'>
                <div className='best-res-item-content'>
                    <div className={`rating-points best-res-text ${props.darkText}`}>{props.text}</div>
                    <div className='svg-best-res'>{props.svg}</div>
                </div>
            </div>
        </a>
    )
}
