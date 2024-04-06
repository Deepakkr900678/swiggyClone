import React from 'react'
import RestaurentCard from './RestaurentCard'
import RestaurentsCardShuffle from './data/RestaurentCardShuffleData'

export default function OnlineFood() {
    return (
        <div className='common-margin'>
            <div>
                <div className='online-grid-box'>
                    {RestaurentsCardShuffle.map((elem) => {
                        return <RestaurentCard src={elem.src} name={elem.name} offer={elem.offer} rating={elem.rating} description={elem.description} address={elem.address} removePadding='removePadding' removeWidth='removeWidth' />

                    })}
                </div>
            </div>

        </div>
    )
}
