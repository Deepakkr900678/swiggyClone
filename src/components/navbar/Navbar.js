import React from 'react'
import NavListItem from './NavListItem'
import svg from './SvgNavbar'
import "./css/Navbar.css"

export default function Navbar(props) {
  return (
    <header className='nav-container'>
      <div className='navbar'>
        <a href="/" title='Swiggy' style={{ marginRight: "16px" }}>{svg.logo}</a>
        <div className='address'>
          <span className='area'>
            <span className='bold-address'><strong>{props.area}</strong></span>
          </span>
          <span className='light-address'>
            {props.address.slice(0, 20)}...
          </span>
          <span className='arrow'>
            <i className='fa-solid fa-chevron-down' style={{ color: "#fc8019" }}></i>
          </span>
        </div>
        <ul className='nav-list'>
          <li className='card nav-li'><NavListItem icon={svg.cart} text="Cart" cart={<span className='cart-value'>0</span>}/></li>
          <li className='sign-in nav-li'><NavListItem icon={svg.signin} text="Sign In"/></li>
          <li className='help nav-li'><NavListItem icon={svg.help} text="Help"/></li>
          <li className='offers nav-li'><NavListItem icon={svg.offers} text="Offers"/></li>
          <li className='search nav-li'><NavListItem icon={svg.search} text="Search"/></li>
        </ul>
      </div>
    </header>
  )
}
