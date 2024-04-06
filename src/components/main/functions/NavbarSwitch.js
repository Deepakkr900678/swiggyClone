import React, { useEffect, useState } from 'react'
import Navbar from "../../navbar/Navbar"
import SecondNav from '../../navbar/SecondNav'
import HoverFunction from "../../navbar/HoverFunction"

export default function NavbarSwitch() {
  const [scrollPosition, changeScrollPosition] = useState(0)
  window.addEventListener("scroll", () => { changeScrollPosition(window.scrollY) })
  useEffect(() => {
    HoverFunction()
  }, [scrollPosition])
  if (scrollPosition > 1180) {
    return (
      <SecondNav secondNavSwitched='secondNavSwitched' searchBar='' />
    )
  } else {
    return <Navbar area='Nandanvan Colony' address='Swami Dayanand Nagar, Indore, Madhya Pradesh 452009, India' />
  }

}
