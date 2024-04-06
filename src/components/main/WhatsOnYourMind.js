import React from 'react'
import ArrowButton from "./ArrowButton"
import ImgElement from "./ImgElement"
import ImgData from "./data/WhatsData"

export default function WhatsOnYourMind() {
    return (
        <div className='common-margin'>
            <div className='common-container'>
                <ArrowButton />
                <div className='main-content'>
                    <div className='heading-content'>
                        <h2 className='content-text'>What's on your mind?</h2>
                    </div>
                    <div className="scroller">
                        <div className="row">
                            {ImgData.map((element) => {
                                return <ImgElement lable={element.lable} src={element.src} first={element.first} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
