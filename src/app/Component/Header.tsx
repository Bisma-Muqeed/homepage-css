import React from 'react'
import style from "./Header.module.css"
import Link from 'next/link'
const Header = () => {
  return (
    <div className = {style.navbar}>
    <div className = {style.navLogo}>
      <h1>BurgerZONE</h1>
      </div>
      <div>
        <nav >
          <ul className = {style.navContainer}>
            <li className = {style.navItems}><Link href = "/">Home</Link></li>
            <li className = {style.navItems}><Link href = "/">Delivery</Link></li>
            <li className = {style.navItems}><Link href = "/">Contact</Link></li>
          </ul>
        </nav>
      </div>
      </div>
  )
}

export default Header
