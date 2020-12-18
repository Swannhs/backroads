import React from "react"
import style from "./css/error.module.css"
import Banner from "../components/Banner"
import { Link } from "gatsby"

const error = () => {
  return (
    <>
      <header className={style.error}>
        <Banner title="oops page not found">
          <Link to="/" className="btn-white">Back to home</Link>
        </Banner>
      </header>
    </>
  )
}

export default error