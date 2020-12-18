import React, { useState } from "react"
import style from "./css/navbar.module.css"
import logo from "../../static/images/logo.svg"
import { FaAlignRight } from "react-icons/all"
import link from "../constants/link"
import { Link } from "gatsby"
import socialIcons from "../constants/social-icons"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNavbar = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={style.navbar}>
      <div className={style.navCenter}>
        <div className={style.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={style.logoBtn} onClick={toggleNavbar}>
            <FaAlignRight className={style.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${style.navLinks} ${style.showNav}` : `${style.navLinks}`}>
          {link.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.text}
                </Link>
              </li>)
          })}
        </ul>
        <div className={style.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return <a key={index} href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar