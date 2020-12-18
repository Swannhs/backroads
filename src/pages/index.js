import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const home = () => {
  return (
    <>
      <Layout>
        hello from home<Link to="/blog">Blog</Link>
      </Layout>
    </>
  )
}
export default home