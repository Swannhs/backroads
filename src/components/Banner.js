import React from "react"
import style from "./css/banner.module.css"
import 'animate.css'

const Banner = (props) => {
  return (
    <div className={style.banner}>
      <h1 className='animate__animated animate__backInDown'>{props.title}</h1>
      <p className='animate__animated animate__tada'>{props.info}</p>
      <p className='animate__animated animate__bounceInDown'>{props.children}</p>
    </div>
  )
}

export default Banner