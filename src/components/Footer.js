import React from "react"
import style from "../components/css/footer.module.css"
import socialIcons from "../constants/social-icons"
import link from "../constants/link"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        {link.map((item, index) => {
          return <Link key={index} to={item.path}>{item.text}</Link>
        })}
      </div>
      <div className={style.icons}>
        {socialIcons.map((item, index) => {
          return <a key={index} href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
        })}
      </div>
      <div className={style.copyright}>
        Copyright &copy; from Swann {new Date().getFullYear()} all right reserved.
      </div>
    </footer>
  )
}

export default Footer