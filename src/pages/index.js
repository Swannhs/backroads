import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { FaFonticonsFi } from "react-icons/fa";

const home = () => {
  return (
    <>
      <Layout>
        hello from home<Link to="/blog">{FaFonticonsFi()}</Link>

      </Layout>
    </>
  )
}
export default home