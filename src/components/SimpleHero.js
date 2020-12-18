import React from "react"
import './layout.css'
const SimpleHero = props => {
  return (
    <header className="defaultHero">
      {props.children}
    </header>
  )
}

export default SimpleHero