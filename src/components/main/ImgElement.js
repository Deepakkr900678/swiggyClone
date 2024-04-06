import React from 'react'

export default function ImgElement(props) {
    return (
        <div className={`scroller-img-woym ${props.first}`}>
            <div>
                <img src={props.src} width="144" height="180" alt={props.label} />
                <div></div>
            </div>
        </div>
    )
}
