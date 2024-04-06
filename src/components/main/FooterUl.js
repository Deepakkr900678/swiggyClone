import React from 'react'
import FooterLi from './FooterLi'

export default function FooterUl(props) {
    return (
        <div className='footer-ul'>
            <ul>
                <li className='heading-li'> {props.heading}</li>
                {props.ul.map((elem) => {
                    return <FooterLi text={elem.text} class={elem.class} />
                })}
            </ul>
        </div>
    )
}
