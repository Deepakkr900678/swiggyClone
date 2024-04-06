import React from 'react'
import BestOffer from "./BestOffer"
import WhatsOnYourMind from "./WhatsOnYourMind"
import TopRes from './TopRes'
// import SecondNav from "../navbar/SecondNav"
import OnlineFood from "./OnlineFood"
import BestRestaurents from "./BestRestaurents"
import BestCusine from "./BestCusine"
import ExploreRes from "./ExploreRes"
import DownloadApp from "./DownloadApp"
import Footer from "./Footer"
import "./css/Main.css";

export default function Main() {
  return (
    <div className='main'>
      <BestOffer/>
      <WhatsOnYourMind/>
      <hr className='horizontal-line-break'/>
      <TopRes/>
      <hr className='horizontal-line-break'/>
      <div className='online-heading'>
        <h2 className='content-text'>Restaurants with online food delivery in Indore</h2>
      </div>
      <div className='gap16px'></div>
      {/* <SecondNav SecondNavSwitched="second-nav" searchBar="displayNone"/> */}
      <OnlineFood/>
      <hr className='horizontal-line-break'/>
      <BestRestaurents/>
      <div className='gap64px'/>
      <BestCusine/>
      <div className='gap64px'/>
      <ExploreRes/>
      <div className='gap64px'/>
      <DownloadApp/>
      <Footer/>
    </div>
  )
}
